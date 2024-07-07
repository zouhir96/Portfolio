import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';

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
        <div className="md:flex hidden flex-row gap-8 items-center">
            {links.map((link)=> 
                <ScrollLink to={link.route} smooth={true} duration={700} offset={-30} >{link.name}</ScrollLink>
            )}
        </div>
    );
}

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-[#E7EFF7] z-10 shadow-md flex justify-between p-3">
            <img src="logo.png" alt="logo" className="h-8" />
            <div className={`flex md:gap-6 gap-2`}>
                <Links></Links>
                    <Link as={ScrollLink} to="contact" smooth={true} duration={700} offset={-30} className="border p-2 rounded-md px-4 border-[#3C5065] cursor-pointer">Contact</Link>
                    <a href="/cv_zouhir_rajdaoui.pdf" download className="border p-2 rounded-md px-4 border-[#3C5065] text-white bg-[#3C5065]">Download Resume</a>

            </div>
        </nav>
    );
}

export default NavBar;
