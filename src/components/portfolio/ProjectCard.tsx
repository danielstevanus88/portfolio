import { Award } from "lucide-react";

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
  return (
    <article className={`py-12 ${featured ? "paper-card my-8" : ""}`}>
      {/* Header */}
      <div className="flex flex-wrap items-baseline justify-between gap-4 mb-6">
        <h3 className="heading-project">{title}</h3>
        <div className="flex items-center gap-3">
          <span className="tag">{platform}</span>
          <span className="text-ink-muted">{year}</span>
        </div>
      </div>

      {/* Awards */}
      {awards && awards.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-6">
          {awards.map((award, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-burgundy text-sm"
            >
              <Award size={14} />
              <span className="italic">{award}</span>
            </div>
          ))}
        </div>
      )}

      {/* Description */}
      <div className="space-y-4 mb-8">
        {description.map((paragraph, index) => (
          <p key={index} className="text-editorial text-ink-light">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Features */}
      {features && features.length > 0 && (
        <div className="mb-8">
          <h4 className="text-caption mb-4">Key Features</h4>
          <ul className="grid md:grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-ink-light"
              >
                <span className="text-burgundy mt-1.5">•</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Image Gallery */}
      {images && images.length > 0 && (
        <div className="mt-8">
          <h4 className="text-caption mb-4">Gallery</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <figure key={index} className="gallery-item">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full aspect-video object-cover"
                />
                {image.caption && (
                  <figcaption className="text-xs text-ink-muted p-2 bg-paper-dark">
                    {image.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
