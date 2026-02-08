import { ReactNode } from "react";

interface SectionProps {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

const Section = ({ id, number, title, subtitle, children }: SectionProps) => {
  return (
    <section id={id} className="py-24 container-editorial scroll-mt-8">
      {/* Section header */}
      <div className="flex items-start gap-6 mb-12">
        <span className="section-number hidden md:block">{number}</span>
        <div className="flex-1 pt-4 md:pt-8">
          <p className="text-caption mb-2">Section {number}</p>
          <h2 className="heading-section">{title}</h2>
          {subtitle && (
            <p className="text-ink-muted mt-2 text-lg">{subtitle}</p>
          )}
        </div>
      </div>

      <div className="rule-thick mb-12" />

      {/* Section content */}
      <div>{children}</div>
    </section>
  );
};

export default Section;
