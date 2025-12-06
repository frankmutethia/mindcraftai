import { useState } from "react";
import { Bot, Code, Palette, Briefcase, GraduationCap } from "lucide-react";

const categories = [
  { id: "general", label: "General AI", icon: Bot },
  { id: "coding", label: "Coding & Dev", icon: Code },
  { id: "creative", label: "Creative AIs", icon: Palette },
  { id: "productivity", label: "Productivity", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
];

const tools = {
  general: [
    { name: "ChatGPT", desc: "Writing, business tasks, coding help", audience: "Teens, Young Adults, Corporate" },
    { name: "Claude", desc: "Policy writing, analysis, long documents", audience: "University, Corporate" },
    { name: "Google Gemini", desc: "Workspace automation, multimodal learning", audience: "Students, Corporate" },
    { name: "Perplexity", desc: "Research with citations", audience: "Teens, University, Corporate" },
    { name: "Meta Llama 3", desc: "Private AI workflows", audience: "Developers, Corporate" },
    { name: "Microsoft Copilot", desc: "Office automation", audience: "Corporate" },
    { name: "Pi.ai", desc: "Friendly guided conversations", audience: "Kids, Teens" },
    { name: "Bolt AI", desc: "Fast on-device AI, productivity and privacy", audience: "Developers, Professionals" },
    { name: "Lovable AI", desc: "AI-powered web builder", audience: "Entrepreneurs, Students" },
  ],
  coding: [
    { name: "GitHub Copilot", desc: "Coding autocomplete", audience: "Students, Developers" },
    { name: "Windsurf (Codeium IDE)", desc: "Full project generation", audience: "Developers, Learners" },
    { name: "Cursor AI", desc: "AI for building full apps", audience: "Developers" },
    { name: "Replit AI", desc: "Beginner-friendly coding", audience: "Teens, Students" },
    { name: "Devin AI", desc: "AI software engineer", audience: "Startups, Tech learners" },
  ],
  creative: [
    { name: "Midjourney", desc: "Art, logos, posters", audience: "Teens, Young Adults" },
    { name: "Stable Diffusion", desc: "Custom models", audience: "Artists" },
    { name: "Adobe Firefly", desc: "Commercial-safe images", audience: "Corporate, Creatives" },
    { name: "Canva AI", desc: "Simple design", audience: "Kids, Adults" },
    { name: "Runway Gen-2", desc: "AI video generation", audience: "Creators" },
    { name: "Pika Labs", desc: "Short, creative videos", audience: "Teens, Creators" },
    { name: "Suno AI", desc: "Music generation", audience: "Kids, Teens, Creators" },
    { name: "Udio", desc: "Professional music", audience: "Adults, Musicians" },
    { name: "ElevenLabs", desc: "AI voices", audience: "Corporate, Content creators" },
  ],
  productivity: [
    { name: "Notion AI", desc: "Notes & organization", audience: "Everyone" },
    { name: "Zapier AI", desc: "Workflow automation", audience: "Business" },
    { name: "Make.com AI", desc: "Business process automation", audience: "Business" },
    { name: "Jasper", desc: "Marketing writing", audience: "Corporate" },
    { name: "Tome AI", desc: "AI presentations", audience: "Everyone" },
    { name: "GrammarlyGO", desc: "Writing enhancement", audience: "Everyone" },
  ],
  education: [
    { name: "Khanmigo", desc: "Tutoring", audience: "Kids, Teens" },
    { name: "Quizlet Q-Chat", desc: "Study assistance", audience: "Teens" },
    { name: "Elicit", desc: "Research assistant", audience: "University students" },
  ],
};

const AIToolsSection = () => {
  const [activeCategory, setActiveCategory] = useState("general");

  return (
    <section id="ai-tools" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            AI Tools I Teach
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Master the most powerful AI tools across different categories, tailored to your skill level and goals.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground shadow-lg"
                    : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Tools Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tools[activeCategory as keyof typeof tools].map((tool, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-5 hover:border-primary/50 hover:shadow-lg transition-all group"
            >
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {tool.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-3">{tool.desc}</p>
              <div className="flex flex-wrap gap-1">
                {tool.audience.split(", ").map((aud, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                  >
                    {aud}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;
