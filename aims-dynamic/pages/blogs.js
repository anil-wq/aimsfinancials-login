import Head from 'next/head';
import Link from 'next/link';

/**
 * Blogs page
 *
 * Displays a section highlighting Anil Kumar's most viewed LinkedIn posts.
 * Since LinkedIn does not provide a free embeddable feed, this page embeds
 * the public profile activity page via an iframe. Users can scroll the feed
 * directly or click through to LinkedIn. The navigation mirrors the rest of
 * the site.
 */
export default function Blogs() {
  return (
    <div>
      <Head>
        <title>Blogs – AIMS Financials</title>
      </Head>
      {/* Navbar */}
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
            <li><Link href="/blogs">Blogs</Link></li>
          </ul>
        </div>
      </nav>
      <div style={{ paddingTop: '80px', paddingBottom: '2rem' }}>
        <div className="container">
          <h2 style={{ color: 'var(--secondary-color)', textAlign: 'center', marginBottom: '1rem' }}>Insights &amp; Blogs</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Explore my most popular posts and thought leadership shared on LinkedIn.
            These updates cover tax strategies, wealth building and personal finance topics.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {/* Embed the LinkedIn profile activity feed */}
            <iframe
              src="https://www.linkedin.com/embed/feed/update/urn:li:share:"
              title="LinkedIn Feed"
              style={{ width: '100%', maxWidth: '800px', height: '600px', border: 'none' }}
              allowFullScreen
            ></iframe>
          </div>
          <p style={{ textAlign: 'center', marginTop: '1rem' }}>
            Unable to view the feed? <a href="https://www.linkedin.com/in/anilaimsfin/" target="_blank" rel="noopener noreferrer">Visit my LinkedIn profile</a> directly.
          </p>
        </div>
      </div>
    </div>
  );
}