import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import mindcraftLogo from "@/assets/ChatGPT Image Mar 1, 2026, 09_11_17 PM.png";

const navLinks = [
  { name: "AI Tools", href: "#ai-tools" },
  { name: "Programs", href: "#age-training" },
  { name: "Pricing", href: "#pricing" },
  { name: "Why Me", href: "#why-choose" },
  { name: "Book", href: "#booking" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-lg border-b border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <div className="h-10 w-14 overflow-hidden rounded-md bg-black/70 ring-1 ring-primary/25 shadow-md shadow-primary/15">
              <img
                src={mindcraftLogo}
                alt="MindCraft AI logo"
                className="h-full w-full scale-[1.35] object-contain"
              />
            </div>
            <span className="text-xl lg:text-2xl font-semibold text-foreground tracking-tight">
              MindCraft AI
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/70 hover:text-foreground transition-colors duration-300 text-sm"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Button & Theme Toggle */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Button className="bg-blue-600 hover:bg-blue-700 text-white border-0" size="default">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="p-2 text-foreground"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border/30 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/70 hover:text-foreground transition-colors duration-300 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button className="bg-blue-600 hover:bg-blue-700 text-white mt-2">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
