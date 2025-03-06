import DarkModeContext from '/src/hoc/DarkModeContext';
import { useContext} from 'react'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants';
import { motion } from 'framer-motion'
import { fadeIn } from '../utils/motion'

const TechIcon = ({name, icon, index}) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
    <motion.div  
      variants={fadeIn("right", "spring", index * 0.1, 1)}
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: "some" }}
      className='group relative flex flex-col justify-center items-center mb-5'>
      <div 
        className={`${darkMode ? 'bg-secondary' : 'bg-secondary-light'} 
          p-2 sm:w-24 sm:h-24 w-18 h-18 shadow-custom rounded-full flex justify-center items-center 
          hover:scale-115 transition-transform duration-200 ease-in-out group`}>
        <img className='sm:w-16 sm:h-16 w-10 h-10 ' src={icon}></img>
      </div>
      <div className={`${darkMode ? 'text-text' : 'text-text-light'} font-bold md:text-[16px] text-[12px] mt-3 rounded invisible group-hover:visible`}>
          {name}
      </div>
    </motion.div>
    </>
  )
}

const Tech = () => {
  return (
    <>
      <div className='grid xxs:grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 place-items-center'>
        {technologies.map((tech, i) => {
          return (
            <TechIcon key={`tech-${i}`} name={tech.name} icon={tech.icon} index={i}></TechIcon>
          )
        })}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")