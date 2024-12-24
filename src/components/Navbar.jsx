import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import {styles} from '/src/styles'
import { navLinks } from '/src/constants'
import {menu, close, menu_black, close_black} from '/src/assets'
import DarkModeContext from '/src/hoc/DarkModeContext';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const { darkMode, setDarkMode } = useContext(DarkModeContext);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${darkMode ? 'bg-tertiary' : 'bg-tertiary-light'}`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link to="/" className='flex items-center gap-2' 
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
        }}>
          <p className={`${darkMode ? 'text-text' : 'text-text-light'} text-[18px] font-bold cursor-point`}>Anthony Zheng</p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li 
              key={link.id} 
              className={`${darkMode ? 'text-text' : 'text-text-light'}
              text-[18px] font-medium cursor-pointer`}
              onClick={() => {
                if (link.link !== undefined) {
                  window.open(link.link, "_blank");
                }
              }}
            >
            <a href={`#${link.id}`}>
              {link.icon ? <FontAwesomeIcon icon={link.icon} size="lg" /> : link.title}
            </a>
            </li>
          ))}
          <li 
            className={`${darkMode ? 'text-text' : 'text-text-light'}`}
            onClick={() => toggleDarkMode(darkMode)}>
            <FontAwesomeIcon icon={faMoon} size="lg" />
          </li>
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? (darkMode ? close : close_black) : (darkMode ? menu : menu_black)} 
            alt='menu' 
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex' } p-6 ${darkMode ? 'black-gradient' : 'bg-gradient-to-l from-[#E9ECEF] to-white'} absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li 
                  key={link.id} 
                  className={`${darkMode ? 'text-text' : 'text-text-light'}
                  font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    if (link.link !== undefined) {
                      window.open(link.link, "_blank");
                    } else {
                      setToggle(!toggle);
                    }
                  }}
                >
                <a href={`#${link.id}`}>
                  {link.icon ? <FontAwesomeIcon icon={link.icon} size="lg" /> : link.title}
                </a>
                </li>
              ))}
              <li 
                className={`${darkMode ? 'text-text' : 'text-text-light'}`}
                onClick={() => toggleDarkMode(darkMode)}>
                <FontAwesomeIcon icon={faMoon} size="lg" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar