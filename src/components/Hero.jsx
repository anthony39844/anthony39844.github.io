import React from 'react';
import data from '../data.json';

const MailIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 0 0 1.66-1.66 1.66 1.66 0 0 0-1.66-1.66 1.66 1.66 0 0 0-1.66 1.66 1.65 1.65 0 0 0 1.66 1.66m1.39 9.74v-8.37H5.07v8.37h2.78z" />
  </svg>
);

const GitHubIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
  </svg>
);

const FileTextIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const Hero = () => {
  const { personal } = data;
  const socials = personal.socials || {};

  return (
    <header className="hero-section" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      paddingTop: '2rem',
      paddingBottom: '1rem',
      gap: '1.2rem'
    }}>
      {/* Circular Profile Picture */}
      {personal.avatar && (
        <div style={{ position: 'relative', marginBottom: '0.5rem' }}>
          <img
            src={personal.avatar}
            alt={personal.name}
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2.5px solid var(--accent-border)',
              boxShadow: '0 12px 35px -5px rgba(0, 0, 0, 0.65), 0 0 25px -5px var(--accent-glow)',
              display: 'block',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }}
          />
        </div>
      )}

      {/* Name and Role */}
      <div>
        <h1 style={{
          fontSize: 'clamp(2.4rem, 5vw, 3.2rem)',
          fontWeight: 700,
          lineHeight: 1.15,
          letterSpacing: '-0.02em',
          marginBottom: '0.4rem',
          color: 'var(--text-pure)'
        }}>
          {personal.name}
        </h1>

        <div style={{
          fontSize: '1.15rem',
          color: 'var(--accent-primary)',
          fontWeight: 500,
          letterSpacing: '0.02em'
        }}>
          {personal.role}
        </div>
      </div>

      {/* Action / Social Buttons */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '0.75rem',
        marginTop: '0.5rem'
      }}>
        {socials.email && (
          <a
            href={`mailto:${socials.email.replace('mailto:', '')}`}
            className="ghoul-btn-primary"
            style={{ padding: '0.6rem 1.15rem', fontSize: '0.85rem', gap: '0.5rem' }}
          >
            <MailIcon />
            <span>Get In Touch</span>
          </a>
        )}

        {socials.linkedin && (
          <a
            href={socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="ghoul-btn-secondary"
            style={{ padding: '0.6rem 1.1rem', fontSize: '0.85rem', gap: '0.5rem' }}
          >
            <LinkedInIcon />
            <span>LinkedIn</span>
          </a>
        )}

        {socials.github && (
          <a
            href={socials.github}
            target="_blank"
            rel="noreferrer"
            className="ghoul-btn-secondary"
            style={{ padding: '0.6rem 1.1rem', fontSize: '0.85rem', gap: '0.5rem' }}
          >
            <GitHubIcon />
            <span>GitHub</span>
          </a>
        )}

        <a
          href="/Anthony_Zheng_SWE_Resume.pdf"
          target="_blank"
          rel="noreferrer"
          className="ghoul-btn-secondary"
          style={{ padding: '0.6rem 1.1rem', fontSize: '0.85rem', gap: '0.5rem' }}
        >
          <FileTextIcon />
          <span>Resume</span>
        </a>
      </div>
    </header>
  );
};

export default Hero;
