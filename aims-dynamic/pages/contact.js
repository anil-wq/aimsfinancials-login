import Head from 'next/head';
import Link from 'next/link';

/**
 * Contact page
 *
 * Provides a simple way for prospective clients or partners to reach
 * AIMS Financials. In the current version this page displays
 * email and phone details along with a short form. A functional
 * form handler can be implemented later using an API route or
 * external service (e.g. Mailchimp, Formspree).
 */
export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact Us – AIMS Financials</title>
      </Head>
      {/* Consistent navigation with other pages */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <Link href="/">
              <img src="/logo.png" alt="AIMS Financials logo" />
            </Link>
          </div>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/education">Education</Link></li>
            <li><Link href="/strategies">Strategies</Link></li>
            <li><Link href="/vault">Vault</Link></li>
            <li><Link href="/partners">Partners</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>
        </div>
      </nav>
      <div style={{ paddingTop: '80px', paddingBottom: '2rem' }}>
        <div className="container">
          <h1 style={{ textAlign: 'center', color: 'var(--secondary-color)', marginBottom: '1rem' }}>Get in Touch</h1>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: '2rem' }}>
            Whether you’re ready to start a fit call, join our partner programme or just have a question,
            we’d love to hear from you.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            <div style={{ backgroundColor: 'var(--light-color)', padding: '1.5rem 2rem', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)', maxWidth: '500px', width: '100%' }}>
              <h2 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>Contact Details</h2>
              <p style={{ marginBottom: '0.25rem', color: '#555' }}>
                <strong>Email:</strong> <a href="mailto:info@aimsfinancials.com" style={{ color: 'var(--primary-color)' }}>info@aimsfinancials.com</a>
              </p>
              <p style={{ marginBottom: '0.25rem', color: '#555' }}>
                <strong>Phone:</strong> <a href="tel:+1-555-123-4567" style={{ color: 'var(--primary-color)' }}>+1 (555) 123‑4567</a>
              </p>
              <p style={{ color: '#555' }}>
                We respond to most enquiries within one business day.
              </p>
            </div>
            <div style={{ backgroundColor: 'var(--light-color)', padding: '1.5rem 2rem', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)', maxWidth: '500px', width: '100%' }}>
              <h2 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>Send a Message</h2>
              <form onSubmit={(e) => { e.preventDefault(); alert('Thank you for your message!'); }}>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: '0.25rem', color: '#555' }}>Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: '0.25rem', color: '#555' }}>Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                  />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="message" style={{ display: 'block', marginBottom: '0.25rem', color: '#555' }}>Message</label>
                  <textarea
                    id="message"
                    rows="4"
                    required
                    style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%' }}>Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}