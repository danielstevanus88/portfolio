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
  return (
    <section id="agenda" className="py-24 container-editorial">
      <div className="mb-12">
        <p className="text-caption mb-2">Overview</p>
        <h2 className="heading-section">Agenda</h2>
      </div>

      <div className="rule-thick mb-8" />

      <nav className="stagger-children">
        {items.map((item) => (
          <a
            key={item.number}
            href={item.href}
            className="group block py-6 border-b border-rule hover:bg-paper-dark transition-colors -mx-4 px-4"
          >
            <div className="flex items-baseline gap-6">
              <span className="font-display text-3xl md:text-4xl text-ink/20 group-hover:text-burgundy transition-colors w-16">
                {item.number}
              </span>
              <div className="flex-1">
                <h3 className="font-display text-xl md:text-2xl group-hover:text-burgundy transition-colors">
                  {item.title}
                </h3>
                {item.subtitle && (
                  <p className="text-ink-muted mt-1">{item.subtitle}</p>
                )}
              </div>
              <span className="text-ink-muted group-hover:text-burgundy transition-colors">
                →
              </span>
            </div>
          </a>
        ))}
      </nav>
    </section>
  );
};

export default TableOfContents;
