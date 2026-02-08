import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, scrollVariants, scrollTransition } from "@/hooks/useScrollAnimation";

interface TechnicalBlockProps {
  title: string;
  description: string[];
  technicalDetails?: string;
  formula?: string;
  images?: { src: string; alt: string; caption?: string }[];
  awards?: string[];
}

const TechnicalBlock = ({
  title,
  description,
  technicalDetails,
  formula,
  images,
  awards,
}: TechnicalBlockProps) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.article
      ref={ref}
      className="py-10 border-b border-rule last:border-b-0"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={scrollVariants.fadeUp}
      transition={scrollTransition}
    >
      {/* Header */}
      <motion.h3
        className="heading-subsection mb-6 text-gradient"
        variants={scrollVariants.fadeUp}
        transition={{ ...scrollTransition, delay: 0.1 }}
      >
        {title}
      </motion.h3>

      {/* Awards */}
      {awards && awards.length > 0 && (
        <motion.div
          className="flex flex-wrap gap-3 mb-4"
          variants={scrollVariants.fadeUp}
          transition={{ ...scrollTransition, delay: 0.15 }}
        >
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-accent text-sm"
            >
              <Award size={14} />
              <span>{award}</span>
            </div>
          ))}
        </motion.div>
      )}

      {/* Description */}
      <motion.div
        className="space-y-4 mb-6"
        variants={scrollVariants.fadeUp}
        transition={{ ...scrollTransition, delay: 0.2 }}
      >
        {description.map((paragraph, index) => (
          <p key={index} className="text-editorial text-ink-light">
            {paragraph}
          </p>
        ))}
      </motion.div>

      {/* Technical details */}
      {technicalDetails && (
        <motion.div
          className="margin-note mb-6"
          variants={scrollVariants.slideInLeft}
          transition={{ ...scrollTransition, delay: 0.25 }}
        >
          <p>{technicalDetails}</p>
        </motion.div>
      )}

      {/* Formula */}
      {formula && (
        <motion.div
          className="formula-block mb-6 glow-box"
          variants={scrollVariants.scaleIn}
          transition={{ ...scrollTransition, delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
        >
          <pre className="whitespace-pre-wrap">{formula}</pre>
        </motion.div>
      )}

      {/* Images */}
      {images && images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          {images.map((image, index) => (
            <motion.figure
              key={index}
              className="gallery-item"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.35 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full aspect-video object-cover"
              />
              {image.caption && (
                <figcaption className="text-xs text-ink-muted p-3 bg-secondary/50">
                  {image.caption}
                </figcaption>
              )}
            </motion.figure>
          ))}
        </div>
      )}
    </motion.article>
  );
};

export default TechnicalBlock;
