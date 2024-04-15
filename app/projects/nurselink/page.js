import React from 'react'
import Navbar from '../../mainComponents/Navbar.js'
import Footer from '../../mainComponents/Footer.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeartPulse } from '@fortawesome/free-solid-svg-icons';

function page() {
  const heartIcon = <FontAwesomeIcon icon={faHeartPulse} className="w-40 h-40"/>
  return (
    <div className='text-[#523231]'>
      <div className="bg-red w-full ">
            <Navbar color="bg-[#beebf0]" />
        </div>
        <div className='px-5 h-screen justify-center items-center flex bg-gradient-to-b from-[#beebf0] to-[#F9F5F6] from-20% to-90%'>
            <div className='flex flex-col text-center items-center justify-center'>
                {heartIcon}
                <div className='font-bold text-6xl quicksand py-1 lg:text-7xl'>
                    Nurselink
                </div>
                <div className='font-semibold text-xl quicksand lg:text-2xl '>
                    Connecting valuable healthcare professionals.
                </div>
                <div className='text-left py-5 text-[#804f4d9a]'>
                    <b>Methods: </b>    Wireframing, Agile, MERN Stack, Vite <br/>
                    <b>Tools: </b>      Figma, ClickUp, HTML, CSS (Tailwind), Javascript (MongoDB, Express, React, Node)
                </div>
                <div className='pt-3'>
                    <a href="#body"><button className='btn quicksand btn-outline border-[#804F4D] text-[#804F4D] hover:bg-[#804F4D] hover:text-[#F9F5F6] hover:border-[#804F4D]'>read more</button></a>
                </div>
            </div>
        </div>
        <div className='bg-[#F9F5F6] px-7 lg:px-64'>
            <div className='pt-10 pb-10' id="body">
                <div className='quicksand items-center justify-center flex flex-col bg-[#beebf0] rounded-xl'>
                    <div className='text-center xl:text-5xl quicksand font-bold pt-10 pb-5 text-4xl'>
                        The Problem
                    </div>
                    <div className='text-justify quicksand font-medium lg:text-3xl px-10 pb-10 text-xl'>
                    The Philippines is known for producing many healthcare professionals, especially nurses. A large number 
                    of them look for opportunities overseas, resulting in fierce competition in the healthcare industry, 
                    both domestically and internationally. However, there is no dedicated job search and resume listing 
                    platform for nurses in the Philippines.
                    </div>
                </div>
            </div>
            <div className='xl:flex text-center'>
                    <div className='flex-1 px-10'>
                        <div className='lg:text-4xl quicksand font-bold text-3xl'>
                            Goal
                        </div>
                        <p className='text-justify text-xl font-regular source-sans-3 py-2'>
                        Provide a centralized platform designed for Filipino nurses to help them showcase their 
                        experiences, gain recognition from hiring institutions, verify their credentials, increase 
                        their visibility to potential employers, and connect with other trusted healthcare professionals 
                        around the world.
                        </p>
                    </div>
                    <div className='flex-1 px-10 py-10 xl:py-0'>
                        <div className='lg:text-4xl quicksand font-bold text-3xl'>
                            Role
                        </div>
                        <p className='text-justify text-xl font-regular source-sans-3 py-2'>
                        I was one of the two lead designers of the group. I was responsible for the overall design system 
                        of the application as well as wireframing the pages. I was also a front-end developer and an 
                        assistant back-end developer.
                        </p>
                    </div>
            </div>
            <div>
                <div className='text-5xl quicksand font-bold pt-24'>
                    The Idea
                </div>
                <div className='text-2xl source-sans-3 font-bold pt-3'>
                    How did this project come about?
                </div>
                <div className='source-sans-3 text-lg text-justify'>
                NurseLink is a specialized networking platform designed to connect healthcare professionals globally. It 
                was a project for my Software Engineering course during my junior year of college. Collaborating with 
                eight other members and an external client based in New York City, Nurselink was created to allow nurses 
                in the Philippines to share their unique experiences in the field, get new job opportunities, and connect 
                with their peers.
                </div>
                <div className='text-5xl quicksand font-bold pt-24'>
                    The Process
                </div>
                <div className='source-sans-3 text-lg text-justify pt-3'>
                Following Agile methodology, we completed the project in four sprints, each conducted every two weeks.
                </div>
                <div className='w-full flex justify-center items-center pt-10'>
                    <img src="../../../images/nurselink/process.png" className='w-5/6'/>
                </div>
                <div className='text-2xl source-sans-3 font-bold pt-3'>
                    Sprint 0
                </div>
                <div className='source-sans-3 text-lg text-justify pt-3'>
                We met with the product owner and established the key features of Nurselink. Following that, a design 
                exploration was conducted by me and my co-designer.
                </div>
                <div className='w-full flex justify-center items-center pt-10'>
                    <img src="../../../images/nurselink/design-exploration.png" className='w-5/6'/>
                </div>
                <div className='source-sans-3 text-lg text-justify py-10'>
                Then, we created our initial prototype that were sent out along with our user feedback survey. 
                There were 15 respondents, who are studying/working in the health industry. This prototype featured 
                the main profile of the nurse only.
                </div>
                <div className='h-screen'>
                  <iframe className="w-full h-full" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FyjtMdyAcEpgWO0Y9ZVwIoe%2FNurselink-Lofi-(Public)%3Ftype%3Ddesign%26node-id%3D0%253A1%26mode%3Ddesign%26t%3DclGUWRdMqlcshwWS-1" allowfullscreen></iframe>
                </div>
                <div className='text-2xl source-sans-3 font-bold pt-10'>
                    Sprint 1
                </div>
                <div className='source-sans-3 text-lg text-justify pt-3'>
                For Sprint 1, we focused on implementing all the feedback we received from the survey. From the single 
                page lofi wireframe, we expanded it to include most of the pages required for the whole application.
                </div>
                <div className='h-screen py-5'>
                  <iframe className="w-full h-full" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FgYYYtOafHXmxdP4pQpcOnN%2FNurselink-Midfi-(Public)%3Ftype%3Ddesign%26node-id%3D1%253A2282%26mode%3Ddesign%26t%3DclGUWRdMqlcshwWS-1" allowfullscreen></iframe>
                </div>
                <div className='text-2xl source-sans-3 font-bold pt-10'>
                    Sprint 2
                </div>
                <div className='source-sans-3 text-lg text-justify pt-3'>
                The final prototype for the website application was finalized. The codebase was also implemented by our 
                lead developer. To allow collaboration, we decided to use Github and utilize git version controls.
                </div>
                <div className='h-screen py-5'>
                  <iframe className="w-full h-full" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FXfVYYJQk9qLln54iGcE9Vo%2FNurselink-Hifi-(Public)%3Ftype%3Ddesign%26node-id%3D1%253A2%26mode%3Ddesign%26t%3DclGUWRdMqlcshwWS-1" allowfullscreen></iframe>
                </div>
                <div className='text-2xl source-sans-3 font-bold pt-10'>
                    Sprint 3 and 4
                </div>
                <div className='source-sans-3 text-lg text-justify pt-3'>
                I worked on two pages. First is the profile page for the nurses and the recommendation page for the nurses.
                <div className='flex'>
                    <div className='flex-1 px-5'>
                        <div className='font-bold text-center pt-5'>Profile Page</div>
                        <p>
                        I made it functional by debugging the side navigation buttons. Then, I added the features to show 
                        the information for the profile. If the profile page is being viewed by other users, if the 
                        profile does not contain any information, it will show an empty card. If not, it will show the 
                        information. This was done using react components. The progressBar for verification was also 
                        redone by me to follow the intended design from the wireframe.I also added the feature to show the 
                        resume card on the side bar if it exists or not.
                        </p>
                    </div>
                    <div className='flex-1 px-5'>
                    <div className='font-bold text-center pt-5'>Recommendations Page</div>
                        <p>
                        I updated the nurseModel to have information for recommendations. I also added the 
                        recommendationsSchema, and updated the specific controller and routes to make the 
                        recommendations page functional. I also created a modal to allow users to add a 
                        recommendation for other nurses.
                        </p>
                    </div>
                </div>
                </div>
                <div className='text-2xl source-sans-3 font-bold pt-10'>
                    Design System
                </div>
                <div className='source-sans-3 text-lg text-justify pt-3'>
                    During Sprint 3 and 4, I also completed the design system of the application. The logo was created by
                    my co-designer, while the rest of the design system was lead by me.
                </div>
                <div className='w-full flex justify-center items-center pt-10'>
                    <img src="../../../images/nurselink/ds-1.png" className='w-5/6'/>
                </div>
                <div className='w-full flex justify-center items-center pt-2'>
                    <img src="../../../images/nurselink/ds-2.png" className='w-5/6'/>
                </div>
                <div className='text-5xl quicksand font-bold pt-24'>
                    Reflection
                </div>
                <div className='text-2xl source-sans-3 font-bold pt-3'>
                    Key Takeaways
                </div>
                <div className='source-sans-3 text-lg text-justify pt-3'>
                Nurselink was my first ever Figma project, so I learned so much about wireframing and prototyping.
                I fell inlove with it, but there were also setbacks that I encountered through the process. One of my 
                important realizations from this project is that when working for other people, especially for a client, 
                it is very important to take note of their goals, translate the design well for the development team, 
                and make each task achievable. Putting the user finding results on top is also very important because 
                they will be the one using the application.
                </div>
                <div className='source-sans-3 text-lg text-justify pt-3'>
                Moreover, a design will never ever be final. There will always be a room for new features, updates, 
                and ideas. There is no final output. As a designer, it takes patience to implement these. With that, 
                I learned that it is also important to reach out to others, especially for designs, and incorporate 
                them to make a design successful. It really does takes a village.
                </div>
                <div className='text-2xl source-sans-3 font-bold pt-10'>
                    Future Steps
                </div>
                <div className='source-sans-3 text-lg text-justify pt-3'>
                My own plans for this project is to prototype the wireframe in the figma. Since they are all static 
                designs, I would love to explore how it would look like if the website prototype is complete to simulate 
                all the key features of Nurselink. I am also planning to revamp the design and conduct user feedback for 
                it.
                </div>
            </div>
        </div>
        <div className='pt-12 bg-[#F9F5F6]'>
            <Footer color="bg-[#F9F5F6]" />
        </div>
    </div>
  )
}

export default page
