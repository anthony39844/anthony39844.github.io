import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className='mt-4'>
        <h2 className={styles.sectionHeadText}>
          Hi! I'm Anthony Zheng!
        </h2>
      </motion.div>
      <motion.p 
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I'm a software engineer interested in all parts of applied AI projects. I'm currently based in NYC, working on infrastructure at Jane Street.

        picture of me in sunglasses
        Now, I'm finishing up my Computer Science degree at the University of Minnesota. I've also competed in (and won!) a lot of hackathons and was in the top 50 hackers globally in 2023.

        After high school, I took a gap year to work full time at Fiveable, a virtual studying platform with 3M+ users. I've also worked at Robinhood and Art of Problem Solving since.

        Feel free to check out the projects I’ve built or my résumé.
      </motion.p>
    </>
  )
}

export default SectionWrapper(About, "about")