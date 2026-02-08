import { Award } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation, scrollVariants, scrollTransition } from "@/hooks/useScrollAnimation";

interface ProjectCardProps {
  title: string;
  platform: string;
  year: string;
  description: string[];
  features?: string[];
  images?: { src: string; alt: string; caption?: string }[];
  awards?: string[];
  featured?: boolean;
}

const ProjectCard = ({
  title,
  platform,
  year,
  description,
  features,
  images,
  awards,
  featured = false,
}: ProjectCardProps) => {
  const { ref, isInView } = useScrollAnimation();

  return (
    <motion.article
      ref={ref}
      className={`py-12 ${featured ? "paper-card my-8 glow-box" : ""}`}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={scrollVariants.fadeUp}
      transition={scrollTransition}
    >
      {/* Header */}
      <motion.div
        className="flex flex-wrap items-baseline justify-between gap-4 mb-6"
        variants={scrollVariants.fadeUp}
        transition={{ ...scrollTransition, delay: 0.1 }}
      >
        <h3 className="heading-project">{title}</h3>
        <div className="flex items-center gap-3">
          <span className="tag">{platform}</span>
          <span className="text-ink-muted">{year}</span>
        </div>
      </motion.div>

      {/* Awards */}
      {awards && awards.length > 0 && (
        <motion.div
          className="flex flex-wrap gap-3 mb-6"
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
        className="space-y-4 mb-8"
        variants={scrollVariants.fadeUp}
        transition={{ ...scrollTransition, delay: 0.2 }}
      >
        {description.map((paragraph, index) => (
          <p key={index} className="text-editorial text-ink-light">
            {paragraph}
          </p>
        ))}
      </motion.div>

      {/* Features */}
      {features && features.length > 0 && (
        <motion.div
          className="mb-8"
          variants={scrollVariants.fadeUp}
          transition={{ ...scrollTransition, delay: 0.25 }}
        >
          <h4 className="text-caption mb-4">Key Features</h4>
          <ul className="grid md:grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                className="flex items-start gap-3 text-ink-light"
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ delay: 0.3 + index * 0.05, duration: 0.4 }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 shrink-0" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Image Gallery */}
      {images && images.length > 0 && (
        <motion.div
          className="mt-8"
          variants={scrollVariants.fadeUp}
          transition={{ ...scrollTransition, delay: 0.3 }}
        >
          <h4 className="text-caption mb-4">Gallery</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <motion.figure
                key={index}
                className="gallery-item"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
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
        </motion.div>
      )}
    </motion.article>
  );
};

export default ProjectCard;
