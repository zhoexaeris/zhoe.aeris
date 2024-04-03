import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar }  from '@fortawesome/free-solid-svg-icons';

const Overview = ({color}) => {
    const starIcon = <FontAwesomeIcon icon={faStar} className="w-7 h-7"/>
    return (
        <section className={`w-full ${color} px-5 py-3 items-center text-xl quicksand sm:flex lg:px-64 text-[#9F6361]`}>
            <div className='w-full justify-center items-center text-center'>
                <div className='font-extrabold source-sans-3 text-3xl'>About Me</div>
                <div>I am currently a junior in De La Salle University - Manila, pursuing the degree of BS Computer Science major in Software Technology.</div>
                <div>I am on the lookout for internship opportunities that will allow me to further explore UI/UX and web development.</div>
            </div>
        </section>
    )
    {/* TODO: add a feature that scrolls down when Projects is clicked */}
}

export default Overview