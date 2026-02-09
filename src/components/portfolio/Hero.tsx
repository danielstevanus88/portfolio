import { Mail, Phone, Github, Linkedin, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  name: string;
  title: string;
  tagline: string;
  email?: string;
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
    <section className="min-h-screen flex flex-col justify-center container-editorial py-20 relative overflow-hidden">
      {/* Animated background gradient orb */}
      <motion.div
        className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[100px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(185 75% 50%) 0%, transparent 70%)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Top rule */}
        <motion.div
          className="rule-double mb-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
        />

        {/* Name and title */}
        <div className="mb-8">
          <motion.h1
            className="heading-hero mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {name}
          </motion.h1>
          <motion.p
            className="font-display text-2xl md:text-3xl text-ink-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {title}
          </motion.p>
        </div>

        {/* Tagline */}
        <motion.p
          className="text-editorial text-ink-muted mb-12 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {tagline}
        </motion.p>

        {/* Contact info */}
        <motion.div
          className="flex flex-wrap gap-6 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {email && (
            <a
              href={`mailto:${email}`}
              className="group flex items-center gap-2 text-ink-muted hover:text-accent transition-all duration-300"
            >
              <span className="p-2 rounded-lg bg-secondary group-hover:bg-accent/10 group-hover:glow-sm transition-all duration-300">
                <Mail size={16} />
              </span>
              <span>{email}</span>
            </a>
          )}

          {phone && (
            <a
              href={`tel:${phone}`}
              className="group flex items-center gap-2 text-ink-muted hover:text-accent transition-all duration-300"
            >
              <span className="p-2 rounded-lg bg-secondary group-hover:bg-accent/10 group-hover:glow-sm transition-all duration-300">
                <Phone size={16} />
              </span>
              <span>{phone}</span>
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-ink-muted hover:text-accent transition-all duration-300"
            >
              <span className="p-2 rounded-lg bg-secondary group-hover:bg-accent/10 group-hover:glow-sm transition-all duration-300">
                <Github size={16} />
              </span>
              <span>GitHub</span>
            </a>
          )}

          {linkedin && (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-ink-muted hover:text-accent transition-all duration-300"
            >
              <span className="p-2 rounded-lg bg-secondary group-hover:bg-accent/10 group-hover:glow-sm transition-all duration-300">
                <Linkedin size={16} />
              </span>
              <span>LinkedIn</span>
            </a>
          )}
        </motion.div>

        {/* Bottom rule */}
        <motion.div
          className="rule mt-12"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        />

        {/* Scroll indicator */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          <p className="text-caption mb-3">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 mx-auto text-accent" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
