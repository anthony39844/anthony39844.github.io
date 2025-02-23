import DarkModeContext from '/src/hoc/DarkModeContext';
import { useContext} from 'react'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants';
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '../utils/motion'

const TechIcon = ({name, icon, index}) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
    <motion.div  
      variants={fadeIn("right", "spring", index * 0.1, 1)}
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: "some" }}
      className='flex flex-col justify-center items-center mb-5'>
      <div 
        className={`${darkMode ? 'bg-secondary' : 'bg-secondary-light'} 
          p-4 w-24 h-24 shadow-custom rounded-full flex justify-center items-center `}>
        <img className='w-16 h-16' src={icon}></img>
      </div>
      <p className={`${darkMode ? 'text-text' : 'text-text-light'} font-black text-[16px] mt-5`}>{name}</p>
    </motion.div>
    </>
  )
}

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='grid grid-cols-6 gap-4 p-4 place-items-center'>
        {technologies.map((tech, i) => {
          return (
            <TechIcon key={`tech-${i}`} name={tech.name} icon={tech.icon} index={i}></TechIcon>
          )
        })}
      </motion.div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")