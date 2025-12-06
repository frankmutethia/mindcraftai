import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Consultation Pricing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for individuals, groups, and corporate teams. All prices in Kenya Shillings (KSh).
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Individual Training */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-2">Individual Training</h3>
            <p className="text-muted-foreground text-sm mb-6">One-on-one personalized AI coaching</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-foreground">Kids/Teens (per hour)</span>
                <span className="font-semibold text-foreground">KSh 800 – 1,200</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-foreground">Adults (per hour)</span>
                <span className="font-semibold text-foreground">KSh 1,500 – 2,500</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-foreground">2-hour sessions</span>
                <span className="font-semibold text-foreground">KSh 3,000 – 4,500</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-foreground">Full-day workshop</span>
                <span className="font-semibold text-foreground">KSh 8,000 – 12,000</span>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              Book Individual Session
            </Button>
          </div>

          {/* Group Classes - Featured */}
          <div className="bg-card border-2 border-primary rounded-2xl p-8 relative shadow-xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
              <Star className="w-4 h-4" /> Popular
            </div>
            
            <h3 className="text-xl font-bold text-foreground mb-2">Group Classes</h3>
            <p className="text-muted-foreground text-sm mb-6">3–10 people per group session</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-foreground">Kids (per person)</span>
                <span className="font-semibold text-foreground">KSh 500 – 800</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-foreground">Teens/University</span>
                <span className="font-semibold text-foreground">KSh 800 – 1,200</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-foreground">Adults (per person)</span>
                <span className="font-semibold text-foreground">KSh 1,500 – 2,000</span>
              </div>
            </div>

            <ul className="space-y-2 mb-8">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary" /> Collaborative learning
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary" /> Cost-effective per person
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-primary" /> Peer interaction
              </li>
            </ul>

            <Button className="w-full">
              Book Group Session
            </Button>
          </div>

          {/* Corporate Training */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <h3 className="text-xl font-bold text-foreground mb-2">Corporate Training</h3>
            <p className="text-muted-foreground text-sm mb-6">Enterprise-level AI education</p>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-foreground">2-hour Intro</span>
                <span className="font-semibold text-foreground">KSh 15,000 – 25,000</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-foreground">Half-Day Workshop</span>
                <span className="font-semibold text-foreground">KSh 40,000 – 60,000</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-foreground">Full-Day Training</span>
                <span className="font-semibold text-foreground">KSh 80,000 – 120,000</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-foreground">Monthly Retainer</span>
                <span className="font-semibold text-foreground">KSh 50,000 – 150,000</span>
              </div>
            </div>

            <Button variant="outline" className="w-full">
              Request Corporate Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
