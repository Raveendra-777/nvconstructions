import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-gradient-gold mb-4">
              Nikhil Varma Constructions
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Building Trust, Raising Standards in Construction Since 2020.
            </p>
            <p className="text-xs text-muted-foreground">GSTIN: 29AARFN8171E1ZQ</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-primary font-heading font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/about", label: "About Us" },
                { to: "/profile", label: "Profile" },
                { to: "/vision", label: "Vision & Mission" },
                { to: "/gallery", label: "Gallery" },
                { to: "/contact", label: "Contact Us" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-primary font-heading font-semibold mb-4">Contact Info</h4>
            <div className="flex flex-col gap-3">
              <a href="tel:+919844052227" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Phone className="w-4 h-4 text-primary" />
                +91 9844052227
              </a>
              <a href="mailto:nikhilvarmaconstructions09@gmail.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" />
                nikhilvarmaconstructions09@gmail.com
              </a>
              <div className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                Bangalore, Karnataka, India
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
