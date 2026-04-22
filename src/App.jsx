import React, { useEffect, useState } from "react";

const partners = ["+11 años de experiencia", "+10K nóminas gestionadas", "Partner oficial Cegid", "Partner Oracle HCM"];

const firmFeatures = [
  "Diagnóstico de procesos",
  "ERP cloud SaaS",
  "Dato único",
  "BI e IA integrada",
  "Integraciones abiertas",
  "VeriFactu y RGPD",
];

const consolidatorFeatures = [
  "Consultoría funcional",
  "Implantación a medida",
  "Formación de usuarios",
  "Gestión del cambio",
  "Soporte continuo",
  "Evolutivos",
  "Integraciones con sistemas externos",
];

const footerLinks = {
  Soluciones: ["Cegid XRP Enterprise", "Cegid HCM", "Oracle HCM"],
  Servicios: ["Consultoría", "Implantación", "Integraciones", "Soporte"],
  Empresa: ["Quiénes somos", "Blog", "Contacto"],
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
    <div className={huge ? "logo logo-huge" : "logo"} aria-label="Quality Solution Consulting">
      <span className="logo-symbol" aria-hidden="true">
        <img src="/logo.png" alt="" />
      </span>
      <span className="logo-lockup" aria-hidden="true">
        <span className="logo-word">
          QUAL<span>ITY</span>
        </span>
        <span className="logo-subtitle">SOLUTION CONSULTING</span>
      </span>
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
      <nav className="nav-links" aria-label="Navegación principal">
        <div className="nav-menu-item">
          <button className="nav-link-trigger" type="button" aria-haspopup="true">
            Soluciones <span className="chevron" aria-hidden="true" />
          </button>
          <div className="mega-menu" role="menu" aria-label="Soluciones">
            <div className="mega-inner">
              <a className="mega-card" href="#offer" role="menuitem">
                <span className="mega-visual mega-orb" aria-hidden="true" />
                <strong>Cegid XRP Enterprise</strong>
                <span>ERP cloud para conectar finanzas, compras, ventas, almacén, producción, BI e IA.</span>
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
                <strong>Soluciones HCM</strong>
                <span>Nómina, control horario, talento, portal del empleado y Oracle HCM para equipos de personas.</span>
              </a>
            </div>
          </div>
        </div>
        <a href="#offer">Soluciones <span>⌄</span></a>
        <a href="#for">Para quién <span>⌄</span></a>
        <a href="#pricing">Servicios</a>
        <a href="#about">Empresa</a>
      </nav>
      <a className="nav-cta" href="#start">Solicita una demo</a>
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
          <span>ERP</span>
          <span>Operativa conectada</span>
          <span>HCM</span>
          <span className="history">Panel de dirección</span>
        </div>
        <h2>Controla tu negocio desde un dato único</h2>
        <div className="dash-actions">
          <button>Ver KPIs</button>
          <button>Demo ⌄</button>
        </div>
        <div className="dash-grid">
          <section>
            <h3>Operaciones</h3>
            {["Pedidos pendientes", "Facturas OCR", "Stock crítico"].map((item, index) => (
              <div className="meeting-row" key={item}>
                <span>{index + 12}</span>
                <strong>{item}</strong>
              </div>
            ))}
          </section>
          <section>
            <h3>Personas</h3>
            {[
              "Nómina mensual validada",
              "Turnos y ausencias sincronizados",
              "Analítica de talento actualizada",
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
      <video className="hero-video" src="/hero.mp4" autoPlay muted loop playsInline aria-hidden="true" />
      <div className="hero-content">
        <h1 className="hero-title" data-reveal>
          Tu negocio,{" "}
          <br />
          unificado y bajo control.
        </h1>
        <p className="hero-copy" data-reveal>
          Implantamos Cegid XRP Enterprise, Cegid HCM y Oracle HCM{" "}
          <br />
          para crecer sin excels, silos ni frenos operativos.
        </p>
        <a className="hero-cta" href="#start" data-reveal>
          Solicita una demo
        </a>
      </div>
      <HeroDashboard />
    </section>
  );
}

function SocialProof() {
  return (
    <section className="social" data-reveal>
      <p>Consultoría tecnológica especializada en ERP y gestión de personas</p>
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

function ProductCard({ label, title, copy, imageSrc, imageAlt }) {
  return (
    <article className="product-card" data-reveal>
      <div className="media-placeholder">
        <img src={imageSrc} alt={imageAlt} />
      </div>
      <p className={label === "Free" ? "label free" : "label"}>{label}</p>
      <h3>{title}</h3>
      <p>{copy}</p>
      <a href="#learn">Saber más</a>
    </article>
  );
}

function OfferSection() {
  return (
    <section className="section offer" id="offer">
      <h2 data-reveal>Software de gestión empresarial y RRHH para crecer con control</h2>
      <div className="product-grid">
        <ProductCard
          label="ERP cloud"
          title="Cegid XRP Enterprise"
          copy="Finanzas, compras, ventas, almacén, producción, proyectos, BI e IA en una plataforma SaaS para empresa mediana."
          imageSrc="/enterprise.png"
          imageAlt="Vista de Cegid XRP Enterprise"
        />
        <ProductCard
          label="HCM"
          title="Soluciones HCM"
          copy="Nómina, control horario, talento, portal del empleado y Oracle HCM para departamentos de personas."
          imageSrc="/nomina.png"
          imageAlt="Vista de soluciones de nómina y HCM"
        />
      </div>
    </section>
  );
}

function ScaleSection() {
  return (
    <section className="section split-section" id="for">
      <div className="split-copy" data-reveal>
        <h2>Las señales de que<br />tu empresa necesita un ERP real</h2>
        <div className="feature-block">
          <h3>Menos hojas de cálculo. Más dato fiable.</h3>
          <p>Conectamos procesos, equipos y sistemas para que la dirección trabaje con información actualizada.</p>
        </div>
        <ul className="feature-list">
          {firmFeatures.map((feature, index) => (
            <li className={index === firmFeatures.length - 1 ? "active" : ""} key={feature}>
              {feature}
              {index === firmFeatures.length - 1 && (
                <span>Cumplimiento y procesos preparados para operar con rigor en España.</span>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div className="wide-placeholder email-placeholder" data-reveal>
        <img src="/xrp-interfaz-monitor-oficina.jpg" alt="Interfaz XRP en monitor de oficina" />
      </div>
    </section>
  );
}

function GrowthSection() {
  return (
    <section className="section split-section growth" id="pricing">
      <div className="wide-placeholder conversion-placeholder" data-reveal>
        <img src="/ingenieria-tablet-energia.jpg" alt="Equipo de ingeniería trabajando con una tablet" />
      </div>
      <div className="split-copy compact" data-reveal>
        <h2>No somos solo distribuidores de software</h2>
        <div className="feature-block">
          <h3>Implantamos resultados</h3>
          <p>Acompañamos cada fase: consultoría previa, implantación, formación, integraciones y evolución continua.</p>
        </div>
        <ul className="feature-list">
          {consolidatorFeatures.map((feature, index) => (
            <li className={index === 2 ? "active" : ""} key={feature}>
              {feature}
              {index === 2 && (
                <span>Conectamos Cegid, Oracle HCM, SGA, MES, Office 365, bancos, AEAT y e-commerce.</span>
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
      <h2 data-reveal>Cloud, cumplimiento<br />e integraciones</h2>
      <div className="reg-grid" data-reveal>
        {[
          ["▱", "Cloud SaaS", "Actualizaciones continuas y acceso seguro sin infraestructura propia."],
          ["▱", "RGPD y VeriFactu", "Procesos preparados para normativa laboral, fiscal y de protección de datos."],
          ["▱", "Integración total", "APIs y conectividad con SGA, MES, Office 365, bancos, AEAT y e-commerce."],
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
          Agenda una sesión sin compromiso y te mostramos cómo Cegid XRP, Cegid HCM u Oracle HCM
          <br />
          pueden encajar en tu operativa actual, tus integraciones y tus objetivos de crecimiento.
          <br />
          Email: info@qualitysolution.es · Teléfono: (+34) 609 10 05 38
        </p>
        <div>Partner <span className="rockcore">Cegid · Oracle HCM</span></div>
      </div>
      <div className="footer-main">
        <div>
          <Logo />
          <p>
            Quality Solution Consulting es una consultora tecnológica especializada en ERP, HCM,
            <br />
            integraciones y soporte continuo para empresas medianas en España.
            <br />
            Trabajamos con Cegid XRP Enterprise, Cegid HCM y Oracle HCM.
          </p>
          <div className="badges">
            <span>ERP</span>
            <span>HCM</span>
          </div>
          <p>© 2026 Quality Solution Consulting. Todos los derechos reservados.</p>
        </div>
        <nav className="footer-links" aria-label="Navegación de pie">
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
      <div className="wordmark" aria-hidden="true">quality</div>
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
