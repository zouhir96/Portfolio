import ScrollLink from "./ScrollLink";
import { Link } from "react-router-dom";

const Links = () => {
    return (
        <div className="flex gap-8 items-center">
            <ScrollLink to="hero" smooth={true} duration={500} offset={-70} >Home</ScrollLink>
            <ScrollLink to="about" smooth={true} duration={500} offset={-70} >About</ScrollLink>
            <ScrollLink to="portfolio" smooth={true} duration={500} offset={-70} >Portfolio</ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} offset={-70} >Skills</ScrollLink>
            <Link to="" className="border p-2 rounded-md px-4 border-[#3C5065]">Contact</Link>
            <Link to="" className="border p-2 rounded-md px-4 border-[#3C5065] text-white bg-[#3C5065]">Download Resume</Link>
        </div>
    );
}

export default Links;
