import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Navbar, Works } from '/src/components';
import { useContext } from "react";
import DarkModeContext from '/src/hoc/DarkModeContext';

const App = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <BrowserRouter>
      <div className={`relative z-0 ${darkMode ? 'bg-primary' : 'bg-primary-light'}`}>
        <div className="bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <About />
        <Experience />
        <Works />
        <div className="relative z-0">
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
