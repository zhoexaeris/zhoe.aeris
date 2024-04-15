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
      sequence={['aspiring UI/UX Designer from De La Salle University Manila.', 2000]}
      repeat={Infinity}
      className='lg:text-left'
    />
  )
}

const Header = ({color}) => {
  const githubIcon = <FontAwesomeIcon icon={faGithub} className="w-9 h-9"/>
  const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} className="w-9 h-9"/>
  const emailIcon = <FontAwesomeIcon icon={faEnvelope} className="w-9 h-9"/>
  return (
    <section className={`flex flex-col flex-wrap w-full lg:h-screen items-center lg:flex-row lg:px-64 text-[#D88080]`}>
      <div className='lg:flex-1 w-full items-center text-center'>
        <div className='quicksand font-extrabold text-5xl lg:text-left lg:px-0'>
            Hi, I am <span className='text-[#9F6361]'>Zhoe Aeris</span>
        </div> 
        <div className='text-xl lg:text-left py-2'>
            An <Tagline />
        </div>
        <div className='lg:py-2 pt-2 opacity-0 animate-fade-in-delayed'>
            <ul className='font-semibold items-center justify-center lg:justify-start flex'>
                    <li className=''><a href={"https://www.linkedin.com/in/zhoeaeris/" } target="_blank">{linkedinIcon}</a></li>
                    <li className='pl-5'><a href={"mailto:zhoe.aeris@gmail.com" } target="_blank">{emailIcon}</a></li>
                    <li className='pl-5'><a href={"https://github.com/zhoexaeris" } target="_blank">{githubIcon}</a></li>
                    
            </ul>
        </div>
      </div>
      <div className='flex items-center justify-center py-5  lg:flex-2 lg:justify-end'>
        <img src="images/me.jpg" className='w-64 rounded-full shadow-3xl lg:w-96'/>
      </div>
    </section>
  )
}

export default Header