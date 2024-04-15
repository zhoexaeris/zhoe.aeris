import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../../mainComponents/Navbar.js'
import Footer from '../../mainComponents/Footer.js'

function page() {
  const gamepadIcon = <FontAwesomeIcon icon={faGamepad} className="w-40 h-40"/>
  const github = <FontAwesomeIcon icon={faGithub} className="w-5 h-5"/>
  return (
    <div className='text-[#523231]'>
        <div className="bg-red w-full ">
            <Navbar color="bg-red" />
        </div>
        <div className='px-5 h-screen justify-center items-center flex bg-gradient-to-b from-red to-[#F9F5F6] from-20% to-90%'>
            <div className='flex flex-col text-center items-center justify-center'>
                {gamepadIcon}
                <div className='font-bold text-6xl quicksand py-1 lg:text-7xl'>
                    Spikezone
                </div>
                <div className='font-semibold text-xl quicksand lg:text-2xl '>
                    Recreating Valorant Forums from scratch.
                </div>
                <div className='text-left py-5 text-[#804f4d9a]'>
                    <b>Methods: </b>    Implement CRUD and follow Client-Server Architecture <br/>
                    <b>Tools: </b>      HTML, CSS, JavaScript, MongoDB, Express, NodeJS, JSON, Handlebars, Mongoose
                </div>
                <div className='pt-3'>
                    <a href="#body"><button className='btn quicksand btn-outline border-[#804F4D] text-[#804F4D] hover:bg-[#804F4D] hover:text-[#F9F5F6] hover:border-[#804F4D]'>read more</button></a>
                </div>
            </div>
            
            </div>
            <div className='bg-[#F9F5F6] px-7 lg:px-64' id="body">
            <div className='xl:flex text-center'>
                    <div className='flex-1 px-10'>
                        <div className='lg:text-4xl quicksand font-bold text-3xl'>
                            Overview
                        </div>
                        <p className='text-justify text-xl font-regular source-sans-3 py-2'>
                        SpikeZone is a recreated website based on <a href="https://valorantforums.com/">Valorant Forums</a>. 
                        The site was used as an inspiration to practice our skills in HTML, CSS, and JavaScript. 
                        We also followed the standard CRUD operations and used password hashing for users.
                        </p>
                    </div>
                    <div className='flex-1 px-10 py-10 xl:py-0'>
                        <div className='lg:text-4xl quicksand font-bold text-3xl'>
                            Role
                        </div>
                        <p className='text-justify text-xl font-regular source-sans-3 py-2'>
                        I was the lead front-end developer and assistant back-end developer to a group of four.
                        </p>
                    </div>
            </div>
            <div className='w-full flex flex-col justify-center items-center h-screen pt-10'>
                    <img src="../../../images/spikezone/preview.png" className='w-4/5'/>
                    <div className='flex-1'>
                        <a href="https://valorantforum.onrender.com/" target="_blank"><button className='btn quicksand btn-outline border-[#804F4D] text-[#804F4D] hover:bg-[#804F4D] hover:text-[#F9F5F6] hover:border-[#804F4D] mr-5'>visit page</button></a>
                        <a href="https://github.com/axsulit/ccapdev_mco" target="_blank"><button className='btn quicksand btn-outline border-[#804F4D] text-[#804F4D] hover:bg-[#804F4D] hover:text-[#F9F5F6] hover:border-[#804F4D]'>view on {github}</button></a>
                    </div>
            </div>
            <div className='text-4xl quicksand font-bold pb-2 pt-10'>
                My Contributions
            </div>
            <div className='xl:flex'>
                    <div className='flex-1 px-10'>
                        <div className='text-2xl source-sans-3 font-bold pt-3'>
                            Front-end
                        </div>
                        <div>
                            For the front-end of the application, I coded the following features:
                                <ul className='list-disc pl-12'>
                                    <li className=''>Navigation bar</li>
                                    <li className=''>Writing and displaying individual posts</li>
                                    <li className=''>Changing profile picture</li>
                                    <li className=''>Sign-in and Log-in</li>
                                    <li className=''>Homepage display</li>
                                    <li className=''>Profile page display</li>
                                </ul>
                        </div>
                    </div>
                    <div className='flex-1 px-10 py-10 xl:py-0'>
                        <div className='text-2xl source-sans-3 font-bold pt-3'>
                            Back-end
                        </div>
                        <div>
                            For the back-end of the application, I coded the following features:
                                <ul className='list-disc pl-12'>
                                    <li className=''>Password hashing</li>
                                    <li className=''>User authentication for login</li>
                                    <li className=''>Database cloud connection</li>
                                    <li className=''>Changing profile picture</li>
                                    <li className=''>Website Deployment</li>
                                </ul>
                        </div>
                    </div>
            </div>
            <div className='text-4xl quicksand font-bold pb-2 pt-10'>
                Key Takeaways
            </div>
            <div className='source-sans-3 text-lg text-justify'>
                With this project, we were not told about any development methods such as Agile. Thus, our process for 
                creating the website was all over the place. This made me realize that creating a full-stack website from 
                scratch takes a lot of planning and effort. This was also my first time working with a larger group of 
                people, so I realized that communicating constantly and effectively is very important, especially when 
                pushing features in the codebase. With that, we can ask and answer questions immediately and go through 
                the process with clear understanding and develop an efficient workflow.
            </div>
        </div>
        <div className='pt-12 bg-[#F9F5F6]'>
            <Footer color="bg-[#F9F5F6]" />
        </div>
    </div>
  )
}

export default page
