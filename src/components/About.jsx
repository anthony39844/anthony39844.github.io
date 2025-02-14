import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'
import { useContext} from 'react'
import DarkModeContext from '../hoc/DarkModeContext'

const About = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
    <div className="flex flex-col md:flex-row">
      <div className='md:w-3/4 w-full'>
        <motion.div variants={textVariant()} className='mt-4'>
          <h2 className={`${darkMode ? 'text-text' : 'text-text-light'} font-black sm:text-[50px] xs:text-[40px] text-[30px]`}>
            Hi! I'm Anthony Zheng!
          </h2>
        </motion.div>
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className={`mt-4 ${darkMode ? 'text-text' : 'text-text-light'} text-[17px] max-w-3xl leading-[30px] font-light`}
        >
          I'm an aspiring software engineer interested in making software that will cheer up someones day. I am currently a student at the University of Minnesota Twin Cities, 
          finishing up my Computer Science degree. Some hobbies of mine include playing basketball, video games and eating out (big back). Feel free to check out 
          some of my projects and past work experience below! Also, here's my 
          <button
            className="text-[17 px] px-1"
            onClick={() => {
              window.open("/Resume.pdf", "_blank");
            }}
          >
          <span className="font-bold underline">resume</span>
          </button> 
          :)
        </motion.p>
      </div>
      <div className="mt-10 md:ml-10 flex justify-center items-center">
        <img className="w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 rounded-full object-cover border-[3px] border-black" src={"/selfie.png"}></img>
      </div>
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")