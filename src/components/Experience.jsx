import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion"
import 'react-vertical-timeline-component/style.min.css'
import { experiences } from "/src/constants"
import { SectionWrapper } from "/src/hoc"
import { textVariant } from "/src/utils/motion"
import DarkModeContext from '/src/hoc/DarkModeContext';
import { useContext} from 'react'

const ExperienceCard = ({experience}) => {
  const { darkMode } = useContext(DarkModeContext);

  return ( <VerticalTimelineElement
    contentStyle={{background: darkMode ? '#495057' : '#DEE2E6', color: darkMode ? '#fff' : '#2f2f2f'}}
    contentArrowStyle={{borderRight: `7px solid ${darkMode ? '#495057' : '#DEE2E6'}`}}
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
      <h3 className={`${darkMode ? 'text-text' : 'text-text-light'} text-[24px] font-bold`}>
        {experience.company_name}
      </h3>
      <h4 className={`${darkMode ? 'text-text' : 'text-text-light'} text-[18px] font-semibold m-0`}>
        {experience.title} 
      </h4>
    </div>
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {experience.points.map((point, index) => (
        <li 
          key={`experience-point-${index}`}
          className={`${darkMode ? 'text-text' : 'text-text-light'} text-[14px] pl-1 tracking-wider`}
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
      <h2 className={`${darkMode ? 'text-text' : 'text-text-light'} font-black sm:text-[50px] xs:text-[40px] text-[30px]`}>
        Work
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