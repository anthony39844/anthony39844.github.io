import {useState, useRef, useContext} from 'react'
import {motion} from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import DarkModeContext from '../hoc/DarkModeContext';

const Contact = () => {
  const { darkMode } = useContext(DarkModeContext);

  const formRef = useRef()
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {}

  const handleSubmit = (e) => {}

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className={`flex-1 ${darkMode ? 'bg-tertiary' : 'bg-tertiary-light'} p-8 rounded-2xl`}
      >
        <h3 className={`${darkMode ? 'text-white' : 'text-secondary-light'} font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>
          Contact
        </h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className={`${darkMode ? 'text-white' : 'text-secondary-light'} font-medium mb-4`}>
              Your Name
            </span>
            <input 
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder='What is your name?'
              className={`${darkMode ? 'bg-primary placeholder:text-secondary text-white' : 'bg-primary-light placeholder: text-secondary-light text-secondary-light'} 
              py-4 px-6 rounded-lg outlined-none border-none font-medium`}
            />
          </label>
          <label className='flex flex-col'>
            <span className={`${darkMode ? 'text-white' : 'text-secondary-light'} font-medium mb-4`}>
              Your Email
            </span>
            <input 
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder='What is your email?'
              className={`${darkMode ? 'bg-primary placeholder:text-secondary text-white' : 'bg-primary-light placeholder: text-secondary-light text-secondary-light'} 
              py-4 px-6 rounded-lg outlined-none border-none font-medium`}
            />
          </label>
          <label className='flex flex-col'>
            <span className={`${darkMode ? 'text-white' : 'text-secondary-light'} font-medium mb-4`}>
              Your Message
            </span>
            <textarea 
              rows="7"
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='What do you want to say?'
              className={`${darkMode ? 'bg-primary placeholder:text-secondary text-white' : 'bg-primary-light placeholder: text-secondary-light text-secondary-light'} 
              py-4 px-6 rounded-lg outlined-none border-none font-medium`}
            />
          </label>

          <button 
            type='submit'
            className={`${darkMode ? 'bg-primary shadow-primary' : 'bg-secondary-light shadow-secondary-light'} py-3 px-8 outline-none w-fit text-white font-bold shadow-md rounded-xl`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")