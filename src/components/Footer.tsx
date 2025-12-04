const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-xl font-heading font-bold text-foreground mb-4 inline-block">
              Nexus<span className="text-primary">AI</span>
            </a>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Empowering the next generation of AI-fluent individuals and organizations.
            </p>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-foreground font-heading font-semibold mb-4">Programs</h4>
            <ul className="space-y-2">
              <li><a href="#programs" className="text-muted-foreground hover:text-primary font-body text-sm transition-colors">AI for Teens</a></li>
              <li><a href="#programs" className="text-muted-foreground hover:text-primary font-body text-sm transition-colors">Corporate Essentials</a></li>
              <li><a href="#programs" className="text-muted-foreground hover:text-primary font-body text-sm transition-colors">Executive Leadership</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary font-body text-sm transition-colors">Custom Training</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-foreground font-heading font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#resources" className="text-muted-foreground hover:text-primary font-body text-sm transition-colors">Learning Guides</a></li>
              <li><a href="#resources" className="text-muted-foreground hover:text-primary font-body text-sm transition-colors">Video Library</a></li>
              <li><a href="#resources" className="text-muted-foreground hover:text-primary font-body text-sm transition-colors">Case Studies</a></li>
              <li><a href="#resources" className="text-muted-foreground hover:text-primary font-body text-sm transition-colors">Community Forum</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-foreground font-heading font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-primary font-body text-sm transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-muted-foreground hover:text-primary font-body text-sm transition-colors">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary font-body text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary font-body text-sm transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground font-body text-sm">
            © 2024 NexusAI. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary font-body text-sm transition-colors">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-primary font-body text-sm transition-colors">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-primary font-body text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
