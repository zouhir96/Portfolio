import { About } from "./About";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { NavBar } from "./NavBar";
import { Portfolio } from "./Portfolio";
import { Skills } from "./Skills";
import { ToastContainer } from "react-toastify";
import RetroGrid from "../components/magicui/retro-grid";

const Main = () => {
  return (
    <div>
      <RetroGrid className="fixed h-full"  />
      <div className="text-[#3C5065] h-full">
        <NavBar />
        <Hero />
        <About />
        <Portfolio />
        <Skills />
        <Contact />
        <ToastContainer position="bottom-left" />
      </div>
    </div>
  );
};

export default Main;
