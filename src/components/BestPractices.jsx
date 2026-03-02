export default function BestPractices() {
  const items = [
    {
      title: "Performance-first themes",
      points: [
        "Avoid blocking scripts; defer non-critical JS",
        "Optimize images and lazy-load media in galleries",
      ],
    },
    {
      title: "Clean Shopify architecture",
      points: [
        "Use reusable, schema-driven sections instead of ad-hoc templates",
        "Leverage metafields for flexible content instead of hardcoding",
      ],
    },
    {
      title: "Quality & accessibility",
      points: [
        "Keyboard-friendly navigation and clear focus states",
        "Semantic HTML for better SEO and screen reader support",
      ],
    },
  ];

  return (
    <section className="content-section">
      <h2>How I Build Shopify Themes</h2>

      <div className="best-grid">
        {items.map((item) => (
          <article key={item.title} className="best-card">
            <h3>{item.title}</h3>
            <ul>
              {item.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

