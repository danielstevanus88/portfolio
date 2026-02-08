import { motion } from "framer-motion";
import { useScrollAnimation, scrollVariants, scrollTransition } from "@/hooks/useScrollAnimation";

interface LeadershipCardProps {
  title: string;
  role: string;
  period?: string;
  description: string[];
  highlights?: string[];
}

const LeadershipCard = ({
  title,
  role,
  period,
  description,
  highlights,
}: LeadershipCardProps) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.article
      ref={ref}
      className="py-8 border-b border-rule last:border-b-0"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={scrollVariants.fadeUp}
      transition={scrollTransition}
    >
      <motion.div
        className="flex flex-wrap items-baseline justify-between gap-3 mb-4"
        variants={scrollVariants.fadeUp}
        transition={{ ...scrollTransition, delay: 0.1 }}
      >
        <div>
          <h3 className="font-display text-xl font-semibold">{title}</h3>
          <p className="text-accent">{role}</p>
        </div>
        {period && (
          <motion.span
            className="text-sm text-ink-muted px-3 py-1 rounded-full bg-secondary"
            whileHover={{ scale: 1.05 }}
          >
            {period}
          </motion.span>
        )}
      </motion.div>

      <motion.div
        className="space-y-3 mb-4"
        variants={scrollVariants.fadeUp}
        transition={{ ...scrollTransition, delay: 0.15 }}
      >
        {description.map((paragraph, index) => (
          <p key={index} className="text-ink-light">
            {paragraph}
          </p>
        ))}
      </motion.div>

      {highlights && highlights.length > 0 && (
        <motion.ul
          className="space-y-2"
          variants={scrollVariants.fadeUp}
          transition={{ ...scrollTransition, delay: 0.2 }}
        >
          {highlights.map((highlight, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3 text-sm text-ink-muted"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: 0.25 + index * 0.05, duration: 0.4 }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              <span>{highlight}</span>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </motion.article>
  );
};

export default LeadershipCard;
