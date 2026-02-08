import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation, scrollVariants, scrollTransition } from "@/hooks/useScrollAnimation";

interface TocItem {
  number: string;
  title: string;
  subtitle?: string;
  href: string;
}

interface TableOfContentsProps {
  items: TocItem[];
}

const TableOfContents = ({ items }: TableOfContentsProps) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="agenda" className="py-24 container-editorial">
      <motion.div
        ref={ref}
        className="mb-12"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={scrollVariants.fadeUp}
        transition={scrollTransition}
      >
        <p className="text-caption mb-2">Overview</p>
        <h2 className="heading-section text-gradient">Agenda</h2>
      </motion.div>

      <motion.div
        className="rule-thick mb-8"
        initial={{ scaleX: 0, originX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
      />

      <nav>
        {items.map((item, index) => (
          <motion.a
            key={item.number}
            href={item.href}
            className="group block py-6 border-b border-rule hover:bg-secondary/30 transition-all duration-300 -mx-4 px-4 rounded-lg"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            whileHover={{ x: 8 }}
          >
            <div className="flex items-baseline gap-6">
              <motion.span
                className="font-display text-3xl md:text-4xl text-ink-muted/30 group-hover:text-accent transition-colors w-16"
                whileHover={{ scale: 1.1 }}
              >
                {item.number}
              </motion.span>
              <div className="flex-1">
                <h3 className="font-display text-xl md:text-2xl group-hover:text-accent transition-colors">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-ink-muted mt-1">{item.subtitle}</p>
                )}
              </div>
              <motion.span
                className="text-ink-muted group-hover:text-accent transition-colors"
                initial={{ x: 0 }}
                whileHover={{ x: 4 }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.span>
            </div>
          </motion.a>
        ))}
      </nav>
    </section>
  );
};

export default TableOfContents;
