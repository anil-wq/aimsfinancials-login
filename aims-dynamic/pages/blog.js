import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

/**
 * Blog page
 *
 * This page surfaces thought‑leadership inspired by the founder’s public
 * LinkedIn posts. Each article summarises a real concept Anil has
 * discussed online – from optimising equity compensation to
 * protecting family wealth. Visitors can expand posts to read
 * full details without leaving the site. Additional posts can be
 * added by extending the `posts` array below or by connecting to a
 * CMS in the future.
 */
export default function Blog() {
  // Sample LinkedIn‑style posts. In a production version these
  // could be fetched from a headless CMS or API. Each entry
  // contains a title, date, summary and full content. Feel free
  // to add more objects to this array as new posts are published.
  const posts = [
    {
      id: 'rsu-after-tax',
      title: 'Maximise Your RSU After‑Tax Value: Four Steps to Keep More of Your Stock Awards',
      date: 'June 2024',
      summary:
        'Restricted stock units (RSUs) can significantly boost your net worth – but only if you plan ahead. Learn four simple moves to capture more value and avoid costly surprises.',
      content: (
        <div>
          <p>
            RSUs are a powerful wealth‑building tool for high‑earning engineers, but taxes can take a hefty
            bite if you don’t play your cards right. Here are four steps I routinely share with clients:
          </p>
          <ol style={{ paddingLeft: '1.25rem', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Plan your vest dates</strong> – Align vesting with low‑income years or high deductions
              (charitable giving, large purchases) to soften the tax blow.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Consider 83(b) elections</strong> – For startups, paying tax up front when the value is low can
              dramatically reduce future capital gains.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Diversify strategically</strong> – Use a 10b5‑1 plan to sell shares methodically and avoid
              concentration risk while remaining compliant with insider trading rules.
            </li>
            <li>
              <strong>Coordinate with your spouse and estate</strong> – Your vesting schedule should sync with
              your long‑term legacy plan; gifting or transferring shares to trusts can amplify tax benefits.
            </li>
          </ol>
          <p>
            Remember, the goal is to convert paper wealth into lasting assets that serve your life and
            legacy. A tax‑savvy strategy can add six figures of extra value over time.
          </p>
        </div>
      )
    },
    {
      id: '10b5-1-plan',
      title: 'Why a 10b5‑1 Trading Plan Is Essential for Executives With Company Stock',
      date: 'May 2024',
      summary:
        'Selling stock when you’re privy to insider information can be legally risky. A 10b5‑1 plan prearranges your trades and keeps you on the right side of both regulations and your own financial goals.',
      content: (
        <div>
          <p>
            Executives and leaders at tech firms often find themselves sitting on concentrated stock
            positions with limited windows to sell. A <em>Rule 10b5‑1</em> plan allows you to pre‑schedule
            trades, creating a safe harbour from insider trading accusations. Key benefits include:
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Compliance</strong> – Pre‑defined trading instructions keep you clear of insider trading rules,
              which can carry serious penalties if violated.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Psychology</strong> – Removing ad hoc decision‑making helps avoid emotional missteps when
              volatility hits the market.
            </li>
            <li>
              <strong>Diversification discipline</strong> – Regularly trimming your position prevents over‑reliance on
              one stock while still allowing you to participate in company upside.
            </li>
          </ul>
          <p>
            If you hold RSUs, options or founder shares, a 10b5‑1 plan is a low‑friction way to manage
            risk without losing sight of long‑term opportunities. It’s a cornerstone of our equity
            planning playbook.
          </p>
        </div>
      )
    },
    {
      id: 'estate-planning',
      title: 'Estate Planning for Engineering Executives: Don’t Wait to Build Your Legacy',
      date: 'April 2024',
      summary:
        'You’ve worked hard to build significant wealth. Proper estate planning ensures that your family benefits from it rather than the IRS. Here’s why now is the time to start.',
      content: (
        <div>
          <p>
            Many high‑income engineers postpone estate planning because it feels far off or complicated.
            But procrastinating can mean losing valuable tax opportunities and leaving your loved ones
            unprotected. Consider these principles:
          </p>
          <ul style={{ paddingLeft: '1.25rem', marginTop: '0.75rem', marginBottom: '0.75rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Start with a revocable trust</strong> – It avoids probate, keeps your affairs private and
              simplifies management if you become incapacitated.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Use gift and estate tax exemptions</strong> – Current federal exemptions are historically high
              but scheduled to drop; use them now to shift assets tax‑free.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              <strong>Layer in advanced structures</strong> – Tools like GRATs, CLTs and ILITs can freeze
              asset values, provide for heirs and support charities while shrinking your taxable estate.
            </li>
          </ul>
          <p>
            Estate planning is about more than documents; it’s a mindset. Start early, iterate often and
            involve professionals who understand the complexities of tech compensation and tax law.
          </p>
        </div>
      )
    }
  ];

  // Track which post is currently expanded to show full content
  const [expandedPost, setExpandedPost] = useState(null);

  return (
    <div>
      <Head>
        <title>Blog – AIMS Financials</title>
      </Head>
      {/* Top navigation replicates the site‑wide menu */}
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
          <h1 style={{ textAlign: 'center', color: 'var(--secondary-color)', marginBottom: '1rem' }}>Insights &amp; Articles</h1>
          <p style={{ textAlign: 'center', color: '#555', marginBottom: '2rem' }}>
            Our latest thinking on tax‑smart planning, equity compensation and legacy building. Expand
            an article to read more.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {posts.map((post) => (
              <div key={post.id} style={{ backgroundColor: 'var(--light-color)', padding: '1.5rem', borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.05)' }}>
                <h2 style={{ color: 'var(--secondary-color)', marginBottom: '0.25rem' }}>{post.title}</h2>
                <p style={{ fontSize: '0.85rem', color: '#888', marginBottom: '0.75rem' }}>{post.date}</p>
                <p style={{ color: '#555', marginBottom: '1rem' }}>{post.summary}</p>
                {expandedPost === post.id ? (
                  <div>
                    {post.content}
                    <button
                      onClick={() => setExpandedPost(null)}
                      className="btn-secondary"
                      style={{ marginTop: '1rem' }}
                    >
                      Show Less
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setExpandedPost(post.id)}
                    className="btn-primary"
                  >
                    Read More
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}