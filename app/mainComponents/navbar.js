import React from 'react'
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar }  from '@fortawesome/free-regular-svg-icons';

const Navbar = ({color}) => {
    const starIcon = <FontAwesomeIcon icon={faStar} className="w-7 h-7"/>
    return (
        <nav className={`w-full ${color} px-5 py-3 items-center text-xl quicksand sm:flex lg:px-64`}>
            <div className="flex justify-center w-full p-3 sm:flex-1">
                <Link href={"/"}>{starIcon}</Link>
            </div>
            <div className="flex justify-center w-full sm:justify-end">
                <ul className='text-center font-semibold sm:items-center flex'>
                    <li className='hover:underline'><Link href={"/"}>Projects</Link></li>
                    <li className='hover:underline pl-5'><Link href={"/about"}>About</Link></li>
                    <li className='pl-5 hover:underline'><a href={"https://drive.google.com/file/d/1J60ZguzLY0pJHCPzgJjatSVbvxgU9pGG/view?usp=sharing" } target="_blank">Resume</a></li>
                </ul>

            </div>
        </nav>
    )
    {/* TODO: add a feature that scrolls down when Projects is clicked */}
}

export default Navbar