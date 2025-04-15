import {useContext} from 'react'
import { SectionWrapper } from '/src/hoc'
import DarkModeContext from '/src/hoc/DarkModeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Contact = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className='xl:mt-12 flex flex-col justify-center items-center'>
      <div className='flex items-center'>
        <button
          className={`${darkMode ? 'text-text' : 'text-text-light'} px-2 py-2 rounded flex items-center`}
          onClick={() => {
            window.location.href = "mailto:ant39844@gmail.com";
          }}
        >
          <FontAwesomeIcon className="mr-3 text-[25px]" icon={faEnvelope} />
        <div className={`${darkMode ? 'text-text' : 'text-text-light'} hover:underline text-[16px]`}>
          ant39844@gmail.com
        </div>
        </button>
        <button
          className={`${darkMode ? 'text-text' : 'text-text-light'} px-4 py-2 rounded flex items-center`}
          onClick={() => {
            window.open("https://github.com/anthony39844", "_blank")
          }}
        >
          <FontAwesomeIcon className="text-[25px]" icon={faGithub} />
        </button>
        <button
          className={`${darkMode ? 'text-text' : 'text-text-light'} px-4 py-2 rounded flex items-center`}
          onClick={() => {
            window.open("https://www.linkedin.com/in/anthony39844/", "_blank")
          }}
        >
          <FontAwesomeIcon className="text-[25px]" icon={faLinkedin} />
        </button>
      </div>
      <div className={`${darkMode ? 'text-text' : 'text-text-light'} mt-5 flex md:text-[12px] text-[10px]`}>
        Made by Anthony Zheng | 2025 
      </div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")