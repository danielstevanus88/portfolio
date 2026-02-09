import { Award, X, ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollAnimation, scrollVariants, scrollTransition } from "@/hooks/useScrollAnimation";
import type { ReactNode } from "react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  platform: string;
  year: string;
  description: string[];
  features?: string[];
  images?: { src: string; alt: string; caption?: string }[];
  awards?: string[];
  featured?: boolean;
  children?: ReactNode;
  imageLayout?: "landscape" | "portrait";
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
  children,
  imageLayout = "landscape",
}: ProjectCardProps) => {
  const { ref, isInView } = useScrollAnimation();
  const [selectedImage, setSelectedImage] = useState<{ src: string; alt: string; caption?: string } | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
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
          <div className={`grid gap-4 ${
            imageLayout === "portrait" 
              ? "grid-cols-2 md:grid-cols-4" 
              : "grid-cols-2 md:grid-cols-3"
          }`}>
            {images.map((image, index) => (
              <motion.figure
                key={index}
                className="gallery-item cursor-pointer"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                transition={{ delay: 0.35 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02 }}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover ${
                    imageLayout === "portrait" 
                      ? "aspect-[9/16]" 
                      : "aspect-video"
                  }`}
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

      {/* Extra content (e.g., deep dives specific to this project) */}
      {children && (
        <motion.div
          className="mt-10"
          variants={scrollVariants.fadeUp}
          transition={{ ...scrollTransition, delay: 0.35 }}
        >
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors mb-4 text-sm font-medium uppercase tracking-widest"
          >
            {showDetails ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {showDetails ? "Hide Details" : "Show Details"}
          </button>
          
          <AnimatePresence>
            {showDetails && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                style={{ overflow: "hidden" }}
              >
                {children}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </motion.article>

    {/* Image Modal */}
    <AnimatePresence>
      {selectedImage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.button
            className="absolute top-4 right-4 p-2 rounded-full bg-secondary/80 hover:bg-secondary transition-colors text-ink"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
          >
            <X size={24} />
          </motion.button>
          
          <motion.div
            className="relative max-w-6xl max-h-[90vh] overflow-hidden"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-full object-contain rounded-lg"
            />
            {selectedImage.caption && (
              <motion.div
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <p className="text-white text-center">{selectedImage.caption}</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};

export default ProjectCard;
