"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub }  from '@fortawesome/free-brands-svg-icons';
import { faLinkedin }  from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

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
  const githubIcon = <FontAwesomeIcon icon={faGithub} className="w-9 h-9"/>
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} className="w-9 h-9"/>
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} className="w-9 h-9"/>
  return (
    <section className={`flex flex-col flex-wrap w-full items-center py-10 h-screen sm:flex-row lg:px-64 text-[#D88080]`}>
      <div className='sm:flex-1 w-full items-center text-center'>
        <div className='quicksand font-extrabold text-5xl px-5 lg:text-left lg:px-0'>
            Hi, I am <span className='text-[#9F6361]'>Zhoe Aeris</span>
        </div> 
        <div className='text-xl lg:text-left pt-2'>
            <Tagline />
        </div>
        <div className='sm:py-9 pt-5'>
            <ul className='text-center font-semibold items-center justify-center flex'>
                    <li className='pl-5'><a href={"/" } target="_blank">{githubIcon}</a></li>
                    <li className='pl-5'><a href={"/" } target="_blank">{linkedinIcon}</a></li>
                    <li className='pl-5'><a href={"/" } target="_blank">{emailIcon}</a></li>
            </ul>
        </div>
      </div>
      <div className='flex w-full items-center justify-center py-5 sm:flex-1 px-5'>
        <img src="images/me.jpg" className='w-64 rounded-full shadow-3xl lg:w-96'/>
      </div>
    </section>
  )
}

export default Header