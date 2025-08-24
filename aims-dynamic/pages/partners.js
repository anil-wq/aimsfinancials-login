import Head from 'next/head';

export default function Partners() {
  return (
    <div>
      <Head>
        <title>Partners – AIMS Financials</title>
      </Head>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <a href="/">
              <img src="/logo.png" alt="AIMS Financials logo" />
            </a>
          </div>
          <ul className="nav-links">
            <li><a href="/">Home</a></li>
            <li><a href="/education">Education</a></li>
            <li><a href="/strategies">Strategies</a></li>
            <li><a href="/vault">Vault</a></li>
            <li><a href="/partners">Partners</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
      </nav>
      <div style={{ paddingTop: '80px', paddingBottom: '2rem' }}>
        <div className="container">
          <h1 style={{ textAlign: 'center', color: 'var(--secondary-color)', marginBottom: '1rem' }}>Partner Program</h1>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: '2rem' }}>
            Collaborate with us to deliver exceptional value to your network and earn rewards.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            <div style={{ backgroundColor: 'var(--light-color)', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>Referral Tools</h3>
              <p style={{ color: '#555' }}>Create personalised referral links and track the progress of prospects in real time.</p>
            </div>
            <div style={{ backgroundColor: 'var(--light-color)', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>Revenue Sharing</h3>
              <p style={{ color: '#555' }}>Earn a portion of revenue for each successful client you refer. View your payouts transparently.</p>
            </div>
            <div style={{ backgroundColor: 'var(--light-color)', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
              <h3 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>Co‑Branded Resources</h3>
              <p style={{ color: '#555' }}>Access ready‑to‑share materials, slide decks and educational content branded with your identity.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <h2 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>Become a Partner</h2>
            <p style={{ color: '#555', marginBottom: '1rem' }}>
              If you’re a CPA, financial advisor, attorney or influencer serving the engineering community, we’d love to collaborate. Our platform handles the heavy lifting so you can focus on relationships.
            </p>
            <a href="/contact" className="btn-primary" style={{ cursor: 'pointer' }}>Contact Us to Learn More</a>
          </div>
        </div>
      </div>
    </div>
  );
}