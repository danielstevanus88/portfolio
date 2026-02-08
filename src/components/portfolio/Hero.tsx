import { Mail, Phone, Github, Linkedin } from "lucide-react";

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone?: string;
  github?: string;
  linkedin?: string;
}

const Hero = ({
  name,
  title,
  tagline,
  email,
  phone,
  github,
  linkedin,
}: HeroProps) => {
  return (
    <section className="min-h-screen flex flex-col justify-center container-editorial py-20">
      <div className="animate-fade-in">
        {/* Top rule */}
        <div className="rule-double mb-12" />

        {/* Name and title */}
        <div className="mb-8">
          <h1 className="heading-hero mb-4">{name}</h1>
          <p className="font-display text-2xl md:text-3xl text-ink-light italic">
            {title}
          </p>
        </div>

        {/* Tagline */}
        <p className="text-editorial text-ink-light mb-12 max-w-2xl">
          {tagline}
        </p>

        {/* Contact info */}
        <div className="flex flex-wrap gap-6 text-sm">
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 text-ink-muted hover:text-burgundy transition-colors"
          >
            <Mail size={16} />
            <span>{email}</span>
          </a>

          {phone && (
            <a
              href={`tel:${phone}`}
              className="flex items-center gap-2 text-ink-muted hover:text-burgundy transition-colors"
            >
              <Phone size={16} />
              <span>{phone}</span>
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-ink-muted hover:text-burgundy transition-colors"
            >
              <Github size={16} />
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
              <Linkedin size={16} />
              <span>LinkedIn</span>
            </a>
          )}
        </div>

        {/* Bottom rule */}
        <div className="rule mt-12" />

        {/* Scroll indicator */}
        <div className="mt-16 text-center">
          <p className="text-caption mb-2">Scroll to explore</p>
          <div className="w-px h-12 bg-rule mx-auto" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
