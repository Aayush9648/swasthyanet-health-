import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Users, MessageSquare, Award, Camera, MapPin } from "lucide-react";

const Community = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Community Portal
          </h1>
          <p className="text-xl text-muted-foreground">
            Report water quality concerns and join the fight against water-borne diseases
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <Card className="p-6 text-center hover:shadow-medium transition-shadow">
            <div className="bg-gradient-primary p-4 rounded-lg w-fit mx-auto mb-4">
              <Users className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-2">10,000+</h3>
            <p className="text-muted-foreground">Active Community Members</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-medium transition-shadow">
            <div className="bg-gradient-primary p-4 rounded-lg w-fit mx-auto mb-4">
              <MessageSquare className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-2">2,500+</h3>
            <p className="text-muted-foreground">Community Reports Submitted</p>
          </Card>

          <Card className="p-6 text-center hover:shadow-medium transition-shadow">
            <div className="bg-gradient-primary p-4 rounded-lg w-fit mx-auto mb-4">
              <Award className="h-8 w-8 text-primary-foreground" />
            </div>
            <h3 className="font-heading font-semibold text-xl mb-2">500+</h3>
            <p className="text-muted-foreground">Health Guardians Recognized</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Report Form */}
          <Card className="p-8">
            <h2 className="font-heading font-semibold text-2xl mb-6">Submit a Report</h2>
            <form className="space-y-6">
              <div>
                <Label htmlFor="name">Your Name</Label>
                <Input id="name" placeholder="Enter your full name" />
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input id="location" placeholder="Zone, Sector, or Address" className="pl-10" />
                </div>
              </div>

              <div>
                <Label htmlFor="issue">Report Type</Label>
                <select 
                  id="issue"
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option>Select issue type</option>
                  <option>Water Quality Concern</option>
                  <option>Health Symptoms</option>
                  <option>Infrastructure Problem</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe the issue in detail..."
                  rows={5}
                />
              </div>

              <div>
                <Label htmlFor="photo">Upload Photo (Optional)</Label>
                <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                  <Camera className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Click to upload or drag and drop</p>
                  <p className="text-xs text-muted-foreground mt-1">PNG, JPG up to 10MB</p>
                </div>
              </div>

              <Button type="submit" className="w-full bg-gradient-primary text-primary-foreground">
                Submit Report
              </Button>
            </form>
          </Card>

          {/* Recent Reports & Guidelines */}
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-primary">
              <h3 className="font-heading font-semibold text-xl text-primary-foreground mb-4">
                Become a Health Guardian
              </h3>
              <p className="text-primary-foreground/90 mb-4">
                Regular community reporters earn badges and recognition for their contributions to public health.
              </p>
              <ul className="space-y-2 text-primary-foreground/90">
                <li className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>Bronze: 5 verified reports</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>Silver: 15 verified reports</span>
                </li>
                <li className="flex items-center gap-2">
                  <Award className="h-4 w-4" />
                  <span>Gold: 50+ verified reports</span>
                </li>
              </ul>
            </Card>

            <Card className="p-6">
              <h3 className="font-heading font-semibold text-xl mb-4">
                Recent Community Updates
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-primary pl-4">
                  <p className="text-sm font-medium">Zone 4 Water Quality Improved</p>
                  <p className="text-sm text-muted-foreground">Thanks to community reports, contamination source identified and resolved.</p>
                  <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="text-sm font-medium">New IoT Sensors Deployed</p>
                  <p className="text-sm text-muted-foreground">Zone 2 now has enhanced monitoring coverage based on citizen feedback.</p>
                  <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                </div>
                <div className="border-l-4 border-accent pl-4">
                  <p className="text-sm font-medium">Health Awareness Workshop</p>
                  <p className="text-sm text-muted-foreground">Join our community workshop on water hygiene this Saturday.</p>
                  <p className="text-xs text-muted-foreground mt-1">3 days ago</p>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h3 className="font-heading font-semibold text-xl mb-4">
                Reporting Guidelines
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Be specific about location and timing</li>
                <li>• Include photos when possible</li>
                <li>• Report only verified information</li>
                <li>• Health officials will review within 24 hours</li>
                <li>• Your identity remains confidential</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;
