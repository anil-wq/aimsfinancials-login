import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { catalog } from '../content/catalog';
import { bySlug } from '../content/articles';

/**
 * Dashboard page. Displays personalised strategies and resource links
 * for logged in users. If no username cookie is present or the
 * cookie does not match a known user, the visitor is redirected
 * to the login page.
 */
export default function Dashboard({ user }) {
  /**
   * Enhanced dashboard design
   *
   * We use a multi-level sidebar that groups topics into collapsible
   * sections. Each section can be expanded to reveal individual articles.
   * A search input filters article titles within the active group. Selecting
   * an article displays the full write‑up in the main panel. If no article
   * is selected, a grid of cards summarises the available topics for the
   * chosen group. This design minimises scrolling and provides a modern
   * navigation experience.  
   */
  const [activeGroup, setActiveGroup] = useState(catalog.length > 0 ? catalog[0].group : null);
  const [activeSlug, setActiveSlug] = useState(null);
  const [openGroups, setOpenGroups] = useState(() => {
    const initial = {};
    catalog.forEach(sec => { initial[sec.group] = false; });
    return initial;
  });
  const [searchTerm, setSearchTerm] = useState('');

  // Icons for groups and items (reused from earlier design)
  const groupIcons = {
    'Insurance': 'shield-outline',
    'Trusts (Core)': 'document-text-outline',
    'Trusts (Advanced / Estate)': 'lock-closed-outline',
    'Charitable': 'heart-outline',
    'Investment Vehicles': 'bar-chart-outline',
    'Planning Structures': 'briefcase-outline'
  };
  const itemIcons = {
    'term-life': 'time-outline',
    'whole-life': 'infinite-outline',
    'iul': 'analytics-outline',
    'vul': 'pulse-outline',
    'ppli': 'document-attach-outline',
    'survivorship': 'people-outline',
    'revocable-trust': 'file-tray-full-outline',
    'testamentary-trust': 'file-tray-stacked-outline',
    'special-needs-trust': 'accessibility-outline',
    'ilit': 'lock-closed-outline',
    'grat': 'repeat-outline',
    'idgt': 'swap-horizontal-outline',
    'crt': 'gift-outline',
    'clt': 'git-branch-outline',
    'dapt': 'shield-half-outline',
    'daf': 'albums-outline',
    'private-foundation': 'home-outline',
    'funds': 'layers-outline',
    'munis': 'pricetag-outline',
    'reits': 'business-outline',
    'private-equity': 'cube-outline',
    'annuities': 'cash-outline',
    'flp': 'briefcase-outline',
    'qprt': 'home-outline',
    '529-education': 'school-outline'
  };

  // Toggle the expansion state of a group and set it active
  const toggleGroup = (group) => {
    setOpenGroups(prev => ({ ...prev, [group]: !prev[group] }));
    setActiveGroup(group);
    setActiveSlug(null);
  };

  // Filter items based on search term
  const getFilteredItems = (group) => {
    const section = catalog.find(sec => sec.group === group);
    if (!section) return [];
    return section.items.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  return (
    <div>
      <Head>
        <title>Dashboard – AIMS Financials</title>
      </Head>
      {/* Top navigation updated for public access: Education page link replaces Dashboard and logout */}
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
          </ul>
        </div>
      </nav>
      <div style={{ paddingTop: '80px', paddingBottom: '2rem' }}>
        <div className="container">
          <h2 style={{ color: 'var(--secondary-color)', textAlign: 'center', marginBottom: '1rem' }}>Welcome, {user.name}</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Choose a topic from the sidebar to explore in depth. Use the search box to quickly find a concept.
          </p>
          {/* New complex layout: collapsible sidebar with search and advanced cards */}
          <div className="dashboard-layout">
            <aside className="sidebar">
              <div className="search-bar">
                <ion-icon name="search-outline"></ion-icon>
                <input
                  type="text"
                  placeholder="Search topics..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              {catalog.map((section) => (
                <div key={section.group} className="group">
                  <button
                    className="group-header"
                    onClick={() => toggleGroup(section.group)}
                  >
                    <div className="group-left">
                      <ion-icon name={groupIcons[section.group] || 'document-outline'}></ion-icon>
                      <span className="group-title">{section.group}</span>
                    </div>
                    <ion-icon
                      name={openGroups[section.group] ? 'chevron-up-outline' : 'chevron-down-outline'}
                      class="chevron-icon"
                    ></ion-icon>
                  </button>
                  {openGroups[section.group] && (
                    <ul className="group-list">
                      {section.items.map((item) => (
                        <li key={item.slug}>
                          <button
                            className={`item-button ${activeSlug === item.slug ? 'active' : ''}`}
                            onClick={() => {
                              setActiveGroup(section.group);
                              setActiveSlug(item.slug);
                            }}
                          >
                            {item.title}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </aside>
            <main className="content-area">
              {activeSlug ? (
                <div>
                  <button className="back-button" onClick={() => setActiveSlug(null)}>&larr; Back to {activeGroup}</button>
                  <h2 style={{ color: 'var(--secondary-color)', marginBottom: '0.5rem' }}>{bySlug[activeSlug]?.meta.title || ''}</h2>
                  <article>{bySlug[activeSlug]?.content || null}</article>
                </div>
              ) : (
                <div className="cards-grid">
                  {getFilteredItems(activeGroup).map((item) => (
                    <div
                      key={item.slug}
                      className="card"
                      onClick={() => {
                        setActiveSlug(item.slug);
                      }}
                      title={item.summary}
                    >
                      <div className="card-icon">
                        <ion-icon name={itemIcons[item.slug] || 'document-outline'}></ion-icon>
                      </div>
                      <h4 className="card-title">{item.title}</h4>
                      <p className="card-summary">{item.summary}</p>
                    </div>
                  ))}
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </div>
  );
}

// Make the dashboard publicly accessible by returning a default user.
export async function getServerSideProps() {
  // Provide a generic user object for display purposes. In a future iteration,
  // you could personalise this by looking up a profile based on query params.
  const user = { name: 'Visitor' };
  return { props: { user } };
}