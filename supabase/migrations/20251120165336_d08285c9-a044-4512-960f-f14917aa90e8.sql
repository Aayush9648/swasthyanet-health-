-- Create enum for user roles
CREATE TYPE public.app_role AS ENUM ('admin', 'health_worker', 'citizen');

-- Create enum for alert severity
CREATE TYPE public.alert_severity AS ENUM ('low', 'medium', 'high', 'critical');

-- Create enum for alert status
CREATE TYPE public.alert_status AS ENUM ('active', 'investigating', 'resolved');

-- Create enum for report status
CREATE TYPE public.report_status AS ENUM ('pending', 'verified', 'rejected');

-- Create profiles table
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  location TEXT,
  avatar_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create user_roles table
CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  role app_role NOT NULL DEFAULT 'citizen',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(user_id, role)
);

-- Create sensor_data table for IoT readings
CREATE TABLE public.sensor_data (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  sensor_id TEXT NOT NULL,
  location TEXT NOT NULL,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  ph_level DECIMAL(4, 2),
  turbidity DECIMAL(6, 2),
  temperature DECIMAL(4, 2),
  conductivity DECIMAL(8, 2),
  dissolved_oxygen DECIMAL(4, 2),
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create alerts table
CREATE TABLE public.alerts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  severity alert_severity NOT NULL,
  status alert_status NOT NULL DEFAULT 'active',
  location TEXT NOT NULL,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  sensor_id TEXT,
  affected_population INTEGER,
  created_by UUID,
  resolved_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create community_reports table
CREATE TABLE public.community_reports (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  report_type TEXT NOT NULL,
  description TEXT NOT NULL,
  location TEXT NOT NULL,
  latitude DECIMAL(10, 8),
  longitude DECIMAL(11, 8),
  photo_url TEXT,
  status report_status NOT NULL DEFAULT 'pending',
  verified_by UUID,
  verified_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create alert_subscriptions table
CREATE TABLE public.alert_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT NOT NULL,
  phone TEXT,
  location TEXT,
  severity_filter alert_severity[],
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  UNIQUE(email)
);

-- Create outbreak_predictions table for AI model outputs
CREATE TABLE public.outbreak_predictions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  location TEXT NOT NULL,
  risk_level DECIMAL(5, 2) NOT NULL,
  confidence DECIMAL(5, 2) NOT NULL,
  predicted_date DATE NOT NULL,
  factors JSONB,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sensor_data ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_reports ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.alert_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.outbreak_predictions ENABLE ROW LEVEL SECURITY;

-- Create security definer function to check user roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- RLS Policies for profiles
CREATE POLICY "Users can view all profiles"
  ON public.profiles FOR SELECT
  USING (true);

CREATE POLICY "Users can update own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own profile"
  ON public.profiles FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- RLS Policies for user_roles
CREATE POLICY "Anyone can view roles"
  ON public.user_roles FOR SELECT
  USING (true);

CREATE POLICY "Only admins can manage roles"
  ON public.user_roles FOR ALL
  USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for sensor_data
CREATE POLICY "Anyone can view sensor data"
  ON public.sensor_data FOR SELECT
  USING (true);

CREATE POLICY "Only admins and health workers can insert sensor data"
  ON public.sensor_data FOR INSERT
  WITH CHECK (
    public.has_role(auth.uid(), 'admin') OR 
    public.has_role(auth.uid(), 'health_worker')
  );

-- RLS Policies for alerts
CREATE POLICY "Anyone can view alerts"
  ON public.alerts FOR SELECT
  USING (true);

CREATE POLICY "Admins and health workers can create alerts"
  ON public.alerts FOR INSERT
  WITH CHECK (
    public.has_role(auth.uid(), 'admin') OR 
    public.has_role(auth.uid(), 'health_worker')
  );

CREATE POLICY "Admins and health workers can update alerts"
  ON public.alerts FOR UPDATE
  USING (
    public.has_role(auth.uid(), 'admin') OR 
    public.has_role(auth.uid(), 'health_worker')
  );

-- RLS Policies for community_reports
CREATE POLICY "Anyone can view verified reports"
  ON public.community_reports FOR SELECT
  USING (status = 'verified' OR auth.uid() = user_id);

CREATE POLICY "Authenticated users can create reports"
  ON public.community_reports FOR INSERT
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own reports"
  ON public.community_reports FOR UPDATE
  USING (auth.uid() = user_id);

CREATE POLICY "Admins and health workers can verify reports"
  ON public.community_reports FOR UPDATE
  USING (
    public.has_role(auth.uid(), 'admin') OR 
    public.has_role(auth.uid(), 'health_worker')
  );

-- RLS Policies for alert_subscriptions
CREATE POLICY "Anyone can subscribe to alerts"
  ON public.alert_subscriptions FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can view own subscriptions"
  ON public.alert_subscriptions FOR SELECT
  USING (true);

-- RLS Policies for outbreak_predictions
CREATE POLICY "Anyone can view predictions"
  ON public.outbreak_predictions FOR SELECT
  USING (true);

CREATE POLICY "Only admins can insert predictions"
  ON public.outbreak_predictions FOR INSERT
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
CREATE TRIGGER update_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_alerts_updated_at
  BEFORE UPDATE ON public.alerts
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_community_reports_updated_at
  BEFORE UPDATE ON public.community_reports
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for tables
ALTER PUBLICATION supabase_realtime ADD TABLE public.sensor_data;
ALTER PUBLICATION supabase_realtime ADD TABLE public.alerts;
ALTER PUBLICATION supabase_realtime ADD TABLE public.community_reports;
ALTER PUBLICATION supabase_realtime ADD TABLE public.outbreak_predictions;