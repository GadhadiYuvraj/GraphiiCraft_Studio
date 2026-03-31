import React from "react";
import { Link } from "react-router-dom";
import {
  Linkedin,
  Instagram,
  Twitter,
  Dribbble,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import FloatingShape3D from "@/components/FloatingShape3D.jsx";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Dribbble, href: "#", label: "Dribbble" },
  ];

  return (
    <footer className="relative bg-card border-t border-border/50 overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <FloatingShape3D
          shape="circle"
          color="primary"
          size="lg"
          delay={0}
          className="top-10 left-10 opacity-30"
        />
        <FloatingShape3D
          shape="square"
          color="secondary"
          size="md"
          delay={2}
          className="top-20 right-20 opacity-20"
        />
        <FloatingShape3D
          shape="triangle"
          color="accent"
          size="sm"
          delay={4}
          className="bottom-10 left-1/3 opacity-25"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://horizons-cdn.hostinger.com/5a58e861-3f6a-4c09-a33f-fbaca64e4fdd/8041236420e8454a2e7b700abc785606.png"
                alt="Graphic Craft Studios logo"
                className="h-10 w-10"
              />
              <span className="text-xl font-bold text-card-foreground">
                Graphic Craft
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Strategic design and creative storytelling that brings your vision
              to life.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 active:scale-95"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-4">
              Quick links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-card-foreground mb-4">
              Get in touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <span>hello@graphiccraft.studio</span>
              </li>
              <li className="flex items-start space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                <span>
                  123 Creative Avenue
                  <br />
                  San Francisco, CA 94102
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-muted-foreground text-sm">
            © 2026 Graphic Craft Studios. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link
              to="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              to="#"
              className="text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
