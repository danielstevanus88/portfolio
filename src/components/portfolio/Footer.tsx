import { Mail, Github, Linkedin } from "lucide-react";

interface FooterProps {
  name: string;
  email: string;
  github?: string;
  linkedin?: string;
}

const Footer = ({ name, email, github, linkedin }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-24 container-editorial">
      <div className="rule-double mb-12" />

      {/* Thank you note */}
      <div className="text-center mb-16">
        <p className="font-display text-2xl md:text-3xl italic text-ink-light mb-4">
          Thank you for reviewing my portfolio.
        </p>
        <p className="text-ink-muted">
          I would love to discuss how I can contribute to your team.
        </p>
      </div>

      {/* Contact */}
      <div className="flex flex-col items-center gap-6 mb-12">
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-ink-muted hover:text-burgundy transition-colors"
          >
            <Mail size={18} />
            <span>{email}</span>
          </a>

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-ink-muted hover:text-burgundy transition-colors"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          )}

          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-ink-muted hover:text-burgundy transition-colors"
            >
              <Linkedin size={18} />
              <span>LinkedIn</span>
            </a>
          )}
        </div>
      </div>

      {/* Copyright */}
      <div className="rule mb-8" />

      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-ink-muted">
        <p>© {currentYear} {name}. All rights reserved.</p>
        <p className="text-xs uppercase tracking-widest">
          Portfolio · {currentYear} Edition
        </p>
      </div>
    </footer>
  );
};

export default Footer;
