import { Brain, MessageSquare, Image, Database, Shield, Zap } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "Machine Learning Fundamentals",
    description: "Understand how machines learn from data to make predictions and decisions.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Master AI tools like ChatGPT, Claude, and learn prompt engineering techniques.",
  },
  {
    icon: Image,
    title: "Computer Vision & Image AI",
    description: "Explore image recognition, generation with DALL-E, Midjourney, and more.",
  },
  {
    icon: Database,
    title: "Data Analysis & Insights",
    description: "Turn raw data into actionable insights using AI-powered analytics tools.",
  },
  {
    icon: Shield,
    title: "AI Ethics & Safety",
    description: "Navigate responsible AI use, bias prevention, and privacy considerations.",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and boost productivity with AI assistants.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            What You'll <span className="text-gradient">Learn</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Our comprehensive curriculum covers all essential AI domains, tailored to your skill level and goals.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 rounded-xl bg-card/50 border border-border hover:border-primary/30 hover:bg-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground font-body text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
