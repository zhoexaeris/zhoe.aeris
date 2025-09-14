import React from 'react'
import Navbar from '../mainComponents/Navbar.js'
import Footer from '../mainComponents/Footer.js'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5 }  from '@fortawesome/free-brands-svg-icons';
import { faCss3Alt }  from '@fortawesome/free-brands-svg-icons';
import { faNodeJs }  from '@fortawesome/free-brands-svg-icons';
import { faReact }  from '@fortawesome/free-brands-svg-icons';
import { faPython }  from '@fortawesome/free-brands-svg-icons';
import { faJava }  from '@fortawesome/free-brands-svg-icons';
import { faJs }  from '@fortawesome/free-brands-svg-icons';

function page() {
    const htmlIcon = <FontAwesomeIcon icon={faHtml5} className="w-9 h-9 pr-2"/>
    const cssIcon = <FontAwesomeIcon icon={faCss3Alt} className="w-9 h-9 pr-2"/>
    const nodeIcon = <FontAwesomeIcon icon={faNodeJs} className="w-9 h-9 pr-2"/>
    const reactIcon = <FontAwesomeIcon icon={faReact} className="w-9 h-9 pr-2"/>
    const pythonIcon = <FontAwesomeIcon icon={faPython} className="w-9 h-9 pr-2"/>
    const javaIcon = <FontAwesomeIcon icon={faJava} className="w-9 h-9 pr-2"/>
    const jsIcon = <FontAwesomeIcon icon={faJs} className="w-9 h-9 pr-2"/>
    const tailwindIcon = <img src='..\images\logos\tailwind-logo.png' className='w-9 h-9 pr-2'/>
    const nextIcon = <img src='..\images\logos\nextjs-logo.png' className='w-11 h-9 pr-2'/>
    const mysqlIcon = <img src='..\images\logos\mysql-logo.png' className='w-10 h-9 pr-2'/>
    const mongoIcon = <img src='..\images\logos\mongodb-logo.png' className='w-10 h-9 pr-1'/>
    
  return (
    <div className='text-[#523231]'>
        <div className="bg-light-pink w-full ">
            <Navbar color="bg-light-pink" />
        </div>
        <div className='px-5 h-screen justify-center items-center flex bg-gradient-to-b from-light-pink to-[#F9F5F6] from-20% to-90% lg:px-64'>
            <div className='flex flex-col text-center items-center justify-center'>
                <div className='text-2xl quicksand py-1 lg:text-3xl'>
                    I believe that <b>love is at the heart of all meaningful endeavors</b>. With that in mind, I am on a 
                    mission to <b>continue learning</b> and <b>growing</b> in this field - to serve the people with 
                    my <b>passion</b>, <b>creativity</b>, and <b>excellence</b>. 
                </div>
                <div className='text-2xl quicksand py-1 lg:text-3xl font-bold'>
                    ♡
                </div>
            </div>
        </div>
        <div className='bg-[#F9F5F6] px-7 lg:px-64'>
            <div className='text-5xl quicksand font-bold pt-24 pb-5'>
                About Me
            </div>
            <div className='quicksand text-xl text-justify'>
            I am currently a junior in <b>De La Salle University - Manila</b>, pursuing the degree 
            of <b>BS Computer Science major in Software Technology</b>. The story all <b>began in 
            elementary</b> when I was first introduced to HTML and CSS to create our silly little websites. 
            It was <b>love at first code!</b> <br/> <br/>

            As my progressed through my education, I achieved notable success by securing <b>two gold medals in webpage design 
            contests</b> in high school. This greatly <b>inspired me</b> to take me where I am today. <br/> <br/>

            Currently, I am on the lookout for <b>internship opportunities</b> that will allow me to <b>further explore UI/UX and web 
            development</b>, and I am excited about the possibilities that lie ahead. If you know of any opportunities or just want
            to chat about all things tech, <span className='hover:text-red hover:cursor-pointer font-bold text-[#D88080] underline'>I would love to connect!</span>
            </div>
            <div className='text-5xl quicksand font-bold pt-24 pb-5'>
                Skills
            </div>
            <div className='grid grid-cols-4 gap-4 text-xl text-center items-center justify-center'>
                <div className='flex items-center justify-center'>{htmlIcon} HTML</div>
                <div className='flex items-center justify-center'>{cssIcon} CSS</div>
                <div className='flex items-center justify-center'>{tailwindIcon} Tailwind</div>
                <div className='flex items-center justify-center'>{jsIcon} JavaScript</div>
                <div className='flex items-center justify-center'>{nodeIcon} NodeJS</div>
                <div className='flex items-center justify-center'>{reactIcon} React</div>
                <div className='flex items-center justify-center'>{nextIcon} NextJS</div>
                <div className='flex items-center justify-center'>{pythonIcon} Python</div>
                <div className='flex items-center justify-center'>{javaIcon} Java</div>
                <div className='flex items-center justify-center'>{mysqlIcon} MySQL</div>
                <div className='flex items-center justify-center'>{mongoIcon} MongoDB</div>
            </div>
        </div>
        <div className='pt-24 bg-[#F9F5F6]'>
            <Footer color="bg-[#F9F5F6]" />
        </div>
    </div>
  )
}

export default page
