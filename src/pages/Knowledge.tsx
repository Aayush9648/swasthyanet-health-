import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, Video, FileText, Search } from "lucide-react";

const Knowledge = () => {
  const articles = [
    {
      category: "Water Hygiene",
      title: "Safe Water Storage Practices for Households",
      description: "Learn proper techniques for storing drinking water to prevent contamination and bacterial growth.",
      readTime: "5 min read",
      icon: BookOpen,
    },
    {
      category: "Disease Prevention",
      title: "Understanding Water-Borne Diseases: Cholera, Typhoid, and Dysentery",
      description: "Comprehensive guide to recognizing symptoms and preventing common water-borne illnesses.",
      readTime: "8 min read",
      icon: FileText,
    },
    {
      category: "Technology",
      title: "How IoT Sensors Monitor Water Quality in Real-Time",
      description: "Behind the scenes look at the technology powering SWASTHYANET's monitoring system.",
      readTime: "6 min read",
      icon: Video,
    },
    {
      category: "AI & Health",
      title: "AI-Powered Disease Outbreak Prediction: The Science Behind It",
      description: "Explore how machine learning models detect patterns and predict health risks before they spread.",
      readTime: "10 min read",
      icon: FileText,
    },
    {
      category: "Community Health",
      title: "Building Resilient Communities Through Early Warning Systems",
      description: "Case studies of successful outbreak prevention in vulnerable communities.",
      readTime: "7 min read",
      icon: BookOpen,
    },
    {
      category: "Water Quality",
      title: "Understanding pH, Turbidity, and Water Quality Parameters",
      description: "What do the numbers mean? A simple guide to water quality metrics.",
      readTime: "4 min read",
      icon: FileText,
    },
  ];

  const videos = [
    {
      title: "SWASTHYANET Overview: Protecting Communities",
      duration: "3:24",
      thumbnail: "video",
    },
    {
      title: "How to Report Water Quality Issues",
      duration: "2:15",
      thumbnail: "video",
    },
    {
      title: "Water Safety Tips for Families",
      duration: "4:50",
      thumbnail: "video",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h1 className="font-heading font-bold text-4xl md:text-5xl mb-4">
            Knowledge Hub
          </h1>
          <p className="text-xl text-muted-foreground">
            Educational resources, awareness materials, and research on clean water and disease prevention
          </p>
        </div>

        {/* Search Bar */}
        <Card className="p-6 mb-12">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search articles, videos, and resources..." 
                className="pl-10"
              />
            </div>
            <Button className="bg-gradient-primary text-primary-foreground">
              Search
            </Button>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            <Button variant="outline" size="sm">All Topics</Button>
            <Button variant="outline" size="sm">Water Hygiene</Button>
            <Button variant="outline" size="sm">Disease Prevention</Button>
            <Button variant="outline" size="sm">Technology</Button>
            <Button variant="outline" size="sm">Community Health</Button>
          </div>
        </Card>

        {/* Featured Videos */}
        <div className="mb-12">
          <h2 className="font-heading font-semibold text-3xl mb-6">Educational Videos</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-medium transition-shadow cursor-pointer">
                <div className="aspect-video bg-gradient-primary flex items-center justify-center">
                  <Video className="h-12 w-12 text-primary-foreground" />
                </div>
                <div className="p-4">
                  <h3 className="font-heading font-semibold mb-2">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.duration}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mb-12">
          <h2 className="font-heading font-semibold text-3xl mb-6">Latest Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {articles.map((article, index) => (
              <Card key={index} className="p-6 hover:shadow-medium transition-all hover:border-primary cursor-pointer">
                <div className="flex gap-4">
                  <div className="bg-gradient-primary p-3 rounded-lg h-fit">
                    <article.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-primary mb-2">{article.category}</p>
                    <h3 className="font-heading font-semibold text-xl mb-2">{article.title}</h3>
                    <p className="text-muted-foreground mb-4">{article.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{article.readTime}</span>
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                        Read More →
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Quiz Section */}
        <Card className="p-8 bg-gradient-to-br from-primary to-accent text-primary-foreground">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-heading font-bold text-3xl mb-4">
              Test Your Water Safety Knowledge
            </h2>
            <p className="text-primary-foreground/90 mb-6">
              Take our interactive quiz to learn about water quality, disease prevention, and community health.
            </p>
            <Button size="lg" variant="outline" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
              Start Quiz
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Knowledge;
