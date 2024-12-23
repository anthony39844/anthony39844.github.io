import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from "../constants"
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion"
import DarkModeContext from '../hoc/DarkModeContext';
import { useContext} from 'react'

const ExperienceCard = ({experience}) => {
  const { darkMode } = useContext(DarkModeContext);

  return ( <VerticalTimelineElement
    contentStyle={{background: darkMode ? '#1d1836' : '#DEE2E6', color: darkMode ? '#fff' : '#2f2f2f'}}
    contentArrowStyle={{borderRight: `7px solid ${darkMode ? '#232631' : '#DEE2E6'}`}}
    date={experience.date}
    iconStyle={{background: experience.iconBg}}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img 
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className={`${darkMode ? 'text-white' : 'text-secondary-light'} text-[24px] font-bold`}>
        {experience.title}
      </h3>
      <p className={`${darkMode ? 'text-secondary' : 'text-secondary-light'} text-[16px] font-semibold" style={{margin:0}}`}>{experience.company_name}</p>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li 
          key={`experience-point-${index}`}
          className={`${darkMode ? 'text-white' : 'text-secondary-light'} text-[14px] pl-1 tracking-wider`}
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)}

const Experience = () => {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <>
    <motion.div
      variants={textVariant()}
    >
      <h2 className={`${darkMode ? 'text-white' : 'text-secondary-light'} font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>
        Work Experience
      </h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline
        lineColor={`${darkMode ? 'white' : 'black'}`}>
        {experiences.map((experience, index) => (
          <ExperienceCard key={index} experience={experience} />
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')