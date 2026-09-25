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

function renderPreview(values: readonly string[], fallbackCount?: number) {
  const preview = values.slice(0, 3);
  const remaining = values.length - preview.length;

  return <>
    {preview.map((value) => <span className="service-preview-chip" key={value}>{value}</span>)}
    {remaining > 0 && <span className="service-preview-chip">+{remaining} more</span>}
    {!preview.length && typeof fallbackCount === "number" && <span className="service-preview-chip">{fallbackCount} entries</span>}
  </>;
}

export function ServiceAccordion({ services, headingLevel = "h3", className }: ServiceAccordionProps) {
  const Title = headingLevel;

  return <div className={className ?? "services-grid"}>{services.map((service) => {
    const categoryTitles = service.categories.map((category) => category.title);
    return (
      <details className="service-card" key={service.title}>
        <summary className="service-summary">
          <div className="service-summary-copy">
            <Heading level={Title}>{service.title}</Heading>
            <p className="service-summary-meta">{service.text}</p>
            <div className="service-preview" aria-hidden="true">
              <span className="service-preview-label">Key scopes</span>
              <div className="service-preview-list">{renderPreview(categoryTitles, service.categories.length)}</div>
            </div>
          </div>
          <span className="service-arrow" aria-hidden="true">⌄</span>
        </summary>
        <div className="service-groups">
          {service.categories.map((category) => (
            <details className="service-group" key={category.title}>
              <summary className="service-group-summary">
                <div className="service-group-copy">
                  <span className="service-group-label">Service cluster</span>
                  <span className="service-group-title">{category.title}</span>
                  <span className="service-group-preview">Includes {category.items.slice(0, 2).map((item) => item.name).join(" and ")}{category.items.length > 2 ? `, plus ${category.items.length - 2} more` : ""}</span>
                </div>
                <span className="service-group-arrow" aria-hidden="true">⌄</span>
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