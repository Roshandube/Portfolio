export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <p className="hero-eyebrow">Shopify Theme Developer • Frontend Engineer</p>

        <h1 className="hero-title">
          Roshan —{" "}
          <span className="hero-highlight">
            building high-converting Shopify experiences
          </span>
        </h1>

        <p className="hero-subtitle">
          I design, develop, and optimize custom Shopify themes using Liquid,
          schema-based sections, metafields, and modern frontend practices to
          ship fast, maintainable storefronts.
        </p>

        <div className="hero-actions">
          <a
            href="https://meet.google.com/your-meet-link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Let&apos;s Connect
          </a>
        </div>

      </div>
    </section>
  );
}
