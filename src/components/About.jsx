import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <motion.div
      initial={{opacity: 0, x:200}}
      transition={{duration: 1}}
      whileInView={{opacity: 1, x:0}}
      viewport={{once: true}}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Toothshaper</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Let’s shape the future of dentistry together!</p>
      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={assets.about} alt="" className='w-full sm:w-1/2 max-w-lg'/>
        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
            <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>10+</p>
                    <p>Years of Expertise</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>125690</p>
                    <p>Cases Completed</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>60+</p>
                    <p>Happy Labs</p>
                </div>
                <div>
                    <p className='text-4xl font-medium text-gray-800'>9+</p>
                    <p>Ratings</p>
                </div>
            </div>
            <p className='my-10 max-w-lg'>At Toothshaper, we are passionate about revolutionizing dental design. With 7 years of experience and a commitment to excellence, we specialize in delivering precision-driven solutions tailored to the needs of dental labs across Europe.

Our expertise lies in crafting high-quality designs for crowns, bridges, implants, and more, blending cutting-edge technology with an artisan’s touch.

As a trusted partner, we value collaboration, innovation, and reliability, ensuring seamless outsourcing solutions that elevate your practice. </p>
            <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn more</button>
        </div>
      </div>
    </motion.div>
  )
}

export default About
