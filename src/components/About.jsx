import React from 'react';

const About = () => {
  return (
    <section id="about">
      <div className="section-header">
        <h2 className="section-title">
          About Me
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
        <p>
          I am a software engineer passionate about working on projects that impact real users and have a strong focus on end-to-end ownership. Some hobbies of mine include playing basketball, video games and eating out. Feel free to check out some of my projects and work experience below!
        </p>
      </div>
    </section>
  );
};

export default About;

