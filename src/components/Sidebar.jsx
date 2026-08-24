import React, { useState, useEffect } from 'react';
import data from '../data.json';

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2"/>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 1.66-1.66 1.66 1.66 0 0 0-1.66-1.66 1.66 1.66 0 0 0-1.66 1.66 1.65 1.65 0 0 0 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z"/>
  </svg>
);

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
  </svg>
);

const Sidebar = () => {
  const { personal } = data;
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socials = personal.socials || {};

  return (
    <aside className="sidebar-column">
      {/* Top Header info */}
      <div>
        {/* Large Name */}
        <h1 style={{
          fontSize: '2.8rem',
          fontWeight: 700,
          lineHeight: 1.1,
          marginBottom: '0.5rem',
          letterSpacing: '-0.02em'
        }}>
          <a href="#root" style={{ color: 'var(--text-pure)' }}>
            {personal.name}
          </a>
        </h1>

        {/* Role */}
        <div style={{
          fontSize: '1.1rem',
          color: 'var(--accent-primary)',
          fontFamily: 'var(--font-sans)',
          fontWeight: 500,
          letterSpacing: '0.02em',
          marginBottom: '1.8rem'
        }}>
          {personal.role}
        </div>

        {/* Circular Profile Picture centered */}
        {personal.avatar && (
          <div style={{ display: 'flex', justifyContent: 'center', width: '100%', marginBottom: '2.5rem' }}>
            <img
              src={personal.avatar}
              alt={personal.name}
              style={{
                width: '175px',
                height: '175px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2.5px solid var(--accent-border)',
                boxShadow: '0 12px 35px -5px rgba(0, 0, 0, 0.65), 0 0 25px -5px var(--accent-glow)',
                display: 'block',
                transition: 'all 0.3s ease'
              }}
            />
          </div>
        )}

        {/* Dynamic Sticky Nav Menu */}
        <nav className="nav-menu">
          <a
            href="#about"
            className={`nav-link ${activeSection === 'about' ? 'active' : ''}`}
          >
            <span className="nav-indicator"></span>
            <span>01 // ABOUT</span>
          </a>

          <a
            href="#experience"
            className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`}
          >
            <span className="nav-indicator"></span>
            <span>02 // EXPERIENCE</span>
          </a>

          <a
            href="#projects"
            className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`}
          >
            <span className="nav-indicator"></span>
            <span>03 // PROJECTS</span>
          </a>
        </nav>
      </div>

      {/* Sidebar Footer / Social Links */}
      <div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
          {socials.email && (
            <a href={socials.email} className="ghoul-btn-primary" style={{ padding: '0.55rem 1rem', fontSize: '0.8rem', gap: '0.5rem' }}>
              <MailIcon />
              <span>Get In Touch</span>
            </a>
          )}
          {socials.linkedin && (
            <a href={socials.linkedin} target="_blank" rel="noreferrer" className="ghoul-btn-secondary" style={{ padding: '0.55rem 0.9rem', fontSize: '0.8rem', gap: '0.5rem' }}>
              <LinkedInIcon />
              <span>LinkedIn</span>
            </a>
          )}
          {socials.github && (
            <a href={socials.github} target="_blank" rel="noreferrer" className="ghoul-btn-secondary" style={{ padding: '0.55rem 0.9rem', fontSize: '0.8rem', gap: '0.5rem' }}>
              <GitHubIcon />
              <span>GitHub</span>
            </a>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
