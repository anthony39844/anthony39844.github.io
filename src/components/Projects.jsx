import React, { useState } from 'react';
import data from '../data.json';

const ArrowUpRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 7h10v10"/>
    <path d="M7 17 17 7"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
  </svg>
);

const Projects = () => {
  const { projects = [] } = data;
  const [currentIndex, setCurrentIndex] = useState(0);

  if (projects.length === 0) return null;

  const currentProject = projects[currentIndex] || projects[0];

  return (
    <section id="projects">
      {/* Section Header */}
      <div className="section-header">
        <h2 className="section-title">
          Projects
        </h2>
      </div>

      {/* Project Direct Quick-Tabs */}
      <div style={{
        display: 'flex',
        gap: '0.6rem',
        marginTop: '1.2rem',
        marginBottom: '1rem',
        overflowX: 'auto',
        paddingBottom: '0.4rem'
      }}>
        {projects.map((p, idx) => {
          const isActive = currentIndex === idx;
          return (
            <button
              key={p.id || idx}
              onClick={() => setCurrentIndex(idx)}
              style={{
                background: isActive ? 'var(--accent-dim)' : 'transparent',
                border: isActive ? '1px solid var(--accent-border)' : '1px solid var(--border-subtle)',
                color: isActive ? 'var(--accent-primary)' : 'var(--text-muted)',
                padding: '0.4rem 0.85rem',
                borderRadius: '16px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease',
                fontWeight: isActive ? 600 : 400
              }}
            >
              {p.title}
            </button>
          );
        })}
      </div>

      {/* Spotlight Project Card */}
      <div
        className="ghoul-card"
        style={{
          minHeight: '260px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          borderColor: 'var(--accent-border)',
          boxShadow: '0 12px 35px -8px rgba(0, 0, 0, 0.65), 0 0 25px -8px var(--accent-glow)',
          animation: 'fadeIn 0.3s ease'
        }}
      >
        <div>

          <h3 style={{
            fontSize: '1.5rem',
            color: 'var(--text-pure)',
            marginBottom: '0.8rem',
            fontWeight: 700,
            letterSpacing: '-0.02em'
          }}>
            {currentProject.link ? (
              <a
                href={currentProject.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'inherit',
                  textDecoration: 'underline',
                  textUnderlineOffset: '5px',
                  textDecorationColor: '#ffffff',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-primary)';
                  e.currentTarget.style.textDecorationColor = 'var(--accent-primary)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-pure)';
                  e.currentTarget.style.textDecorationColor = '#ffffff';
                }}
              >
                {currentProject.title}
                <ArrowUpRightIcon />
              </a>
            ) : (
              currentProject.title
            )}
          </h3>

          <p style={{
            fontSize: '0.94rem',
            lineHeight: 1.8,
            color: 'var(--text-muted)',
            marginBottom: '1.6rem'
          }}>
            {currentProject.description}
          </p>
        </div>

        {/* Card Bottom: Tech Tags & GitHub Button */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '1rem',
          paddingTop: '1.2rem',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          {/* Tech Tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {currentProject.tags && currentProject.tags.map((tag, idx) => (
              <span key={idx} className="ghoul-tag">
                {tag}
              </span>
            ))}
          </div>

          {/* GitHub Code Button */}
          {currentProject.github && (
            <a
              href={currentProject.github}
              target="_blank"
              rel="noreferrer"
              className="ghoul-btn-secondary"
              style={{ padding: '0.5rem 0.95rem', fontSize: '0.8rem', gap: '0.45rem' }}
            >
              <GitHubIcon />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
