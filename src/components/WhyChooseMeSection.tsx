import { Code2, Lightbulb, Users, UserCheck, Cog, Palette } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Software Engineer Expertise",
    description: "Hands-on AI expertise from a practicing software engineer who builds with these tools daily.",
  },
  {
    icon: Lightbulb,
    title: "Practical, Real-Life Skills",
    description: "Learn practical AI applications you can use immediately in work, school, or creative projects.",
  },
  {
    icon: Users,
    title: "All Ages Welcome",
    description: "Specialized training for Kids, Teens, Adults, and Corporate teams with tailored curricula.",
  },
  {
    icon: UserCheck,
    title: "Personalized Learning",
    description: "One-on-one attention and customized learning paths based on your goals and skill level.",
  },
  {
    icon: Cog,
    title: "Business AI Automation",
    description: "Help businesses implement AI automation to increase productivity and reduce costs.",
  },
  {
    icon: Palette,
    title: "Creative & Professional Tools",
    description: "Support for both creative AI tools (art, music, video) and professional productivity tools.",
  },
];

const WhyChooseMeSection = () => {
  return (
    <section id="why-choose" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Makes My AI Consultation Unique
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience-backed training that transforms how you work with artificial intelligence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="flex gap-4 p-6 bg-background rounded-xl border border-border hover:border-primary/50 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseMeSection;
