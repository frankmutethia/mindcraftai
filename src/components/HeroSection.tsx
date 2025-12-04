import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-earth-sunrise.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Subtle top overlay for navbar readability */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-background/50 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main headline - pure white for contrast */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight mb-6 animate-fade-up drop-shadow-lg" style={{ animationDelay: '0.1s' }}>
            Shaping the Future with
            <br />
            AI-Driven Intelligence
          </h1>

          {/* Subheadline - slightly muted white */}
          <p className="text-base md:text-lg text-white/80 font-body max-w-2xl mx-auto mb-10 animate-fade-up drop-shadow-md" style={{ animationDelay: '0.2s' }}>
            We help businesses harness artificial intelligence to unlock growth, efficiency, and innovation.
          </p>

          {/* CTA Button */}
          <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="lg">
              Work With Us
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-fade-up" style={{ animationDelay: '0.5s' }}>
        <a 
          href="#services" 
          className="flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
            <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
