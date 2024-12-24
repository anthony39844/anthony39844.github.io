import {useState, useRef, useContext} from 'react'
import {motion} from 'framer-motion'
import { SectionWrapper } from '/src/hoc'
import { slideIn } from '/src/utils/motion'
import DarkModeContext from '/src/hoc/DarkModeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className='xl:mt-12 xl:flex-row flex overflow-hidden items-center justify-center'>
        <div className='flex items-center justify-center'>
        <button
          className={`${darkMode ? 'text-text' : 'text-text-light'} px-4 py-2 rounded text-[25px]`}
          onClick={() => {
            window.location.href = "mailto:ant39844@gmail.com";
          }}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </button>
        <button
          className={`${darkMode ? 'text-text' : 'text-text-light'} px-4 py-2 rounded text-[25px]`}
          onClick={() => {
            window.open("https://github.com/anthony39844/portfolio", "_blank")
          }}
        >
          <FontAwesomeIcon icon={faGithub} />
        </button>
        </div>
        <div className={`${darkMode ? 'text-text' : 'text-text-light'}`}>
          Made by Anthony Zheng
        </div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")