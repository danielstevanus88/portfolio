import { Award } from "lucide-react";

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
  return (
    <article className="py-10 border-b border-rule last:border-b-0">
      {/* Header */}
      <h3 className="heading-subsection mb-6">{title}</h3>

      {/* Awards */}
      {awards && awards.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-4">
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
      <div className="space-y-4 mb-6">
        {description.map((paragraph, index) => (
          <p key={index} className="text-editorial text-ink-light">
            {paragraph}
          </p>
        ))}
      </div>

      {/* Technical details */}
      {technicalDetails && (
        <div className="margin-note mb-6">
          <p>{technicalDetails}</p>
        </div>
      )}

      {/* Formula */}
      {formula && (
        <div className="formula-block mb-6">
          <pre className="whitespace-pre-wrap">{formula}</pre>
        </div>
      )}

      {/* Images */}
      {images && images.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
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
      )}
    </article>
  );
};

export default TechnicalBlock;
