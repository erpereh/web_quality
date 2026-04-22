import React, { useEffect, useState } from "react";

const partners = ["BlackRock", "Revolut", "JPMorgan Chase", "Parmenion", "↗ wise"];

const firmFeatures = [
  "Day plan",
  "AI search",
  "AI meeting summaries",
  "Document digitisation",
  "Suitability report",
  "Portfolio aggregation",
];

const consolidatorFeatures = [
  "Multi-firm oversight",
  "Rapid onboarding",
  "Document digitisation",
  "Data segregation",
  "Role-based access",
  "Audit trails",
  "Everything for Independent Firms and more",
];

const footerLinks = {
  Product: ["AI Practice Management", "Execution & Custody"],
  Obsidian: ["Resources", "About Us", "Careers", "Contact Us", "Linkedin"],
  Others: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" },
    );

    targets.forEach((target) => observer.observe(target));
    const fallback = window.setTimeout(() => {
      targets.forEach((target) => target.classList.add("is-visible"));
    }, 1400);

    return () => {
      window.clearTimeout(fallback);
      observer.disconnect();
    };
  }, []);
}

function Logo({ huge = false }) {
  return (
    <div className={huge ? "logo logo-huge" : "logo"} aria-label="Obsidian">
      <span className="logo-mark" aria-hidden="true">
        <span />
      </span>
      <span>obsidian</span>
    </div>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateNav = () => setIsScrolled(window.scrollY > 80);

    updateNav();
    window.addEventListener("scroll", updateNav, { passive: true });
    return () => window.removeEventListener("scroll", updateNav);
  }, []);

  return (
    <header className={isScrolled ? "nav is-scrolled" : "nav"}>
      <Logo />
      <nav className="nav-links" aria-label="Main navigation">
        <div className="nav-menu-item">
          <button className="nav-link-trigger" type="button" aria-haspopup="true">
            What we offer <span className="chevron" aria-hidden="true" />
          </button>
          <div className="mega-menu" role="menu" aria-label="What we offer">
            <div className="mega-inner">
              <a className="mega-card" href="#offer" role="menuitem">
                <span className="mega-visual mega-orb" aria-hidden="true" />
                <strong>AI Practice Management</strong>
                <span>Your clients, meetings and tasks - captured by AI, searchable in seconds, ready to act on.</span>
              </a>
              <a className="mega-card" href="#pricing" role="menuitem">
                <span className="mega-visual mega-chart" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                  <b />
                  <b />
                </span>
                <strong>Execution &amp; Custody</strong>
                <span>Trade, rebalance, and custody - all in one place. With instant account opening.</span>
              </a>
            </div>
          </div>
        </div>
        <a href="#offer">What we offer <span>⌄</span></a>
        <a href="#for">Who's it for <span>⌄</span></a>
        <a href="#pricing">Pricing</a>
        <a href="#about">About</a>
      </nav>
      <a className="nav-cta" href="#start">Get started</a>
    </header>
  );
}

function HeroDashboard() {
  return (
    <div className="dashboard shell-float" data-reveal>
      <img className="hero-app-image" src="/hero_app.png" alt="" aria-hidden="true" />
      <aside className="dash-sidebar">
        <span className="mini-logo" />
        <span className="side-icon search" />
        <span className="side-icon active" />
        <span className="side-icon check" />
        <span className="side-icon home" />
        <span className="side-icon people" />
      </aside>
      <div className="dash-main">
        <div className="dash-top">
          <span>←</span>
          <span>Mon, 22 Sept 2025</span>
          <span>→</span>
          <span className="history">◷ Chat history</span>
        </div>
        <h2>Welcome to your day, Sophie</h2>
        <div className="dash-actions">
          <button>◦ Record meeting</button>
          <button>Add ⌄</button>
        </div>
        <div className="dash-grid">
          <section>
            <h3>Meetings</h3>
            {["Emily Carter - first meeting", "Jake Elroy Q3 review", "Lunch"].map((item, index) => (
              <div className="meeting-row" key={item}>
                <span>{index + 10} AM</span>
                <strong>{item}</strong>
              </div>
            ))}
          </section>
          <section>
            <h3>Tasks</h3>
            {[
              "Book annual review for the Mitchell household",
              "Review risk assessment questionnaire template",
              "Send fund switch confirmation to D. Okonkwo",
            ].map((item) => (
              <div className="task-row" key={item}>
                <span />
                <p>{item}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero">
      <div className="empty-rock empty-rock-left" aria-hidden="true" />
      <div className="empty-rock empty-rock-right" aria-hidden="true" />
      <div className="hero-content">
        <h1 className="hero-title" data-reveal>
          The all-in-one platform{" "}
          <br />
          for financial advisers
        </h1>
        <p className="hero-copy" data-reveal>
          AI-powered practice management available now - with{" "}
          <br />
          integrated custody and execution launching soon.
        </p>
        <a className="hero-cta" href="#start" data-reveal>
          Get Started For Free
        </a>
      </div>
      <HeroDashboard />
    </section>
  );
}

function SocialProof() {
  return (
    <section className="social" data-reveal>
      <p>Made by the people behind</p>
      <div className="partner-row">
        <div className="partner-track">
          {[0, 1].map((group) => (
            <div className="partner-group" aria-hidden={group === 1 ? "true" : undefined} key={group}>
              {partners.map((partner) => (
                <span key={`${partner}-${group}`}>{partner}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductCard({ label, title, copy, type }) {
  return (
    <article className="product-card" data-reveal>
      <div className={`media-placeholder ${type}`}>
        {type === "orb" ? (
          <div className="recording-panel">
            <div>
              <span>02:04 Recording meeting</span>
              <strong>Ⅱ</strong>
              <span>Stop</span>
            </div>
            <div className="waveform">
              {Array.from({ length: 25 }).map((_, index) => (
                <i key={index} style={{ "--h": `${18 + ((index * 11) % 38)}px` }} />
              ))}
            </div>
          </div>
        ) : (
          <div className="portfolio-panel">
            <header>
              <span>Return by fund</span>
              <span>Closed: Jan 7, 08:11 EST</span>
            </header>
            <strong>18.5%</strong>
            <svg viewBox="0 0 520 160" role="img" aria-label="Decorative green chart">
              <polyline points="0,95 30,70 58,82 88,65 118,91 148,84 178,108 208,98 238,117 268,109 298,121 328,102 358,108 388,92 418,82 448,86 478,72 520,28" />
            </svg>
            <div className="positions">
              <span>Positions</span><span>Current</span><span>Target</span><span>Trade size</span>
              <span>SPX</span><span>45.0%</span><span>50.0%</span><b>+5%</b>
              <span>Nasdaq 100</span><span>35.0%</span><span>50.0%</span><b>+5%</b>
              <span>DAX</span><span>20.0%</span><span>50.0%</span><em>-15%</em>
            </div>
          </div>
        )}
      </div>
      <p className={label === "Free" ? "label free" : "label"}>{label}</p>
      <h3>{title}</h3>
      <p>{copy}</p>
      <a href="#learn">Learn more</a>
    </article>
  );
}

function OfferSection() {
  return (
    <section className="section offer" id="offer">
      <h2 data-reveal>Save Time &amp; Grow AUM</h2>
      <div className="product-grid">
        <ProductCard
          label="Free"
          title="AI Practice Management"
          copy="AI meeting notes, CRM, and portfolio aggregation all in one free module."
          type="orb"
        />
        <ProductCard
          label="Coming Soon"
          title="Execution & Custody"
          copy="Trade, rebalance, and custody - all in one place. With instant account opening."
          type="rock"
        />
      </div>
    </section>
  );
}

function ScaleSection() {
  return (
    <section className="section split-section" id="for">
      <div className="split-copy" data-reveal>
        <h2>The platform that<br />scales your firm</h2>
        <div className="feature-block">
          <h3>Independent firms</h3>
          <p>Spend less time on admin and more time delivering advice that matters.</p>
        </div>
        <ul className="feature-list">
          {firmFeatures.map((feature, index) => (
            <li className={index === firmFeatures.length - 1 ? "active" : ""} key={feature}>
              {feature}
              {index === firmFeatures.length - 1 && (
                <span>Personalized drafts that match your tone.</span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="wide-placeholder email-placeholder" data-reveal>
        <div className="email-panel shell-float">
          <header>
            <strong>Daniel Morris</strong>
            <span>&lt;daniel@ventures.com&gt;</span>
            <b>✓ Recognised</b>
          </header>
          <h4>✳ Suggested Replies</h4>
          <p>1. Thanks for flagging this. Given the recent volatility, it's completely understandable to revisit how things are positioned.</p>
          <button>Use</button>
          <p>2. I appreciate you reaching out. While markets have been more volatile recently, your portfolio is behaving as expected.</p>
          <button>Use</button>
        </div>
      </div>
    </section>
  );
}

function GrowthSection() {
  return (
    <section className="section split-section growth" id="pricing">
      <div className="wide-placeholder conversion-placeholder" data-reveal>
        <div className="conversion-cards">
          <div className="glass-card">
            <span className="doc-icon" />
            <strong>converting..</strong>
            <p>Preparing structured data across the organisation.</p>
            <i />
          </div>
          <div className="glass-card">
            <span className="doc-icon" />
            <strong>converted</strong>
            <p>Preparing structured data across the organisation.</p>
            <button>Show</button>
          </div>
        </div>
      </div>
      <div className="split-copy compact" data-reveal>
        <h2>Unlock rapid growth</h2>
        <div className="feature-block">
          <h3>Consolidators</h3>
          <p>Unify firms, data, and controls to scale faster - without operational drag.</p>
        </div>
        <ul className="feature-list">
          {consolidatorFeatures.map((feature, index) => (
            <li className={index === 2 ? "active" : ""} key={feature}>
              {feature}
              {index === 2 && (
                <span>Convert paper records into searchable, structured data across the organisation.</span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function RegulationSection() {
  return (
    <section className="section regulated" id="about">
      <h2 data-reveal>Built for regulated<br />environments</h2>
      <div className="reg-grid" data-reveal>
        {[
          ["▱", "Built to industry standards", "FCA authorisation in progress. SOC2 audit underway."],
          ["▱", "Security by default", "Two-factor authentication for every user."],
          ["▱", "Zero data leakage", "Built in-house. Hosted entirely on Obsidian's infrastructure."],
        ].map(([icon, title, copy]) => (
          <article key={title}>
            <span>{icon}</span>
            <h3>{title}</h3>
            <p>{copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="legal-row">
        <p>
          Obsidian Securities Limited is not yet authorised by the Financial Conduct Authority.
          <br />
          Prior to becoming authorised no information regarding the future provision of custody and execution services
          <br />
          is intended as an invitation or inducement to apply for these services, nor does it constitute financial advice.
        </p>
        <div>Powered by <span className="rockcore">◎ RockCore</span></div>
      </div>
      <div className="footer-main">
        <div>
          <Logo />
          <p>
            Obsidian Technologies Limited is a company registered in England &amp; Wales with
            <br />
            company number 1632982. Our office is located at 30 Churchill Place, Canary
            <br />
            Wharf, London, England, E14 5RE.
          </p>
          <div className="badges">
            <span>GDP</span>
            <span>→⌕</span>
          </div>
          <p>© 2026 Obsidian Technologies Limited. Obsidian is the registered trademark of Obsidian Technologies Limited.</p>
        </div>
        <nav className="footer-links" aria-label="Footer navigation">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4>{title}</h4>
              {links.map((link) => (
                <a href="#footer" key={link}>{link}</a>
              ))}
            </div>
          ))}
        </nav>
      </div>
      <div className="wordmark" aria-hidden="true">obsidian</div>
    </footer>
  );
}

export default function App() {
  useReveal();

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <OfferSection />
        <ScaleSection />
        <GrowthSection />
        <RegulationSection />
      </main>
      <Footer />
    </>
  );
}
