import React from 'react'
import Navbar from '../mainComponents/Navbar.js'
import Footer from '../mainComponents/Footer.js'
import ProjectCard from './ProjectCard.js'
import Link from 'next/link';

function page() {
  return (
    <div className='bg-[#E7CBCB] px-5'>
        <div className="bg-red w-full ">
            <Navbar color="bg-[#E7CBCB]" />
        </div>
        <div className='lg:px-64 lg:h-screen h-full px-5 sm:px-16'>
            <div className="text-4xl font-bold quicksand text-[#9F6361] text-center sm:text-6xl sm:py-5">
                My Projects
            </div>
                <div className='py-5 flex justify-center items-center w-full sm:flex-row'>
                    <div className='sm:flex sm:h-full sm:w-full rounded-lg '>
                        {projectCardData.map((project) => (
                            <Link href={project.link} key={project.id}> {/* Add key prop here */}
                                    <ProjectCard
                                        imgUrl={project.imgUrl}
                                        title={project.title}
                                        description={project.description}
                                        background={project.background}
                                        tags={project.tags}
                                    />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        <div>
            <Footer color="bg-[#E7CBCB]" />
        </div>
    </div>
  )
}

const projectCardData = [
    {
        id: 1,
        imgUrl:"/images/pasahero/card-mockup.png",
        title: "PasaHero",
        description: "An app that redefines Metro Manila’s commuting experience, making daily journeys stress-free and efficient.",
        tags: ["Transportation", "UI/UX Design"],
        link: "projects/pasahero",
    },
    {
        id: 2,
        imgUrl:"./images/nurselink/card-mockup.png",
        title: "Nurselink",
        description: "Connecting healthcare professionals with a specialized networking platform tailored to their needs.",
        tags: ["Front-end", "Healthcare", "UI Design"],
        link: "projects/nurselink",
    },
    {
        id: 3,
        imgUrl:"./images/spikezone/card-mockup.png",
        title: "SpikeZone",
        description: "A recreation of Valorant Forums, in partial fulfillment for CSSWENG A.Y. 2022 - 2023.",
        tags: ["Full-stack", "Gaming"],
        link: "projects/spikezone",
    }
]
export default page
