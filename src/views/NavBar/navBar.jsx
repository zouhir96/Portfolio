import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

import { useState } from 'react';
import { FiMenu } from "react-icons/fi";

const ScrollLink = ({ to, smooth, duration, offset, children }) => {
    return (
        <Link
            to={to}
            smooth={smooth}
            duration={duration}
            offset={offset}
            className='cursor-pointer underline'
        >
            {children}
        </Link>
    );
};

const Links = () => {

    const links =  [
        { route: "hero", name: "Home" },
         { route: "about", name: "About" },
          { route: "portfolio", name: "Portfolio" },
           { route: "skills", name: "Skills" },
         ];

    return (
        <div className="flex flex-col md:flex-row gap-8 items-center">
            {links.map((link)=> 
                <ScrollLink to={link.route} smooth={true} duration={700} offset={-70} >{link.name}</ScrollLink>
            )}
            <RouterLink to="" className="border p-2 rounded-md px-4 border-[#3C5065]">Contact</RouterLink>
            <RouterLink to="" className="border p-2 rounded-md px-4 border-[#3C5065] text-white bg-[#3C5065]">Download Resume</RouterLink>
        </div>
    );
}

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-[#E7EFF7] z-10 flex justify-between md:items-center p-3">
            <img src="logo.png" alt="logo" className="h-8" />
            <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
                <Links></Links>
            </div>
            <button onClick={() => setIsOpen(!isOpen)} className="md:hidden h-8">
                <FiMenu className='h-10'/>
            </button>
        </nav>
    );
}

export default NavBar;
