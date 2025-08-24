import Head from 'next/head';
import Link from 'next/link';
import { findUser } from '../lib/users';

/**
 * Dashboard page. Displays personalised strategies and resource links
 * for logged in users. If no username cookie is present or the
 * cookie does not match a known user, the visitor is redirected
 * to the login page.
 */
export default function Dashboard({ user }) {
  return (
    <div>
      <Head>
        <title>Dashboard – AIMS Financials</title>
      </Head>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <Link href="/">
              <img src="/logo.png" alt="AIMS Financials logo" />
            </Link>
          </div>
          <ul className="nav-links">
            <li><Link href="/">Home</Link></li>
            <li><a href="#">Dashboard</a></li>
            <li><a href="/api/logout" onClick={async (e) => {
              e.preventDefault();
              await fetch('/api/logout', { method: 'POST' });
              window.location.href = '/login';
            }}>Log Out</a></li>
          </ul>
        </div>
      </nav>
      <div style={{ paddingTop: '80px', paddingBottom: '2rem' }}>
        <div className="container">
          <h2 style={{ color: 'var(--secondary-color)', textAlign: 'center', marginBottom: '1rem' }}>Welcome, {user.name}</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Here are some personalised strategies and resources to help you reach your goals.
          </p>
          {/*
            The learning dashboard grid displays each category of financial information
            as its own list. We map over an array of section definitions to avoid
            repeating similar markup. The CSS class `.dashboard-grid` ensures
            responsive columns across screen sizes.
          */}
          <div className="dashboard-grid">
            {[
              { title: 'Retirement Strategies', items: user.strategies.retirement },
              { title: 'Tax Strategies', items: user.strategies.tax },
              { title: 'Financial Vehicles', items: user.strategies.financialVehicles },
              { title: 'Wills & Trusts', items: user.strategies.willsTrusts },
              { title: 'Advanced Trusts', items: user.strategies.advancedTrusts },
              { title: 'Charitable Giving & DAFs', items: user.strategies.charitableGiving },
              { title: 'Life Insurance', items: user.strategies.lifeInsurance }
            ].map((section, secIdx) => (
              <div key={secIdx} className="steps-list">
                <h3 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>{section.title}</h3>
                <ol>
                  {section.items.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '0.5rem' }}>
                      <div className="step-number">{idx + 1}</div>
                      <div className="step-content">
                        <p>{item}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>Downloadable Resources</h3>
            <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/resources/retirement-planning.txt" download>
                  Retirement Planning (TXT)
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/resources/tax-strategies.txt" download>
                  Tax Strategies (TXT)
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/resources/financial-vehicles.txt" download>
                  Financial Vehicles (TXT)
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/resources/will-trusts.txt" download>
                  Wills &amp; Trusts (TXT)
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/resources/advanced-trusts.txt" download>
                  Advanced Trusts (TXT)
                </a>
              </li>
              <li>
                <a href="/resources/charitable-giving.txt" download>
                  Charitable Giving (TXT)
                </a>
              </li>
              <li style={{ marginBottom: '0.5rem' }}>
                <a href="/resources/life-insurance.txt" download>
                  Life Insurance (TXT)
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { req, res } = context;
  const { cookie } = req.headers;
  if (!cookie) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    };
  }
  // Parse username from cookie string
  const match = cookie.match(/username=([^;]+)/);
  if (!match) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    };
  }
  const username = decodeURIComponent(match[1]);
  const user = findUser(username);
  if (!user) {
    return {
      redirect: {
        destination: '/login',
        permanent: false
      }
    };
  }
  return { props: { user } };
}