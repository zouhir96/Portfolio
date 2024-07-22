import { About } from "./About"
import { Contact } from "./Contact"
import { Hero } from "./Hero"
import { NavBar } from "./NavBar"
import { Portfolio } from "./Portfolio"
import { Skills } from "./Skills"
  import { ToastContainer } from 'react-toastify';

const Main = () => {
    return(
        <div className="text-[#3C5065] h-full">
            <NavBar/>
            <Hero/>
            <About/>
            <Portfolio/>
            <Skills/>
            <Contact/>
            <ToastContainer position="bottom-left" />
        </div>
    )
}

export default Main