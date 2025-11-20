import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Droplet, Activity, AlertCircle, Users, TrendingUp, Award } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const stats = [
    { icon: Droplet, label: "IoT Sensors Deployed", value: "50+" },
    { icon: AlertCircle, label: "Early Outbreaks Detected", value: "3" },
    { icon: Users, label: "Citizens Served", value: "10,000+" },
    { icon: TrendingUp, label: "Prediction Accuracy", value: "94%" },
  ];

  const features = [
    {
      icon: Droplet,
      title: "Real-Time Monitoring",
      description: "Continuous IoT sensor tracking of pH, turbidity, temperature, and conductivity across water sources.",
    },
    {
      icon: Activity,
      title: "AI-Powered Analytics",
      description: "Machine learning models predict contamination risks and disease outbreak probabilities.",
    },
    {
      icon: AlertCircle,
      title: "Instant Alerts",
      description: "Automated notifications to health authorities and communities when threats are detected.",
    },
    {
      icon: Users,
      title: "Community Engagement",
      description: "Citizen reporting portal for symptoms and water quality concerns, verified by health workers.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Water quality monitoring sensors and AI analytics" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/50" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6 leading-tight">
              Predict. <span className="text-primary">Prevent.</span> Protect.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              SWASTHYANET combines IoT sensors, AI analytics, and community health data to predict and prevent water-borne disease outbreaks before they spread.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/dashboard">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground font-semibold">
                  View Dashboard
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-shadow">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-primary p-3 rounded-lg">
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-3xl font-heading font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              How SWASTHYANET Works
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A complete ecosystem for water quality monitoring and disease prevention
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-medium transition-all hover:border-primary">
                <div className="bg-gradient-primary p-4 rounded-lg w-fit mb-4">
                  <feature.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-2xl mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <Award className="h-16 w-16 text-primary-foreground mx-auto mb-6" />
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mb-6">
            Making a Real Impact
          </h2>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8">
            SWASTHYANET aligns with UN Sustainable Development Goals 3 (Good Health) and 6 (Clean Water & Sanitation), working towards a healthier future for vulnerable communities.
          </p>
          <Link to="/get-involved">
            <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0">
              Get Involved
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 text-center bg-gradient-to-br from-card to-muted">
            <h2 className="font-heading font-bold text-4xl mb-6">
              Join the Fight Against Water-Borne Diseases
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're a researcher, health worker, or concerned citizen, there's a place for you in our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/community">
                <Button size="lg" className="bg-gradient-primary text-primary-foreground">
                  Join Community
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline">
                  Contact Us
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
