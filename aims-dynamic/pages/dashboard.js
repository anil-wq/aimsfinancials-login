import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { findUser } from '../lib/users';
import { catalog } from '../content/catalog';
import { bySlug } from '../content/articles';
import Sidebar from '../components/Sidebar';

/**
 * Dashboard page. Displays personalised strategies and resource links
 * for logged in users. If no username cookie is present or the
 * cookie does not match a known user, the visitor is redirected
 * to the login page.
 */
export default function Dashboard({ user }) {
  // Determine the initial article slug from the catalog. Use the first item as default.
  const firstSlug = catalog.length > 0 && catalog[0].items.length > 0 ? catalog[0].items[0].slug : null;
  const [activeSlug, setActiveSlug] = useState(firstSlug);

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
            {/* Render the new sidebar and article viewer. The Sidebar component
               lists all topics defined in the catalog. Selecting a topic
               updates the activeSlug state and loads the corresponding
               article content on the right. */}
            <Sidebar catalog={catalog} activeSlug={activeSlug} onSelect={setActiveSlug} />
            <div className="main-content">
              {activeSlug && bySlug[activeSlug] ? (
                <>
                  <h2 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>{bySlug[activeSlug].meta.title}</h2>
                  <article>{bySlug[activeSlug].content}</article>
                </>
              ) : (
                <p>No content available.</p>
              )}
            </div>
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