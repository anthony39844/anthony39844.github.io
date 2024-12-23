import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience, Navbar, Tech, Works } from './components';
import { useState } from "react";

const App = () => {

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
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
