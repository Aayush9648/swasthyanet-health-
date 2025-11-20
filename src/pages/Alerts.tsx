import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AlertTriangle, AlertCircle, Info, CheckCircle, Calendar, MapPin } from "lucide-react";

const Alerts = () => {
  const alerts = [
    {
      id: 1,
      severity: "high",
      title: "High Turbidity Detected in Zone 4",
      description: "Water turbidity exceeded safe threshold (5 NTU) reaching 7.2 NTU. Immediate investigation required.",
      location: "Zone 4, Sector B",
      time: "2 hours ago",
      status: "active",
    },
    {
      id: 2,
      severity: "medium",
      title: "Temperature Spike in Zone 2",
      description: "Water temperature increased to 31°C, above normal range. Potential bacterial growth risk.",
      location: "Zone 2, Sector A",
      time: "5 hours ago",
      status: "investigating",
    },
    {
      id: 3,
      severity: "low",
      title: "Minor pH Fluctuation in Zone 1",
      description: "pH level dropped to 6.8, slightly below optimal range. Monitoring closely.",
      location: "Zone 1, Sector C",
      time: "8 hours ago",
      status: "monitoring",
    },
    {
      id: 4,
      severity: "high",
      title: "Community Report: Waterborne Illness Symptoms",
      description: "Multiple citizens reported gastrointestinal symptoms in Zone 5. Potential outbreak detected by AI model.",
      location: "Zone 5, Sector D",
      time: "12 hours ago",
      status: "active",
    },
    {
      id: 5,
      severity: "resolved",
      title: "Contamination Risk Cleared in Zone 3",
      description: "Previous contamination risk has been resolved. All parameters back to normal levels.",
      location: "Zone 3, Sector B",
      time: "1 day ago",
      status: "resolved",
    },
  ];

  const getSeverityIcon = (severity: string) => {
    switch (severity) {
      case "high":
        return <AlertTriangle className="h-5 w-5" />;
      case "medium":
        return <AlertCircle className="h-5 w-5" />;
      case "low":
        return <Info className="h-5 w-5" />;
      case "resolved":
        return <CheckCircle className="h-5 w-5" />;
      default:
        return <Info className="h-5 w-5" />;
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high":
        return "destructive";
      case "medium":
        return "default";
      case "low":
        return "secondary";
      case "resolved":
        return "outline";
      default:
        return "default";
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Alerts & Reports
          </h1>
          <p className="text-xl text-muted-foreground">
            Real-time alerts and community reports for water quality and health concerns
          </p>
        </div>

        {/* Alert Subscription */}
        <Card className="p-6 mb-8 bg-gradient-primary">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-primary-foreground">
              <h3 className="font-heading font-semibold text-xl mb-2">
                Subscribe to Alert Notifications
              </h3>
              <p className="text-primary-foreground/90">
                Get instant email/SMS alerts when water quality issues are detected in your area
              </p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Input 
                placeholder="Enter email or phone" 
                className="bg-primary-foreground text-foreground min-w-[250px]"
              />
              <Button variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                Subscribe
              </Button>
            </div>
          </div>
        </Card>

        {/* Filter Options */}
        <div className="flex flex-wrap gap-4 mb-8">
          <Button variant="default">All Alerts</Button>
          <Button variant="outline">High Priority</Button>
          <Button variant="outline">Active</Button>
          <Button variant="outline">Resolved</Button>
          <Button variant="outline">Last 24 Hours</Button>
        </div>

        {/* Alerts List */}
        <div className="space-y-4">
          {alerts.map((alert) => (
            <Card key={alert.id} className="p-6 hover:shadow-medium transition-shadow">
              <div className="flex flex-col md:flex-row gap-6">
                {/* Icon & Severity */}
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${
                    alert.severity === "high" 
                      ? "bg-destructive/10 text-destructive" 
                      : alert.severity === "medium"
                      ? "bg-warning/10 text-warning"
                      : alert.severity === "resolved"
                      ? "bg-success/10 text-success"
                      : "bg-info/10 text-info"
                  }`}>
                    {getSeverityIcon(alert.severity)}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-heading font-semibold text-xl mb-2">
                        {alert.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {alert.description}
                      </p>
                    </div>
                    <Badge variant={getSeverityColor(alert.severity)}>
                      {alert.severity.toUpperCase()}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary" />
                      <span>{alert.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span>{alert.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Status:</span>
                      <span className="capitalize">{alert.status}</span>
                    </div>
                  </div>

                  {alert.status === "active" && (
                    <div className="mt-4 flex gap-2">
                      <Button size="sm" variant="default">
                        View Details
                      </Button>
                      <Button size="sm" variant="outline">
                        Mark as Resolved
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Alerts;
