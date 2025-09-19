/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';

export default function Blogs() {
  const posts = [
    { title: "Multiple Taxation: Earn → Tax → Invest → Sell → Tax → Repeat", date: "Sep 2025", summary: "Why dollars can be taxed multiple times—and strategies to minimize it.", href: "https://www.linkedin.com/in/anilaimsfin/" },
    { title: "RSUs: The Hidden Tax Drag Most Execs Miss", date: "Sep 2025", summary: "Framework for managing capital‑gains drag on concentrated stock.", href: "https://www.linkedin.com/in/anilaimsfin/" },
    { title: "Estate Tax Sunset: Why Planning Early Matters", date: "Sep 2025", summary: "What the 2026 sunset could mean and practical moves to prepare.", href: "https://www.linkedin.com/in/anilaimsfin/" }
  ];
  return (
    <div>
      <Head><title>Blogs – AIMS Financials</title></Head>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo"><Link href="/"><img src="/logo.png" alt="AIMS Financials logo" /></Link></div>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/education">Education</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
          </ul>
        </div>
      </nav>
      <section style={{ paddingTop: '90px', paddingBottom: '2rem' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', color: 'var(--secondary-color)' }}>Latest Insights</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>Curated posts migrated from LinkedIn. Tap through for the full discussion.</p>
          <div className="service-cards">
            {posts.map((p, i) => (
              <a key={i} className="service-card" href={p.href} target="_blank" rel="noopener noreferrer">
                <ion-icon name="newspaper-outline"></ion-icon>
                <h3>{p.title}</h3>
                <p style={{ marginTop: '0.25rem', fontSize: '0.9rem', color: '#6b7280' }}>{p.date}</p>
                <p>{p.summary}</p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}