import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = ({color}) => {
    const linkedIn = <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5"/>
    const email = <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5"/>
    const github = <FontAwesomeIcon icon={faGithub} className="w-5 h-5"/>

    return (
        <footer className={`source-sans-3 py-2 w-full text-center ${color} text-[#523231]`}>
        Designed and coded by Zhoe Aeris
        <br />
        <ul className='flex justify-center py-1'>
            <li className='text-[#9F6361] px-1'><a href="https://www.linkedin.com/in/zhoeaeris/" target="_blank">{linkedIn}</a></li>
            <li className='text-[#9F6361] px-1'><a href="/" target="_blank">{email}</a></li>
            <li className='text-[#9F6361] px-1'><a href="https://www.github.com/zhoexaeris/" target="_blank">{github}</a></li>
        </ul>
        </footer>
    )
}

export default Footer