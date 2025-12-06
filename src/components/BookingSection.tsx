import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Send } from "lucide-react";

const trainingTypes = [
  "Individual Training",
  "Group Class",
  "Corporate Workshop",
  "Full-Day Training",
  "Monthly Retainer",
];

const ageGroups = [
  "Kids (7-13)",
  "Teens (14-19)",
  "Young Adults (20-30)",
  "Adults (30+)",
  "Corporate Team",
];

const aiToolOptions = [
  "ChatGPT",
  "Claude",
  "Google Gemini",
  "Midjourney",
  "Stable Diffusion",
  "GitHub Copilot",
  "Cursor AI",
  "Canva AI",
  "Suno AI",
  "Other/Multiple",
];

const BookingSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
    trainingType: "",
    ageGroup: "",
    aiTools: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Sent!",
      description: "I'll get back to you within 24 hours to confirm your session.",
    });
    setFormData({
      name: "",
      email: "",
      whatsapp: "",
      trainingType: "",
      ageGroup: "",
      aiTools: "",
      message: "",
    });
  };

  return (
    <section id="booking" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Book a Consultation
            </h2>
            <p className="text-muted-foreground">
              Ready to start your AI journey? Fill out the form below and I'll get back to you shortly.
            </p>
          </div>

          <div className="bg-card border border-border rounded-2xl p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  WhatsApp Number *
                </label>
                <Input
                  required
                  placeholder="+254 7XX XXX XXX"
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Preferred Training Type *
                  </label>
                  <Select
                    value={formData.trainingType}
                    onValueChange={(value) => setFormData({ ...formData, trainingType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select training type" />
                    </SelectTrigger>
                    <SelectContent>
                      {trainingTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Age Group *
                  </label>
                  <Select
                    value={formData.ageGroup}
                    onValueChange={(value) => setFormData({ ...formData, ageGroup: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select age group" />
                    </SelectTrigger>
                    <SelectContent>
                      {ageGroups.map((group) => (
                        <SelectItem key={group} value={group}>
                          {group}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Preferred AI Tools
                </label>
                <Select
                  value={formData.aiTools}
                  onValueChange={(value) => setFormData({ ...formData, aiTools: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select AI tools you want to learn" />
                  </SelectTrigger>
                  <SelectContent>
                    {aiToolOptions.map((tool) => (
                      <SelectItem key={tool} value={tool}>
                        {tool}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Additional Message
                </label>
                <Textarea
                  placeholder="Tell me about your goals, experience level, or any specific questions..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button type="submit" size="lg" className="flex-1">
                  <Send className="w-4 h-4 mr-2" />
                  Start Your AI Journey
                </Button>
                <Button type="button" variant="outline" size="lg" className="flex-1">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule a Call
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
