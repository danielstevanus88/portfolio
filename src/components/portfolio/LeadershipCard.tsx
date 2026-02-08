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
  return (
    <article className="py-8 border-b border-rule last:border-b-0">
      <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
        <div>
          <h3 className="font-display text-xl font-medium">{title}</h3>
          <p className="text-ink-muted italic">{role}</p>
        </div>
        {period && <span className="text-sm text-ink-muted">{period}</span>}
      </div>

      <div className="space-y-3 mb-4">
        {description.map((paragraph, index) => (
          <p key={index} className="text-ink-light">
            {paragraph}
          </p>
        ))}
      </div>

      {highlights && highlights.length > 0 && (
        <ul className="space-y-1">
          {highlights.map((highlight, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-ink-muted">
              <span className="text-burgundy">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
};

export default LeadershipCard;
