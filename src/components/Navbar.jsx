import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onResize = () => {
      if (window.innerWidth > 768) setMenuOpen(false);
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar" aria-label="Main navigation">
      <div className="nav-left">
        <span className="nav-brand-text">ROSHAN&nbsp;DUBEY</span>
      </div>

      <button
        type="button"
        className={`nav-toggle ${menuOpen ? "open" : ""}`}
        aria-expanded={menuOpen}
        aria-controls="main-nav-links"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      <ul id="main-nav-links" className={`nav-right ${menuOpen ? "open" : ""}`}>
        <li>
          <a href="#home" onClick={handleNavClick}>
            Home
          </a>
        </li>
        <li>
          <a href="#skills" onClick={handleNavClick}>
            Technical Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={handleNavClick}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={handleNavClick}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}
