import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Navbar, Tech, Works } from './components';
import { useState, useContext } from "react";
import DarkModeContext from './hoc/DarkModeContext';

const App = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  return (
    <BrowserRouter>
      <div className={`relative z-0 ${darkMode ? 'bg-primary' : 'bg-primary-light'}`}>
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <About />
        <Experience />
        {/* <Tech /> */}
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
