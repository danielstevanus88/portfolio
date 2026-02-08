import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useScrollAnimation, scrollVariants, scrollTransition } from "@/hooks/useScrollAnimation";

interface SectionProps {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const Section = ({ id, number, title, subtitle, children }: SectionProps) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id={id} className="py-24 container-editorial scroll-mt-8">
      {/* Section header */}
      <motion.div
        ref={ref}
        className="flex items-start gap-6 mb-12"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={scrollVariants.fadeUp}
        transition={scrollTransition}
      >
        <motion.span
          className="section-number hidden md:block"
          variants={scrollVariants.slideInLeft}
          transition={{ ...scrollTransition, delay: 0.1 }}
        >
          {number}
        </motion.span>
        <div className="flex-1 pt-4 md:pt-8">
          <motion.p
            className="text-caption mb-2"
            variants={scrollVariants.fadeUp}
            transition={{ ...scrollTransition, delay: 0.15 }}
          >
            Section {number}
          </motion.p>
          <motion.h2
            className="heading-section text-gradient"
            variants={scrollVariants.fadeUp}
            transition={{ ...scrollTransition, delay: 0.2 }}
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              className="text-ink-muted mt-2 text-lg"
              variants={scrollVariants.fadeUp}
              transition={{ ...scrollTransition, delay: 0.25 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </motion.div>

      <motion.div
        className="rule-thick mb-12"
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
      />

      {/* Section content */}
      <div>{children}</div>
    </section>
  );
};

export default Section;
