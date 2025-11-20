import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-muted-foreground">
              Have questions? We'd love to hear from you. Get in touch with our team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <Card className="p-6">
                <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-4">
                  <Mail className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Email</h3>
                <p className="text-muted-foreground">info@swasthyanet.org</p>
                <p className="text-muted-foreground">support@swasthyanet.org</p>
              </Card>

              <Card className="p-6">
                <div className="bg-gradient-secondary p-3 rounded-lg w-fit mb-4">
                  <Phone className="h-6 w-6 text-secondary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Phone</h3>
                <p className="text-muted-foreground">+91 1800-XXX-XXXX (Toll Free)</p>
                <p className="text-muted-foreground">+91 11-XXXX-XXXX</p>
              </Card>

              <Card className="p-6">
                <div className="bg-gradient-primary p-3 rounded-lg w-fit mb-4">
                  <MapPin className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">Address</h3>
                <p className="text-muted-foreground">
                  SWASTHYANET Research Centre<br />
                  Sector 15, Innovation Hub<br />
                  New Delhi, India 110001
                </p>
              </Card>

              <Card className="p-6 bg-muted">
                <h3 className="font-heading font-semibold text-lg mb-3">Office Hours</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
                  <p><strong>Saturday:</strong> 10:00 AM - 2:00 PM</p>
                  <p><strong>Sunday:</strong> Closed</p>
                  <p className="text-xs mt-3">Emergency hotline available 24/7</p>
                </div>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-8 lg:col-span-2">
              <h2 className="font-heading font-semibold text-2xl mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number (Optional)</Label>
                  <Input id="phone" type="tel" placeholder="+91 XXXXX-XXXXX" />
                </div>

                <div>
                  <Label htmlFor="subject">Subject</Label>
                  <select 
                    id="subject"
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Partnership Opportunity</option>
                    <option>Research Collaboration</option>
                    <option>Media & Press</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us how we can help you..."
                    rows={6}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-primary text-primary-foreground">
                  <Send className="h-5 w-5 mr-2" />
                  Send Message
                </Button>
              </form>

              <p className="text-sm text-muted-foreground text-center mt-6">
                We typically respond within 24-48 hours. For urgent matters, please call our hotline.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
