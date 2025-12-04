import { Button } from "@/components/ui/button";
import { GraduationCap, Briefcase, TrendingUp, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: GraduationCap,
    title: "AI for Teens",
    age: "Ages 13-19",
    description: "Discover the exciting world of AI through interactive projects, game development, and creative applications. Build your first chatbot, train image recognition models, and learn responsible AI use.",
    features: ["Interactive coding sessions", "Game & art generation", "Ethics & safety training", "Portfolio projects"],
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Briefcase,
    title: "Corporate Essentials",
    age: "Employees & Teams",
    description: "Practical AI skills for the modern workplace. Learn to leverage AI tools for productivity, data analysis, content creation, and workflow automation to stay ahead in your career.",
    features: ["Productivity AI tools", "Data analysis basics", "Content generation", "Workflow automation"],
    color: "from-primary to-accent",
  },
  {
    icon: TrendingUp,
    title: "Executive Leadership",
    age: "Management & C-Suite",
    description: "Strategic AI implementation for business leaders. Understand AI capabilities, drive digital transformation, make informed investment decisions, and lead your organization into the AI era.",
    features: ["Strategic planning", "ROI assessment", "Risk management", "Change leadership"],
    color: "from-violet-500 to-purple-500",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 bg-background relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-6">
            Programs for <span className="text-gradient">Every Learner</span>
          </h2>
          <p className="text-lg text-muted-foreground font-body">
            Whether you're a teenager exploring AI possibilities, a professional enhancing your skills, or an executive driving transformation—we have the perfect program for you.
          </p>
        </div>

        {/* Program cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="group relative bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${program.color} mb-6`}>
                <program.icon className="w-7 h-7 text-foreground" />
              </div>

              {/* Content */}
              <div className="text-sm text-primary font-body font-medium mb-2">{program.age}</div>
              <h3 className="text-2xl font-heading font-bold text-foreground mb-4">{program.title}</h3>
              <p className="text-muted-foreground font-body mb-6 leading-relaxed">{program.description}</p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {program.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-sm text-foreground/80 font-body">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
