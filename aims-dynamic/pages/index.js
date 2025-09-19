import { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <Head>
        <title>AIMS Financials</title>
        <meta
          name="description"
          content="AIMS Financials – your tax‑smart quarterback coordinating taxes, equity and estate to help you build wealth and legacy."
        />
      </Head>
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <a href="#">
              <img src="/logo.png" alt="AIMS Financials logo" />
            </a>
          </div>
          <button
            className={`nav-toggle${menuOpen ? ' open' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
          <ul className={`nav-links${menuOpen ? ' active' : ''}`}> 
            <li><a href="#">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#what">What I Do</a></li>
            <li><a href="#philosophy">Philosophy</a></li>
            {/* Education tab links to the open-access education page */}
            <li><a href="/education">Education</a></li>
          </ul>
        </div>
      </nav>
      {/* Hero Section */}
      <section className="hero">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1>
            Strategic Wealth for <span className="highlight">Freedom &amp; Legacy</span>
          </h1>
          <p>
            AIMS Financials helps you orchestrate taxes, equity and estate planning so
            every move supports the life you want to build.
          </p>
          <div className="hero-buttons">
            <a
              className="btn-primary"
              href="https://aimsfinancials.lirplan.com/calendar"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Fit Call
            </a>
            {/* Link to education resources instead of client login */}
            <a className="btn-secondary" href="/education">Education</a>
          </div>
          <div className="hero-tags">
            <div className="tag">
              <ion-icon name="analytics-outline"></ion-icon>
              <span>Tax Planning</span>
            </div>
            <div className="tag">
              <ion-icon name="briefcase-outline"></ion-icon>
              <span>Retirement</span>
            </div>
            <div className="tag">
              <ion-icon name="leaf-outline"></ion-icon>
              <span>Estate &amp; Legacy</span>
            </div>
            <div className="tag">
              <ion-icon name="rocket-outline"></ion-icon>
              <span>Equity &amp; Options</span>
            </div>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <h2>Services</h2>
          <p className="section-description">
            Comprehensive solutions designed to address each aspect of your financial life.
          </p>
          <div className="service-cards">
            <div className="service-card">
              <ion-icon name="calculator-outline"></ion-icon>
              <h3>Tax Planning</h3>
              <p>Strategies to minimize taxes and align your financial decisions with current law.</p>
            </div>
            <div className="service-card">
              <ion-icon name="time-outline"></ion-icon>
              <h3>Retirement Planning</h3>
              <p>Prepare for the future with holistic retirement strategies tailored to your goals.</p>
            </div>
            <div className="service-card">
              <ion-icon name="shield-checkmark-outline"></ion-icon>
              <h3>Estate &amp; Legacy</h3>
              <p>Protect what matters most and ensure your wealth supports generations to come.</p>
            </div>
            <div className="service-card">
              <ion-icon name="layers-outline"></ion-icon>
              <h3>RSUs &amp; ISOs</h3>
              <p>Optimize equity compensation to capture upside while managing risk and taxes.</p>
            </div>
          </div>
        </div>
      </section>
      {/* What I Do Section */}
      <section id="what" className="playbooks-section">
        <div className="container">
          <h2>What I Do</h2>
          <p className="section-description">
            Acting as your financial quarterback, I coordinate every aspect of your financial life so that your plan works as a cohesive whole.
          </p>
          {/* Quarterback Card */}
          <div className="playbooks" style={{ marginBottom: '2rem' }}>
            <div className="flip-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
              <div className="flip-card-inner">
                <div className="flip-card-front" style={{ backgroundColor: 'var(--secondary-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', borderRadius: '8px' }}>
                  <h3>Your Financial Quarterback</h3>
                </div>
                <div className="flip-card-back" style={{ backgroundColor: 'var(--accent-color)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', borderRadius: '8px', textAlign: 'center' }}>
                  <p>
                    As your financial quarterback, I am the central point of coordination for all things money — calling the plays, keeping the strategy on track, and ensuring every specialist works toward your goals.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Interactive Service Cards */}
          <div className="dashboard-cards">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="/tax.png" alt="Tax Planning" />
                  <h3>Tax Planning</h3>
                </div>
                <div className="flip-card-back">
                  <p>Efficient tax strategies so you keep more of what you earn.</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="/retirement.png" alt="Retirement" />
                  <h3>Retirement</h3>
                </div>
                <div className="flip-card-back">
                  <p>Plan and invest with confidence for a comfortable retirement.</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="/legacy.png" alt="Legacy" />
                  <h3>Estate &amp; Legacy</h3>
                </div>
                <div className="flip-card-back">
                  <p>Create a plan that honors your values and protects your heirs.</p>
                </div>
              </div>
            </div>
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <img src="/equity.png" alt="Equity" />
                  <h3>RSU &amp; ISO</h3>
                </div>
                <div className="flip-card-back">
                  <p>Maximize your equity comp without unnecessary tax surprises.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Philosophy Section */}
      <section id="philosophy" className="philosophy-section">
        <div className="container">
          <h2>Philosophy</h2>
          <p className="section-description">
            True wealth isn’t built by focusing on a single tactic but by orchestrating every moving part of your financial life together.
          </p>
          <div className="philosophy-grid">
            <div className="posts">
              <ul className="philosophy-list">
                <li>See the big picture – integrate all stages of your financial life to align short‑ and long‑term goals.</li>
                <li>Adapt with change – build strategies that navigate shifts in markets and tax laws while maximizing opportunities.</li>
                <li>Adapt to growing income – recalibrate as your earnings increase so your plan stays aligned.</li>
                <li>Focus on missing opportunities – identify overlooked gaps to capture untapped potential.</li>
              </ul>
            </div>
            <div className="feelings">
              <div className="feel-header">What you’ll feel</div>
              <ul>
                <li><ion-icon name="compass-outline"></ion-icon> Clarity: one plan linking taxes, equity &amp; estate</li>
                <li><ion-icon name="heart-outline"></ion-icon> Confidence: a trusted partner coordinating your advisors</li>
                <li><ion-icon name="rocket-outline"></ion-icon> Momentum: focus on high‑impact moves that accelerate progress</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Call to Action Section */}
      <section className="cta-section" style={{ backgroundColor: 'var(--secondary-color)', color: 'white', padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', color: 'white' }}>Ready to explore your opportunities?</h2>
          <p style={{ textAlign: 'center', maxWidth: '700px', margin: '0.5rem auto 2rem', color: '#e8f1fc' }}>
            In 15 minutes, we’ll discuss your challenges and identify opportunities. You’ll walk away with insight into next steps and clarity around how we can help.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
            <div className="hero-tags">
              <div className="tag">
                <ion-icon name="calculator-outline"></ion-icon>
                <span>Tax Planning</span>
              </div>
              <div className="tag">
                <ion-icon name="time-outline"></ion-icon>
                <span>Retirement</span>
              </div>
              <div className="tag">
                <ion-icon name="shield-checkmark-outline"></ion-icon>
                <span>Estate &amp; Legacy</span>
              </div>
              <div className="tag">
                <ion-icon name="layers-outline"></ion-icon>
                <span>RSU &amp; ISO</span>
              </div>
            </div>
            <a
              className="btn-primary"
              href="https://aimsfinancials.lirplan.com/calendar"
              target="_blank"
              rel="noopener noreferrer"
              style={{ marginTop: '1rem' }}
            >
              Schedule a Fit Call
            </a>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--primary-color)', color: 'white', padding: '2rem 0', textAlign: 'center' }}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} AIMS Financials. All rights reserved.</p>
        </div>
      </footer>
      <style jsx>{`
        /* Flip card animation reused from our CSS file. Since CSS modules aren't
           imported here, we define the flip animation inline. */
        .flip-card {
          background-color: transparent;
          width: 100%;
          height: 300px;
          perspective: 1000px;
          border-radius: 8px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          text-align: center;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          padding: 1rem;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }
        .flip-card-front img {
          max-width: 80px;
          margin-bottom: 1rem;
        }
        .flip-card-back {
          transform: rotateY(180deg);
          background-color: var(--secondary-color);
          color: white;
        }
        /* Responsive adjustments for flip cards */
        .dashboard-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 1.5rem;
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
}