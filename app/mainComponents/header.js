"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Tagline = () => {
  return (
    <TypeAnimation
      cursor={true}
      sequence={['Zhoe Aeris', 1000,
                'a UI/UX Designer', 1000,
                'a Web Developer', 1000,
                'a Dog Lover', 1000]}
      repeat={Infinity}
    />
  )
}

const Header = ({color}) => {
  return (
    <section className={`flex flex-col flex-wrap w-full items-center py-10 h-screen`}>
      <div className='quicksand font-extrabold text-5xl w-full items-center text-center'>
        Hi, I am <span className='text-[#D88080]'>Zhoe Aeris!</span>
      </div>
      <div className='flex w-full items-center justify-center py-5'>
        <img src="images/me.jpg" className='w-64 rounded-full shadow-3xl'/>
      </div>
    </section>
  )
}

export default Header