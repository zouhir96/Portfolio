import { Link } from "react-router-dom";
const Hero = () => {
    return (
        <div className="md:h-screen flex justify-center md:items-center gap-11 sm:p-10 p-4 mt-40 md:mt-16" id="hero">
            <div className="flex flex-col gap-10">
                <h1 className="text-5xl font-bold">Hi, I'm Zouhir RAJDAOUI Android Engineer.</h1>
                <p>Experienced Android Developer with over 4 years of dedicated expertise in crafting innovative mobile applications. 
                Proficient in Kotlin and Java, adept at translating client visions into seamless user experiences. 
                Passionate about leveraging cutting-edge technologies to deliver impactful solutions that exceed expectations.
                </p>
                <div className="">
                    <Link to="contact" className="border p-2 rounded-md px-4 border-[#3C5065] sm:mr-4 mr-2">Contact</Link>
                    <a href="/cv_zouhir_rajdaoui.pdf" download className="border p-2 rounded-md px-4 border-[#3C5065] text-white bg-[#3C5065]">Download Resume</a>
                </div>
            </div>
            <img src="zouhir.png" alt="zouhir" className="h-4/5 hidden md:block "/>
        </div>
    );
}

export default Hero;
