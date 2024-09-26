import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { useState } from "react";
import "flowbite";

const ScrollLink = ({ to, smooth, duration, offset, children }) => {
  return (
    <Link
      to={to}
      smooth={smooth}
      duration={duration}
      offset={offset}
      className="cursor-pointer md:underline block py-2 px-3 rounded md:p-0 hover:bg-gray-200"
    >
      {children}
    </Link>
  );
};

const Links = () => {
  const links = [
    { route: "hero", name: "Home" },
    { route: "about", name: "About" },
    { route: "portfolio", name: "Portfolio" },
    { route: "services", name: "Services" },
  ];

  return (
    <div
      className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1 md:ml-auto md:mr-6"
      id="navbar-sticky"
    >
      <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-300 bg-gray-50 md:bg-transparent rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
        {links.map((link) => (
          <li>
            <ScrollLink
              to={link.route}
              smooth={true}
              duration={700}
              offset={-30}
            >
              {link.name}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

const NavBar = () => {
  return (
    <nav className="bg-[#E7EFF7] z-10 shadow-md fixed w-full top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <img src="logo.svg" alt="Zouhir logo" className="h-12 scale-100" />
        <div className="flex md:order-2 space-x-2 sm:space-x-3 md:space-x-0 md:gap-2">
          <Link
            as={ScrollLink}
            to="contact"
            smooth={true}
            duration={700}
            offset={-30}
            className="border p-2 rounded-md md:px-4 text-sm sm:text-base border-[#3C5065] cursor-pointer"
          >
            Contact
          </Link>
          <a
            href="/cv_zouhir_rajdaoui.pdf"
            download
            className="border p-2 rounded-md md:px-4 border-[#3C5065] text-white text-sm sm:text-base bg-[#3C5065]"
          >
            Download Resume
          </a>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <Links />
      </div>
    </nav>
  );
};

export default NavBar;
