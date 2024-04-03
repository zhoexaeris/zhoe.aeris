"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Tagline = () => {
  return (
     <TypeAnimation
      cursor={true}
      sequence={['An aspiring UI/UX Designer from De La Salle University Manila.', 1000]}
      repeat={Infinity}
      className='lg:text-left sm:pr-5'
    />
  )
}

const Header = ({color}) => {
  return (
    <section className={`flex flex-col flex-wrap w-full items-center py-10 h-screen sm:flex-row lg:px-64 text-[#D88080]`}>
      <div className='sm:flex-1 w-full items-center text-center'>
        <div className='quicksand font-extrabold text-5xl px-5 lg:text-left lg:px-0'>
            Hi, I am <span className='text-[#9F6361]'>Zhoe Aeris</span>
        </div> 
        <div className='text-xl lg:text-left'>
            <Tagline />
        </div>
      </div>
      <div className='flex w-full items-center justify-center py-5 sm:flex-1 px-5'>
        <img src="images/me.jpg" className='w-64 rounded-full shadow-3xl lg:w-96'/>
      </div>
    </section>
  )
}

export default Header