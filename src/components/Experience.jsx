import React, { useState } from 'react';
import data from '../data.json';

const CompanyLogo = ({ logo, company, maxWidth = '26px', maxHeight = '20px' }) => {
  const [hasError, setHasError] = useState(false);

  if (logo && !hasError) {
    return (
      <img
        src={logo}
        alt={company}
        onError={() => setHasError(true)}
        style={{
          maxWidth: maxWidth,
          maxHeight: maxHeight,
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
          display: 'block',
          pointerEvents: 'none'
        }}
      />
    );
  }

  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'block', color: 'var(--accent-primary)' }}>
      <rect width="20" height="14" x="2" y="7" rx="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
};

const Experience = () => {
  const reversedExperience = [...(data.experience || [])].reverse();
  const [activeIndex, setActiveIndex] = useState(0);

  if (reversedExperience.length === 0) return null;

  const currentJob = reversedExperience[activeIndex] || reversedExperience[0];

  // Helper to extract roles for backwards-compatibility or multi-role format
  const roles = currentJob.roles && currentJob.roles.length > 0
    ? currentJob.roles
    : [
        {
          role: currentJob.role || 'Software Engineer',
          period: currentJob.period || '',
          description: currentJob.description || '',
          tech: currentJob.tech || [],
          location: currentJob.location || ''
        }
      ];

  return (
    <section id="experience">
      {/* Section Header */}
      <div className="section-header">
        <h2 className="section-title">
          Experience
        </h2>
      </div>

      {/* Interactive Timeline Track */}
      <div style={{
        position: 'relative',
        margin: '1.8rem 0 2.2rem',
        padding: '0 1rem'
      }}>
        {/* Timeline Horizontal Rail */}
        <div style={{
          position: 'absolute',
          top: '38px',
          left: '20%',
          right: '20%',
          height: '2px',
          background: 'rgba(255, 255, 255, 0.12)',
          zIndex: 0
        }} />

        {/* Milestone Nodes along the Timeline */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
          maxWidth: '520px',
          margin: '0 auto'
        }}>
          {reversedExperience.map((job, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={job.id || idx}
                onClick={() => setActiveIndex(idx)}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  cursor: 'pointer',
                  gap: '0.45rem',
                  userSelect: 'none'
                }}
              >
                {/* Present / Year Marker */}
                <span style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--accent-primary)' : 'var(--text-dark)',
                  letterSpacing: '0.04em',
                  minHeight: '1.1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  transition: 'color 0.25s ease'
                }}>
                  {idx === 0 ? 'Present' : (job.year || '')}
                </span>

                {/* Milestone Node Circle */}
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: '50%',
                    background: isActive ? 'var(--bg-deep)' : 'var(--bg-card)',
                    border: isActive
                      ? '2.5px solid var(--accent-primary)'
                      : '1.5px solid rgba(255, 255, 255, 0.14)',
                    boxShadow: isActive
                      ? '0 0 16px var(--accent-glow), inset 0 0 8px var(--accent-glow)'
                      : '0 4px 12px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: isActive ? 'scale(1.1)' : 'scale(1)',
                    transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
                    padding: '6px',
                    boxSizing: 'border-box'
                  }}
                >
                  <div style={{
                    opacity: isActive ? 1 : 0.6,
                    transition: 'opacity 0.25s ease',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <CompanyLogo logo={job.logo} company={job.company} maxWidth="26px" maxHeight="20px" />
                  </div>
                </div>

                {/* Company Name Label */}
                <span style={{
                  fontSize: '0.82rem',
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--text-pure)' : 'var(--text-muted)',
                  fontFamily: 'var(--font-sans)',
                  transition: 'color 0.25s ease',
                  textAlign: 'center',
                  maxWidth: '120px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}>
                  {job.company.split(' ')[0]}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Active Job Spotlight Card (Shows Only 1 at a Time) */}
      <div
        key={currentJob.id || activeIndex}
        className="ghoul-card"
        style={{
          minHeight: '220px',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          animation: 'fadeIn 0.25s ease'
        }}
      >
        {/* Company Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '0.8rem',
          paddingBottom: '1.1rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          <div>
            <h3 style={{
              fontSize: '1.4rem',
              color: 'var(--text-pure)',
              fontWeight: 700,
              letterSpacing: '-0.01em',
              margin: 0
            }}>
              {currentJob.company}
            </h3>

            {currentJob.location && (
              <div style={{
                fontSize: '0.82rem',
                color: 'var(--text-muted)',
                fontFamily: 'var(--font-mono)',
                display: 'flex',
                alignItems: 'center',
                gap: '0.35rem',
                marginTop: '0.25rem'
              }}>
                <span style={{ color: 'var(--accent-primary)' }}>📍</span>
                <span>{currentJob.location}</span>
              </div>
            )}
          </div>

          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.78rem',
            color: 'var(--accent-primary)',
            background: 'var(--accent-dim)',
            padding: '0.2rem 0.65rem',
            borderRadius: '12px',
            border: '1px solid var(--accent-border)',
            fontWeight: 600
          }}>
            {activeIndex === 0 ? 'Present' : (currentJob.year || '')}
          </span>
        </div>

        {/* Roles / Levels Progression List */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: roles.length > 1 ? '1.6rem' : '1rem',
          paddingTop: '1.2rem'
        }}>
          {roles.map((r, roleIdx) => {
            const isLatestRole = roleIdx === 0;

            return (
              <div
                key={roleIdx}
                style={{
                  display: 'flex',
                  gap: '1.1rem',
                  alignItems: 'flex-start',
                  position: 'relative'
                }}
              >
                {/* Nested Sub-level Stem for multi-role company */}
                {roles.length > 1 && (
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    width: '18px',
                    flexShrink: 0
                  }}>
                    {/* Sub-node dot */}
                    <div style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: isLatestRole ? 'var(--accent-primary)' : 'transparent',
                      border: isLatestRole
                        ? '2px solid var(--accent-primary)'
                        : '1.5px solid var(--accent-soft)',
                      boxShadow: isLatestRole ? '0 0 8px var(--accent-glow)' : 'none',
                      marginTop: '5px',
                      zIndex: 1
                    }} />

                    {/* Connecting vertical line to next sub-role */}
                    {roleIdx < roles.length - 1 && (
                      <div style={{
                        width: '2px',
                        flex: 1,
                        background: 'linear-gradient(to bottom, var(--accent-primary), rgba(255, 255, 255, 0.08))',
                        margin: '4px 0'
                      }} />
                    )}
                  </div>
                )}

                {/* Role Details */}
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'baseline',
                    flexWrap: 'wrap',
                    gap: '0.6rem',
                    marginBottom: '0.3rem'
                  }}>
                    <h4 style={{
                      fontSize: '1.08rem',
                      fontWeight: 600,
                      color: isLatestRole ? 'var(--text-pure)' : 'var(--text-muted)',
                      margin: 0
                    }}>
                      {r.role}
                    </h4>

                    <span style={{
                      fontSize: '0.76rem',
                      fontFamily: 'var(--font-mono)',
                      color: isLatestRole ? 'var(--accent-primary)' : 'var(--text-dark)',
                      background: isLatestRole ? 'var(--accent-dim)' : 'rgba(255, 255, 255, 0.03)',
                      padding: '0.18rem 0.55rem',
                      borderRadius: '4px',
                      border: isLatestRole ? '1px solid var(--accent-border)' : '1px solid var(--border-subtle)'
                    }}>
                      {r.period}
                    </span>
                  </div>

                  {/* Role Description as Bullet Points */}
                  {r.description && (
                    <ul style={{
                      margin: '0.6rem 0 0.8rem',
                      paddingLeft: '1.2rem',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.45rem',
                      color: 'var(--text-muted)'
                    }}>
                      {(Array.isArray(r.description)
                        ? r.description
                        : r.description.split('\n').filter(Boolean)
                      ).map((bullet, bIdx) => (
                        <li
                          key={bIdx}
                          style={{
                            fontSize: '0.88rem',
                            lineHeight: 1.7,
                            color: 'var(--text-muted)'
                          }}
                        >
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Role Tech Tags */}
                  {r.tech && r.tech.length > 0 && (
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.35rem',
                      marginTop: '0.5rem'
                    }}>
                      {r.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="ghoul-tag"
                          style={{
                            fontSize: '0.7rem',
                            padding: '0.18rem 0.6rem'
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
