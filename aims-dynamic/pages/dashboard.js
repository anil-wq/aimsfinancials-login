import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { findUser } from '../lib/users';

/**
 * Dashboard page. Displays personalised strategies and resource links
 * for logged in users. If no username cookie is present or the
 * cookie does not match a known user, the visitor is redirected
 * to the login page.
 */
export default function Dashboard({ user }) {
  // Define category data structures and groupings for sidebar navigation
  const categories = {
    retirement: user.strategies.retirement,
    tax: user.strategies.tax,
    financialVehicles: user.strategies.financialVehicles,
    willsTrusts: user.strategies.willsTrusts,
    advancedTrusts: user.strategies.advancedTrusts,
    lifeInsurance: user.strategies.lifeInsurance,
    charitableGiving: user.strategies.charitableGiving
  };
  const categoryNames = {
    retirement: 'Retirement Strategies',
    tax: 'Tax Strategies',
    financialVehicles: 'Financial Vehicles',
    willsTrusts: 'Wills & Trusts',
    advancedTrusts: 'Advanced Trusts',
    lifeInsurance: 'Life Insurance',
    charitableGiving: 'Charitable Giving & DAFs'
  };
  const categoryResources = {
    retirement: '/resources/retirement-planning.txt',
    tax: '/resources/tax-strategies.txt',
    financialVehicles: '/resources/financial-vehicles.txt',
    willsTrusts: '/resources/will-trusts.txt',
    advancedTrusts: '/resources/advanced-trusts.txt',
    lifeInsurance: '/resources/life-insurance.txt',
    charitableGiving: '/resources/charitable-giving.txt'
  };
  const groups = [
    { title: 'Planning', keys: ['retirement', 'tax'] },
    { title: 'Investments', keys: ['financialVehicles'] },
    { title: 'Estate Planning', keys: ['willsTrusts', 'advancedTrusts', 'lifeInsurance'] },
    { title: 'Philanthropy', keys: ['charitableGiving'] }
  ];
  const [activeKey, setActiveKey] = useState(groups[0].keys[0]);

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
            Explore each topic using the sidebar to learn more about your options.
          </p>
          {/*
            Use a two‑column layout with a sidebar on the left and a main
            content area on the right. The sidebar lists topic categories and
            clicking a category loads its details in the main panel.
          */}
          <div className="dashboard-layout">
            <aside className="sidebar">
              {groups.map((group) => (
                <div key={group.title} className="sidebar-group">
                  <h4 className="sidebar-group-title">{group.title}</h4>
                  <ul className="sidebar-list">
                    {group.keys.map((key) => (
                      <li
                        key={key}
                        className={`sidebar-item ${activeKey === key ? 'active' : ''}`}
                        onClick={() => setActiveKey(key)}
                      >
                        {categoryNames[key]}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </aside>
            <main className="main-content">
              <h3 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>{categoryNames[activeKey]}</h3>
              <ul className="active-list">
                {categories[activeKey].map((item, idx) => (
                  <li key={idx} className="active-list-item">
                    <p>{item}</p>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: '1rem' }}>
                <a href={categoryResources[activeKey]} download>
                  Download {categoryNames[activeKey]}
                </a>
              </div>
            </main>
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