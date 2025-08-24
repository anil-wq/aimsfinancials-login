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
import { useState } from 'react';

export default function Sidebar({ catalog, activeSlug, onSelect }) {
  // Track which groups are expanded. Initialize with the first group expanded by default.
  const initialExpanded = {};
  if (catalog.length > 0) {
    initialExpanded[catalog[0].group] = true;
  }
  const [expandedGroups, setExpandedGroups] = useState(initialExpanded);

  const toggleGroup = (group) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [group]: !prev[group]
    }));
  };

  return (
    <aside className="sidebar">
      {catalog.map((section) => {
        const isExpanded = !!expandedGroups[section.group];
        return (
          <div className="sidebar-group" key={section.group}>
            <div
              className="sidebar-group-title"
              onClick={() => toggleGroup(section.group)}
            >
              <span>{section.group}</span>
              <span className="sidebar-group-icon">
                {isExpanded ? '▼' : '▶'}
              </span>
            </div>
            {isExpanded && (
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
            )}
          </div>
        );
      })}
    </aside>
  );
}