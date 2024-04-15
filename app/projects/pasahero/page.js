import React from 'react';
import Navbar from '../../mainComponents/Navbar.js'
import Footer from '../../mainComponents/Footer.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBusSimple } from '@fortawesome/free-solid-svg-icons';


function page() {
  const busIcon = <FontAwesomeIcon icon={faBusSimple} className="w-20 h-20 lg:w-40 lg:h-40"/>
  return (
    <div className='bg-yellow text-[#523231]'>
        <div className="bg-red w-full ">
            <Navbar color="bg-[#FFEECC]" />
        </div>
        <div className='px-5 h-screen justify-center items-center flex bg-gradient-to-b from-[#FFEECC] to-[#F9F5F6] from-20% to-90%'>
            <div className='flex flex-col text-center items-center justify-center'>
                {busIcon}
                <div className='font-bold text-6xl quicksand py-1 lg:text-7xl'>
                    PasaHero
                </div>
                <div className='font-semibold text-xl quicksand lg:text-2xl '>
                    Navigate your commute, share your route.
                </div>
                <div className='text-left py-5 text-[#804f4d9a]'>
                    <b>Methods: </b>    Wireframing, Prototyping, Needfinding, Thematic Analysis <br/>
                    <b>Tools: </b>      Canva, Figma, Miro, Google Forms
                </div>
                <div className='pt-3'>
                    <a href="#body"><button className='btn quicksand btn-outline border-[#804F4D] text-[#804F4D] hover:bg-[#804F4D] hover:text-[#F9F5F6] hover:border-[#804F4D]'>read more</button></a>
                </div>
            </div>
        </div>
        <div className='bg-[#F9F5F6] px-7 lg:px-64'>
            <div className='pt-20 pb-10' id="body">
                <div className='quicksand items-center justify-center flex flex-col bg-[#FFEECC] rounded-xl '>
                    <div className='text-center text-5xl quicksand font-bold pt-10 pb-5'>
                        The Problem
                    </div>
                    <div className='text-justify quicksand font-medium text-3xl px-10 pb-10'>
                    <b>Public transportation in Metro Manila</b>, particularly the bus and jeepney routes, 
                    can be <b>overwhelming</b> for newcomers. How can we assist them by providing <b>accurate 
                    route information</b> and helping them <b>plan their commute</b> according to their specific needs?
                    </div>
                </div>
            </div>
            <div className='flex text-center'>
                    <div className='flex-1'>
                        <div className='text-4xl quicksand font-bold'>
                            Goal
                        </div>
                        <p className='text-justify text-2xl font-regular source-sans-3 py-2'>
                        Create an <b>application</b> for commuters to <b>plan and share personalized routes</b> within Metro 
                        Manila using current information, <b>get news and reports</b> about surrounding routes, and 
                        <b>download routes</b> for offline use.
                        </p>
                    </div>
                    <div className='flex-1 px-10'>
                        <div className='text-4xl quicksand font-bold'>
                            Role
                        </div>
                        <p className='text-justify text-2xl font-regular source-sans-3 py-2'>
                        As the lead designer, I created the <b>visual design</b> and <b>user interactions</b>, including the  
                        <b> logo</b>, <b>wireframes</b>, and <b>prototypes</b>. I also participated in the needfinding study and 
                        conducted user interviews.
                        </p>
                    </div>
            </div>
            <div>
                <div className='text-5xl quicksand font-bold pt-24'>
                    The Design Process
                </div>
                <div className='w-full flex justify-center items-center pt-10'>
                    <img src="../../../images/pasahero/design-process.png" className='w-5/6'/>
                </div>
                <div className='xl:flex pt-24'>
                    <div className='flex-1'>
                        <div className='text-4xl quicksand font-bold pb-2'>
                        Needfinding
                        </div>
                        <div className='text-2xl source-sans-3 font-bold'>
                        Who are we working for?
                        </div>
                        <div className='source-sans-3 text-lg text-justify'>
                        A <u>user research</u> was conducted, where survey and interviews were performed among <u>14
                        participants</u>, with ages varying from 18 to 55 years old and above. These individuals 
                        are those <u>who have an experience in using the public transportation</u> in Metro Manila 
                        and are <u>college students</u> and <u>working professionals</u>.
                        </div>
                        <div className='text-2xl source-sans-3 font-bold pt-3'>
                            How did we analyze?
                        </div>
                        <div className='source-sans-3 text-lg text-justify'>
                        The surveys were analyzed through <u>quantitative analysis</u>, while the surveys were synthesized 
                        to perform <u>thematic analysis</u> and identify the main features that PasaHero could focus 
                        on.
                        </div>
                    </div>
                    <div>
                        <div className='flex items-center justify-center py-5 xl:py-0'>
                            <img src="../../../images/pasahero/results.png" className='w-3/5'/>
                        </div>
                    </div>
                </div>
                <div className='text-4xl quicksand font-bold pb-2 pt-10'>
                    Designing
                </div>
                <div className='text-2xl source-sans-3 font-bold pt-3'>
                    Lofi and Midfi Design
                </div>
                <div className='source-sans-3 text-lg text-justify'>
                    The design process was done in several iterations, and our group was divided 
                    according to the features to be implemented. In my case, I initially focused 
                    on the forum section of the application, where the user can navigate freely 
                    through the posted routes and news. Other core information for the different 
                    features was done by my groupmates, which can be seen in the Lofi wireframe below.
                </div>
                <div className='py-10 flex'>
                    <div className='flex items-center justify-center xl:py-0'>
                        <img src="../../../images/pasahero/lofi-preview.png" className='w-full'/>
                    </div>
                </div>
                <div className='source-sans-3 text-lg text-justify'>
                After the first iteration, we immediately finalized the steps for every feature in 
                the application. After that, I started formulating the application design system. 
                Then, the midfi feature was implemented and tested.
                </div>
                <div className='py-10 flex'>
                    <div className='flex items-center justify-center xl:py-0'>
                        <img src="../../../images/pasahero/midfi-preview.png" className='w-full'/>
                    </div>
                </div>
                <div className='text-2xl source-sans-3 font-bold pt-3'>
                    Hifi Design and Prototype
                </div>
                <div className='source-sans-3 text-lg text-justify pb-5'>
                In the final prototype of PasaHero, we decided to add the tutorial part at the beginning 
                of the application to help our users navigate through the application smoothly. Moreover, 
                the design per wireframe was finalized and prototyped, and I mainly did it. My other 
                groupmates assisted me by following the design that I have provided for them.
                </div>
                <div className='h-screen'>
                  <iframe className="w-full h-full" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FaWjgyUScRvZJFJVpY8sRyq%2FPasaHERO%3Ftype%3Ddesign%26node-id%3D597-21908%26t%3DgaqOoEQwtELfdlrE-1%26scaling%3Dscale-down%26page-id%3D597%253A17170%26starting-point-node-id%3D597%253A21908%26show-proto-sidebar%3D1%26mode%3Ddesign" allowfullscreen></iframe>
                </div>
                <div className='quicksand text-center font-bold text-2xl h-40 items-center justify-center flex bg-[#FFEECC] rounded-xl mx-10 my-10'>
                    “Prioritize serving the people, not own desires”
                </div>
                <div className='text-4xl quicksand font-bold pb-2 pt-10'>
                    Testing
                </div>
                <div className='text-2xl source-sans-3 font-bold pt-3'>
                    STHCIUX Exhibit
                </div>
                <div className='source-sans-3 text-lg text-justify'>
                The final prototype was presented in an exhibit and was showcased to various students 
                and professors. This was conducted on December 7, 2023, at the first floor of Gokongwei 
                building at De La Salle University.
                </div>
                <div className='py-5 flex'>
                    <div className='flex items-center justify-center xl:py-0'>
                        <img src="../../../images/pasahero/exhibit.jpg" className='w-full'/>
                    </div>
                </div>
                <div className='text-4xl quicksand font-bold pb-2 pt-10'>
                    Refining
                </div>
                <div className='text-2xl source-sans-3 font-bold pt-3'>
                    KEY TAKEAWAYS
                </div>
                <div className='flex'>
                    <div className='flex-1 source-sans-3 text-lg text-justify pr-5'>
                    PasaHero was my second most significant project in Figma and <u>my first mobile application design</u>. 
                    It definitely was a <u>big learning curve</u> for me, mainly because of the prototyping 
                    feature that we created. During this project, I learned how to <u>utilize variables and components in figma</u>,  
                    to make the prototype more realistic and interactive, ensuring that the users stay engaged and 
                    the application can deliver its features.
                    </div>
                    <div className='flex-1 source-sans-3 text-lg text-justify'>
                    As cliche as it sounds, conducting a study like this takes a lot of understanding and 
                    empathy to the people that you want to work for. I learned that <u>by putting my own feet
                    in their shoes</u> , it will help me <u>navigate through their pain points</u> and not only solve 
                    the symptoms of the problem, but the <u>root cause</u> of the problem. With that, solutions 
                    will come to a breeze.
                    </div>
                </div>
                <div className='quicksand text-center font-bold text-2xl h-40 items-center justify-center flex bg-[#FFEECC] rounded-xl mx-10 my-10'>
                    “It will never be perfect, just good enough.”
                </div>
                <div className='text-2xl source-sans-3 font-bold pt-3'>
                    FUTURE STEPS
                </div>
                <div className='flex source-sans-3 text-lg text-justify'>
                Since the whole project was only conducted only in approximately 3 and a half 
                months (one term), we had to work efficiently to complete the project. But, the fact is, the project 
                will never be completed. I believe that having the mindset of making the products as “good 
                enough” allows me to ground myself more with the process, because of the infinite 
                capabilities of iterating the design through and through to make it a much better version 
                than the previous one. If we get stuck on making things perfect, we will never progress 
                with it.
                With that, the future of PasaHero is bright. I am planning to redesign the overall design 
                system of the application and make the user flows more efficient and straight to the point. I also want to make the tutorial better and create more to help the user navigate through the whole application, and not only in the route creation part. Lastly, I would also like to improve the offline mode better and make it more intuitive.
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
