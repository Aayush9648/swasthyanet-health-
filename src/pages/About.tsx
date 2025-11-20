import { Card } from "@/components/ui/card";
import { Target, Eye, Heart, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              About SWASTHYANET
            </h1>
            <p className="text-xl text-muted-foreground">
              Revolutionizing public health through smart water monitoring and AI-powered disease prevention
            </p>
          </div>

          {/* Story Section */}
          <Card className="p-8 mb-8">
            <h2 className="font-heading font-semibold text-3xl mb-4">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              SWASTHYANET was born from a critical need: millions in vulnerable communities lack access to safe drinking water, leading to preventable disease outbreaks that devastate families and overwhelm healthcare systems.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              By combining cutting-edge IoT sensor technology, artificial intelligence, and community-driven reporting, we've created an early warning framework that doesn't just respond to health crises—it prevents them from happening in the first place.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our platform continuously monitors water quality parameters like pH, turbidity, temperature, and conductivity across deployment zones. When our AI models detect anomalies or predict outbreak risks, automatic alerts are sent to health authorities and communities, enabling rapid intervention before diseases spread.
            </p>
          </Card>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card className="p-6">
              <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-4">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-2xl mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To eliminate preventable water-borne disease outbreaks by providing accessible, real-time monitoring technology and empowering communities with knowledge and tools to protect their health.
              </p>
            </Card>

            <Card className="p-6">
              <div className="bg-gradient-secondary p-3 rounded-lg w-fit mb-4">
                <Eye className="h-6 w-6 text-secondary-foreground" />
              </div>
              <h3 className="font-heading font-semibold text-2xl mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where every community, regardless of economic status, has access to safe water and early warning systems that protect public health through the power of technology and collective action.
              </p>
            </Card>
          </div>

          {/* Architecture */}
          <Card className="p-8 mb-8">
            <h2 className="font-heading font-semibold text-3xl mb-6">System Architecture</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-lg h-fit">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold">
                    1
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-2">IoT Sensor Layer</h4>
                  <p className="text-muted-foreground">
                    Network of smart sensors deployed across water sources, continuously measuring pH, turbidity, temperature, conductivity, and other quality parameters in real-time.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-secondary/10 p-3 rounded-lg h-fit">
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-secondary-foreground font-bold">
                    2
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-2">AI Analytics Engine</h4>
                  <p className="text-muted-foreground">
                    Machine learning models analyze sensor data patterns, detect anomalies, and predict contamination or outbreak probabilities with 94% accuracy, learning continuously from new data.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-accent/10 p-3 rounded-lg h-fit">
                  <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-2">Community Reporting System</h4>
                  <p className="text-muted-foreground">
                    Citizen portal for reporting symptoms and water quality concerns, verified by health workers, providing crucial ground-level intelligence that complements sensor data.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-info/10 p-3 rounded-lg h-fit">
                  <div className="w-8 h-8 rounded-full bg-info flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg mb-2">Alert & Response Network</h4>
                  <p className="text-muted-foreground">
                    Automated notification system sends instant alerts via email/SMS to health authorities, enabling rapid investigation and intervention before outbreaks escalate.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* SDG Alignment */}
          <Card className="p-8 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-primary-foreground/20 p-4 rounded-lg">
                <Globe className="h-12 w-12 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-2xl mb-3">Sustainable Development Goals</h3>
                <p className="text-primary-foreground/90 leading-relaxed">
                  SWASTHYANET directly supports <strong>UN SDG 3 (Good Health and Well-being)</strong> and <strong>SDG 6 (Clean Water and Sanitation)</strong>, contributing to global efforts to ensure healthy lives and universal access to safe water by 2030.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default About;
