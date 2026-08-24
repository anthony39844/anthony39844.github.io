import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import BackgroundAnimation from './components/BackgroundAnimation';

function App() {
  return (
    <>
      <BackgroundAnimation />
      <div className="portfolio-wrapper" style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <main className="content-flow">
          <About />
          <Experience />
          <Projects />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
