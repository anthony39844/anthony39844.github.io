import React from 'react';
import data from '../data.json';

const Header = () => {
  const { personal } = data;

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 100,
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      backgroundColor: 'rgba(7, 7, 9, 0.85)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
      transition: 'all 0.3s ease'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '1.2rem',
        paddingBottom: '1.2rem'
      }}>
        {/* Brand */}
        <a href="#root" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
          <span className="crimson-dot"></span>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.1rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              color: 'var(--text-pure)'
            }}>
              {personal.name.toUpperCase()}
            </span>
            <span style={{
              fontFamily: 'var(--font-kanji)',
              fontSize: '0.65rem',
              color: 'var(--crimson-bright)',
              letterSpacing: '0.2em'
            }}>
              {personal.alias || 'WARD 20 // 東京'}
            </span>
          </div>
        </a>

        {/* Navigation */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="#experience" style={{
            fontSize: '0.85rem',
            fontFamily: 'var(--font-serif)',
            letterSpacing: '0.08em',
            color: 'var(--text-muted)'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--crimson-bright)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            EXPERIENCE
          </a>

          <a href="#projects" style={{
            fontSize: '0.85rem',
            fontFamily: 'var(--font-serif)',
            letterSpacing: '0.08em',
            color: 'var(--text-muted)'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--crimson-bright)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            PROJECTS
          </a>

          <a href="#skills" style={{
            fontSize: '0.85rem',
            fontFamily: 'var(--font-serif)',
            letterSpacing: '0.08em',
            color: 'var(--text-muted)'
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--crimson-bright)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
          >
            STACK
          </a>

          <a href="mailto:hello@example.com" className="ghoul-btn-secondary" style={{
            padding: '0.5rem 1.1rem',
            fontSize: '0.75rem'
          }}>
            CONTACT
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
