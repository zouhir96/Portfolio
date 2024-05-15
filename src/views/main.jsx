import { About } from "./About"
import { Hero } from "./Hero"
import { NavBar } from "./NavBar"
import { Portfolio } from "./Portfolio"
import { Skills } from "./Skills"

const Main = () => {
    return(
        <div className="text-[#3C5065] h-full">
            <NavBar/>
            <Hero/>
            <About/>
            <Portfolio/>
            <Skills/>
        </div>
    )
}

export default Main