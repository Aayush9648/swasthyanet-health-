import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Droplet, Thermometer, Activity, AlertTriangle } from "lucide-react";

const Dashboard = () => {
  // Demo data for water quality parameters
  const phData = [
    { time: "00:00", value: 7.2, safe: 7.0 },
    { time: "04:00", value: 7.4, safe: 7.0 },
    { time: "08:00", value: 7.1, safe: 7.0 },
    { time: "12:00", value: 7.3, safe: 7.0 },
    { time: "16:00", value: 7.5, safe: 7.0 },
    { time: "20:00", value: 7.2, safe: 7.0 },
  ];

  const turbidityData = [
    { time: "00:00", value: 2.1, threshold: 5 },
    { time: "04:00", value: 2.3, threshold: 5 },
    { time: "08:00", value: 3.2, threshold: 5 },
    { time: "12:00", value: 2.8, threshold: 5 },
    { time: "16:00", value: 2.5, threshold: 5 },
    { time: "20:00", value: 2.2, threshold: 5 },
  ];

  const temperatureData = [
    { time: "00:00", value: 22 },
    { time: "04:00", value: 21 },
    { time: "08:00", value: 24 },
    { time: "12:00", value: 27 },
    { time: "16:00", value: 28 },
    { time: "20:00", value: 25 },
  ];

  const outbreakRisk = [
    { zone: "Zone 1", risk: 15, status: "Low" },
    { zone: "Zone 2", risk: 35, status: "Medium" },
    { zone: "Zone 3", risk: 8, status: "Low" },
    { zone: "Zone 4", risk: 62, status: "High" },
    { zone: "Zone 5", risk: 25, status: "Medium" },
  ];

  const currentMetrics = [
    { 
      icon: Droplet, 
      label: "pH Level", 
      value: "7.2", 
      status: "Normal", 
      color: "success" 
    },
    { 
      icon: Activity, 
      label: "Turbidity", 
      value: "2.2 NTU", 
      status: "Safe", 
      color: "success" 
    },
    { 
      icon: Thermometer, 
      label: "Temperature", 
      value: "25°C", 
      status: "Normal", 
      color: "success" 
    },
    { 
      icon: AlertTriangle, 
      label: "Alert Level", 
      value: "Medium", 
      status: "Zone 4", 
      color: "warning" 
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Live Dashboard
          </h1>
          <p className="text-xl text-muted-foreground">
            Real-time water quality monitoring and AI-powered disease outbreak predictions
          </p>
        </div>

        {/* Current Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {currentMetrics.map((metric, index) => (
            <Card key={index} className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`bg-${metric.color} p-3 rounded-lg`}>
                  <metric.icon className="h-6 w-6 text-white" />
                </div>
                <Badge variant={metric.color === "success" ? "default" : "destructive"}>
                  {metric.status}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
              <p className="text-3xl font-heading font-bold">{metric.value}</p>
            </Card>
          ))}
        </div>

        {/* pH Level Chart */}
        <Card className="p-6 mb-8">
          <h3 className="font-heading font-semibold text-xl mb-6">pH Level Monitoring (Last 24 Hours)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={phData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
              <YAxis domain={[6, 8]} stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }} 
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="value" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                name="Current pH"
                dot={{ fill: "hsl(var(--primary))", r: 5 }}
              />
              <Line 
                type="monotone" 
                dataKey="safe" 
                stroke="hsl(var(--success))" 
                strokeDasharray="5 5"
                name="Safe Threshold"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Turbidity Chart */}
          <Card className="p-6">
            <h3 className="font-heading font-semibold text-xl mb-6">Turbidity Levels (NTU)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={turbidityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--accent))" 
                  fill="hsl(var(--accent) / 0.3)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>

          {/* Temperature Chart */}
          <Card className="p-6">
            <h3 className="font-heading font-semibold text-xl mb-6">Water Temperature (°C)</h3>
            <ResponsiveContainer width="100%" height={250}>
              <AreaChart data={temperatureData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                <YAxis domain={[15, 35]} stroke="hsl(var(--muted-foreground))" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: "hsl(var(--card))", 
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px"
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--secondary))" 
                  fill="hsl(var(--secondary) / 0.3)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* AI Outbreak Risk Prediction */}
        <Card className="p-6">
          <h3 className="font-heading font-semibold text-xl mb-6">AI-Powered Outbreak Risk Prediction by Zone</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={outbreakRisk}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis dataKey="zone" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(var(--card))", 
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px"
                }} 
              />
              <Legend />
              <Bar 
                dataKey="risk" 
                fill="hsl(var(--primary))"
                name="Risk Score (%)"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
          <div className="mt-6 flex gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-success" />
              <span className="text-sm text-muted-foreground">Low Risk (0-30%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-warning" />
              <span className="text-sm text-muted-foreground">Medium Risk (31-50%)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded-full bg-destructive" />
              <span className="text-sm text-muted-foreground">High Risk (51-100%)</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
