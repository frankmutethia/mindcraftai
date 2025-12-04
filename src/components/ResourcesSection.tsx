import { FileText, Video, BookOpen, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    icon: FileText,
    title: "AI Guides & Tutorials",
    description: "Step-by-step guides to help you master AI concepts and tools at your own pace.",
    count: "50+ guides",
  },
  {
    icon: Video,
    title: "Video Library",
    description: "On-demand video lessons covering everything from basics to advanced techniques.",
    count: "200+ videos",
  },
  {
    icon: BookOpen,
    title: "Case Studies",
    description: "Real-world examples of AI implementation across various industries.",
    count: "30+ studies",
  },
  {
    icon: Users,
    title: "Community Forum",
    description: "Connect with fellow learners, share projects, and get expert answers.",
    count: "5K+ members",
  },
];

const ResourcesSection = () => {
  return (
    <section id="resources" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Learning <span className="text-gradient">Resources</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Access a wealth of materials to support your AI learning journey—available 24/7.
          </p>
        </div>

        {/* Resources grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {resources.map((resource) => (
            <div
              key={resource.title}
              className="group text-center p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <resource.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="text-xs text-primary font-body font-medium mb-2">{resource.count}</div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">{resource.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{resource.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="glow" size="lg">
            Access Free Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
