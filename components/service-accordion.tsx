import type { ReactNode } from "react";

type ServiceItem = {
  name: string;
  detail: string;
};

type ServiceCategory = {
  title: string;
  items: readonly ServiceItem[];
};

type ServiceEntry = {
  title: string;
  text: string;
  categories: readonly ServiceCategory[];
};

type ServiceAccordionProps = {
  services: readonly ServiceEntry[];
  headingLevel?: "h2" | "h3";
  className?: string;
};

function Heading({ level: Tag, children }: { level: "h2" | "h3"; children: ReactNode }) {
  return <Tag className="service-title">{children}</Tag>;
}

export function ServiceAccordion({ services, headingLevel = "h3", className }: ServiceAccordionProps) {
  const Title = headingLevel;

  return <div className={className ?? "services-grid"}>{services.map((service) => {
    const totalItems = service.categories.reduce((count, category) => count + category.items.length, 0);
    return (
      <details className="service-card" key={service.title}>
        <summary className="service-summary">
          <div className="service-summary-copy">
            <Heading level={Title}>{service.title}</Heading>
            <p className="service-summary-meta">{service.text}</p>
          </div>
          <div className="service-summary-stats" aria-hidden="true">
            <span className="service-summary-badge">{service.categories.length} areas</span>
            <span className="service-summary-badge">{totalItems} services</span>
          </div>
          <span className="service-arrow" aria-hidden="true">⌄</span>
        </summary>
        <div className="service-groups">
          {service.categories.map((category) => (
            <details className="service-group" key={category.title}>
              <summary className="service-group-summary">
                <span className="service-group-title">{category.title}</span>
                <span className="service-group-meta">{category.items.length} items</span>
              </summary>
              <div className="service-items">
                {category.items.map((item) => (
                  <article className="service-item" key={item.name}>
                    <strong>{item.name}</strong>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </details>
          ))}
        </div>
      </details>
    );
  })}</div>;
}