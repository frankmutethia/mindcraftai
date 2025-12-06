import { Sparkles, Rocket, Briefcase, Building2 } from "lucide-react";

const ageGroups = [
  {
    icon: Sparkles,
    title: "Kids",
    ages: "Ages 7–13",
    color: "from-pink-500 to-orange-400",
    description: "Fun, visual, and creativity-focused learning with safety and responsible AI use.",
    tools: [
      { name: "Suno", use: "Create music" },
      { name: "ChatGPT", use: "Storytelling and homework help" },
      { name: "Canva", use: "Simple designs" },
      { name: "Khanmigo", use: "Tutoring" },
    ],
  },
  {
    icon: Rocket,
    title: "Teens",
    ages: "Ages 14–19",
    color: "from-blue-500 to-cyan-400",
    description: "Focus on learning, creativity, and discovering new job opportunities.",
    tools: [
      { name: "Perplexity", use: "School research" },
      { name: "Midjourney", use: "Start side hustles" },
      { name: "ChatGPT", use: "CV and essay writing" },
      { name: "Suno/Udio", use: "TikTok music" },
      { name: "Runway/Pika", use: "School video projects" },
    ],
  },
  {
    icon: Briefcase,
    title: "Young Adults",
    ages: "Ages 20–30",
    color: "from-violet-500 to-purple-400",
    description: "Career development and income generation through AI mastery.",
    tools: [
      { name: "ChatGPT/Claude", use: "Job applications, business plans" },
      { name: "Midjourney", use: "Freelancing (logos, posters)" },
      { name: "Windsurf/Cursor", use: "Coding career" },
      { name: "Zapier/Make", use: "Automation side hustles" },
      { name: "Runway/Pika", use: "Content creation" },
    ],
  },
  {
    icon: Building2,
    title: "Corporate",
    ages: "Teams & Executives",
    color: "from-emerald-500 to-teal-400",
    description: "ROI-focused productivity and responsible AI adoption for businesses.",
    tools: [
      { name: "ChatGPT", use: "Emails, SOPs, reports" },
      { name: "Claude", use: "Policies, legal-style writing" },
      { name: "Gemini/Copilot", use: "Workflow automation" },
      { name: "Jasper", use: "Marketing" },
      { name: "Synthesia/HeyGen", use: "Training videos" },
    ],
  },
];

const AgeGroupTrainingSection = () => {
  return (
    <section id="age-training" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI Training Programs by Age Group
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tailored AI education for every stage of life, from curious kids to corporate leaders.
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {ageGroups.map((group, index) => {
            const Icon = group.icon;
            return (
              <div
                key={index}
                className="bg-background border border-border rounded-2xl p-6 hover:shadow-xl transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-1">{group.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">{group.ages}</p>
                <p className="text-muted-foreground text-sm mb-5">{group.description}</p>
                
                <div className="space-y-2">
                  {group.tools.map((tool, i) => (
                    <div key={i} className="flex items-start gap-2 text-sm">
                      <span className="font-medium text-foreground">{tool.name}</span>
                      <span className="text-muted-foreground">→ {tool.use}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AgeGroupTrainingSection;
