import { motion } from 'framer-motion'
import { github } from "/src/assets"
import { projects } from "/src/constants"
import { SectionWrapper } from '/src/hoc'
import { fadeIn, textVariant } from '/src/utils/motion'
import { useContext } from "react"
import DarkModeContext from '/src/hoc/DarkModeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLink } from '@fortawesome/free-solid-svg-icons';

const ProjectCard = ({index, name, description, tags, image, source_code_link, website_link}) => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <motion.div 
      variants={fadeIn("up", "spring", index * 0.1, 1)}
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: "some" }}
      className={`${darkMode ? 'bg-secondary' : 'bg-secondary-light'} p-5 rounded-2xl sm:w-[360px] w-full`}
    >
      <div className="relative w-full h-[230px]">
        <img  
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"/>
        <div className="absolute inset-0 flex justify-end m-3">
        {source_code_link !== undefined && (
          <div className='flex justify-center'>
            <div 
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 mr-2 rounded-full flex justify-center items-center cursor-pointer">
                <img 
                  src={github}
                  alt="github"
                  className="w-1/2 h-1/2 object-contain"
                />
            </div>
            {website_link && (
              <div 
                onClick={() => window.open(website_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                  <FontAwesomeIcon icon={faLink}/>
              </div>
            )}
          </div>
        )}
        </div>
      </div>

      <div className="mt-5">
        <h3 className={`${darkMode ? 'text-text' : 'text-text-light'} font-bold text-[24px]`}>{name}</h3>
        <ul className="mt-5 list-disc ml-5 space-y-2">
        {description.map((desc, index) => (
          <li 
            key={`description-point-${index}`}
            className={`${darkMode ? 'text-text' : 'text-text-light'} text-[14px] pl-1 tracking-wider`}
          >
            {desc}
          </li>
        ))}
      </ul>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p key={tag.name} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
    </motion.div>

  )
}


const Works = () => {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <>
    <motion.div
      variants={textVariant()}
      initial="hidden" 
      whileInView="show" 
      viewport={{ once: true, amount: "some"}}
    >
      <h2 className={`${darkMode ? 'text-text' : 'text-text-light'} font-black sm:text-[50px] xs:text-[40px] text-[30px]`}>
        Projects
      </h2>
    </motion.div>

    <div className="w-full flex">
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, amount: "some"}}
        className={`mt-3 ${darkMode ? 'text-text' : 'text-text-light'} text-[17px] max-w-3xl leading-[30px]`}
      >
        A few of my personal projects
      </motion.p>
    </div>
    <div className="mt-20 flex flex-wrap gap-7">
      {projects.map((project, index) => (
        <ProjectCard 
          key={`project-${index}`}
          index={index}
          {...project}
        />
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")