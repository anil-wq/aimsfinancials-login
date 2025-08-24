import React from 'react';

/**
 * Sidebar component for the learning dashboard. Displays groups and their
 * associated items. When a user clicks an item, the onSelect callback
 * is invoked with the item's slug. The active item is highlighted.
 *
 * Props:
 * - catalog: array of { group: string, items: [{ title, slug, summary }] }
 * - activeSlug: currently selected slug
 * - onSelect: function to call when a slug is selected
 */
export default function Sidebar({ catalog, activeSlug, onSelect }) {
  return (
    <aside className="sidebar">
      {catalog.map((section) => (
        <div className="sidebar-group" key={section.group}>
          <h4 className="sidebar-group-title">{section.group}</h4>
          <ul className="sidebar-list">
            {section.items.map((item) => {
              const active = activeSlug === item.slug;
              return (
                <li
                  key={item.slug}
                  className={`sidebar-item ${active ? 'active' : ''}`}
                  onClick={() => onSelect(item.slug)}
                  title={item.summary}
                >
                  {item.title}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
}