import { CheckCircle } from "lucide-react";

const highlights = [
  "Expert instructors with real-world AI experience",
  "Hands-on projects and practical applications",
  "Small class sizes for personalized attention",
  "Flexible scheduling—online and in-person options",
  "Certificates recognized by industry leaders",
  "Ongoing support and community access",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-accent/5 blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
              Why Choose <span className="text-gradient">NexusAI</span>?
            </h2>
            <p className="text-lg text-muted-foreground font-body mb-8 leading-relaxed">
              We're not just another online course. NexusAI is a transformative learning experience designed to make AI accessible, practical, and empowering for everyone—regardless of technical background.
            </p>
            <p className="text-muted-foreground font-body mb-8 leading-relaxed">
              Our mission is to democratize AI education and prepare individuals and organizations for the AI-driven future. We believe that understanding AI isn't optional anymore—it's essential.
            </p>

            {/* Highlights */}
            <ul className="space-y-4">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span className="text-foreground font-body">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-secondary to-card border border-border p-8">
              {/* Decorative elements */}
              <div className="absolute top-4 right-4 w-20 h-20 rounded-full bg-primary/20 blur-xl" />
              <div className="absolute bottom-4 left-4 w-32 h-32 rounded-full bg-accent/20 blur-xl" />
              
              <div className="relative space-y-6">
                {/* Stat cards */}
                <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground font-body">Student Satisfaction</span>
                    <span className="text-2xl font-heading font-bold text-primary">4.9/5</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[98%] bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>
                </div>

                <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground font-body">Course Completion</span>
                    <span className="text-2xl font-heading font-bold text-primary">94%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[94%] bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>
                </div>

                <div className="bg-background/50 backdrop-blur-sm rounded-xl p-6 border border-border/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm text-muted-foreground font-body">Career Advancement</span>
                    <span className="text-2xl font-heading font-bold text-primary">87%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div className="h-full w-[87%] bg-gradient-to-r from-primary to-accent rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
