import React from "react";
import Logo from "../../assets/sbl-logo.png";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-scroll';

import { useState } from "react";
// import { Navlink } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex w-full h-20 shadow-xl bg-[rgba(0,0,0,0.9)] z-[1000] fixed">
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16 ">
        <Link to="home">
          <img src={Logo} alt="logo" className="h-10 cursor-pointer lg:w-24 md:w-20 sm:w-20" />
        </Link>
        {/* -------------------------------Large screen view------------------------------- */}
        <div className="hidden sm:flex md:flex ">
          <ul className="hidden sm:flex md:flex lg:gap-10 md:gap-8 sm:gap-5">
            <li className="">
              <Link
                to="home"
                className="text-base text-white font-semibold tracking-tight uppercase cursor-pointer hover:border-b-4 hover:border-red-300"
              >
                Home
              </Link>
            </li>
            <li className="">
              <Link
                to="about"
                className="text-base text-white font-semibold tracking-tight uppercase cursor-pointer hover:border-b-4 hover:border-red-300"
              >
                About
              </Link>
            </li>
            <li className="">
              <Link
                to="services"
                className="text-base text-white font-semibold tracking-tight uppercase cursor-pointer hover:border-b-4 hover:border-red-300"
              >
                Services
              </Link>
            </li>
            <li className="">
              <Link
                to="teams"
                className="text-base text-white font-semibold tracking-tight uppercase cursor-pointer hover:border-b-4 hover:border-red-300"
              >
                teams
              </Link>
            </li>
            {/* <li className="">
              <Link
                to="blogs"
                className="text-base text-white font-semibold tracking-tight uppercase hover:border-b-4 hover:border-red-300"
              >
                Blogs
              </Link>
            </li> */}
            {/* <li className="">
              <Link
                to="career"
                className="text-base text-white font-semibold tracking-tight uppercase hover:border-b-4 hover:border-red-300"
              >
                Career
              </Link>
            </li> */}
            
            <li className="lg: md:mr-0 sm:mr-0">
              <Link
                to="contact"
                className="text-base text-white font-semibold tracking-tight uppercase cursor-pointer hover:border-b-4 hover:border-red-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* -------------------------------hamburger icon------------------------------- */}
        <div onClick={handleNav} className="sm:hidden cursor-pointer text-white">
          <FaBars size={25} />
        </div>
      </div>
      {/* -------------------------------Medium & Small screen view------------------------------- */}
      <div
        className={
          nav
            ? "menu-open-slide fixed right-0 top-25 w-full sm:hidden h-screen bg-gray-900 opacity-95 p-10 ease-in-out duration-500 shadow-lg"
            : "menu-close-slide fixed right-[-100%] top-0 w-48 sm:hidden h-screen bg-white p-10 ease-in-out duration-500 shadow-lg"
        }
      >
        <div className="flex w-full items-center justify-end">
          <div onClick={handleNav} className="cursor-pointer mr-[-20px] text-white">
            <AiOutlineClose size={25} />
          </div>
        </div>
        <ul className="flex flex-col gap-9 mt-10 ">
          <li>
            <Link
              onClick={handleNav}
              to="/"
              className="text-base text-white font-semibold tracking-tight uppercase hover:border-b-4 hover:border-red-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={handleNav}
              to="services"
              className="text-base text-white font-semibold tracking-tight uppercase hover:border-b-4 hover:border-red-300"
            >
              Services
            </Link>
          </li>
          {/* <li>
            <Link
              onClick={handleNav}
              to="blogs"
              className="text-base text-white font-semibold tracking-tight uppercase hover:border-b-4 hover:border-red-300"
            >
              Blogs
            </Link>
          </li> */}
          {/* <li>
            <Link
              onClick={handleNav}
              to="career"
              className="text-base text-white font-semibold tracking-tight uppercase hover:border-b-4 hover:border-red-300"
            >
              Career
            </Link>
          </li> */}
          <li>
            <Link
              onClick={handleNav}
              to="about"
              className="text-base text-white font-semibold tracking-tight uppercase hover:border-b-4 hover:border-red-300"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={handleNav}
              to="/contact"
              className="text-base text-white font-semibold tracking-tight uppercase hover:border-b-4 hover:border-red-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
