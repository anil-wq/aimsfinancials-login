/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { catalog } from '../content/catalog';
import { bySlug } from '../content/articles';

/**
 * Education page
 *
 * Provides open access to the full library of financial education articles
 * without requiring a login. Topics are organised into collapsible
 * categories on the left, with a search bar for quick filtering. The main
 * panel displays either a card grid of summaries or the full article when
 * selected. This page reuses the same complex design created for the
 * authenticated dashboard but exposes it to all visitors.
 */
export default function Education() {
  // Local state for navigation and filtering
  const [activeGroup, setActiveGroup] = useState(catalog.length > 0 ? catalog[0].group : null);
  const [activeSlug, setActiveSlug] = useState(null);
  const [openGroups, setOpenGroups] = useState(() => {
    const initial = {};
    catalog.forEach(sec => { initial[sec.group] = false; });
    return initial;
  });
  // Search has been removed; keep state for potential future filtering but not displayed
  const [searchTerm, setSearchTerm] = useState('');

  // Icon mappings reused from dashboard
  const groupIcons = {
    'Temporary Life Insurance': 'time-outline',
    'Cash Value Life Insurance': 'wallet-outline',
    'Retirement Planning': 'time-outline',
    'Trusts (Core)': 'document-text-outline',
    'Trusts (Advanced / Estate)': 'lock-closed-outline',
    'Charitable': 'heart-outline',
    'Investment Vehicles': 'bar-chart-outline',
    'Planning Structures': 'briefcase-outline'
  };
  const itemIcons = {
    'term-life': 'time-outline',
    'cash-value-insurance': 'wallet-outline',
    'whole-life': 'infinite-outline',
    'iul': 'analytics-outline',
    'vul': 'pulse-outline',
    'ppli': 'document-attach-outline',
    'ira': 'card-outline',
    'roth-ira': 'card-outline',
    'roth-401k': 'card-outline',
    'lirps': 'shield-outline',
    'annuities': 'cash-outline',
    'social-security': 'people-circle-outline',
    'long-term-care': 'medkit-outline',
    'basics-of-trusts': 'book-outline',
    'revocable-trust': 'file-tray-full-outline',
    'irrevocable-trust': 'lock-closed-outline',
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
    'flp': 'briefcase-outline',
    'qprt': 'home-outline',
    '529-education': 'school-outline'
  };

  const toggleGroup = (group) => {
    setOpenGroups(prev => ({ ...prev, [group]: !prev[group] }));
    setActiveGroup(group);
    setActiveSlug(null);
  };

  const getFilteredItems = (group) => {
    const section = catalog.find(sec => sec.group === group);
    if (!section) return [];
    return section.items.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  return (
    <div>
      <Head>
        <title>Education – AIMS Financials</title>
      </Head>
      {/* Shared top navigation */}
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
          <h2 style={{ color: 'var(--secondary-color)', textAlign: 'center', marginBottom: '1rem' }}>Financial Education</h2>
          <p style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Browse our library of in‑depth articles on planning, trusts, insurance and more. Expand a section to begin.
          </p>
          <div className="dashboard-layout">
            <aside className="sidebar">
              {/* Search bar removed as per requirements */}
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