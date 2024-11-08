import { About } from "./About";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { NavBar } from "./NavBar";
import { Portfolio } from "./Portfolio";
import { Services } from "./Services";
import { Blog } from "./Blog";
import { ToastContainer } from "react-toastify";

const Main = () => {
  return (
    <div>
      <div className="text-[#3C5065] h-full">
        <NavBar />
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Blog />
        <Contact />
        <ToastContainer position="bottom-left" />
      </div>
    </div>
  );
};

export default Main;
