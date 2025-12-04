import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Ambient glow effect */}
      <div className="absolute inset-0 glow-gradient pointer-events-none" />
      
      {/* Animated orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[120px] animate-pulse-slow pointer-events-none" />
      
      {/* Stars/particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-foreground/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animation: `pulse-slow ${3 + Math.random() * 2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-body">AI Education for Everyone</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            Master the Future with{" "}
            <span className="text-gradient glow-text">AI Intelligence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground font-body max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: '0.3s' }}>
            We empower individuals of all ages to harness the power of artificial intelligence—from curious teenagers to corporate leaders ready to transform their organizations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button variant="hero" size="xl">
              Start Learning
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="xl">
              Explore Programs
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50 animate-fade-up" style={{ animationDelay: '0.5s' }}>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground font-body">Students Trained</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground font-body">Companies Partnered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">98%</div>
              <div className="text-sm text-muted-foreground font-body">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom curve/horizon effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
