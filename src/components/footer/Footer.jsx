import React from "react";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import Img1 from "../../assets/img1.png";
import Img2 from "../../assets/img2.png";
import Img3 from "../../assets/img3.png";

const Footer = () => {
  return (
    <div className="h-[40%] w-full  py-5 bg-[#0b0c22]">
      <div className="px-12 lg:px-32 ">
        <p className="text-base font-medium mb-8  text-white text-center md:text-left ">
          Partnered with Innovative Globally
        </p>
        <ul className="flex flex-wrap justify-center mt-2 gap-4 ">
          <li className="w-40">
            <a href="#" target="blank" className="">
              <img src={Img1} alt="image" className="" />
            </a>
          </li>
          <li className="w-40">
            <a href="#" target="blank">
              <img src={Img2} />
            </a>
          </li>
          <li className="w-40">
            <a href="#" target="blank">
              <img src={Img3} />
            </a>
          </li>
          <li className="w-40">
            <a href="#" target="blank">
              <img src={Img1} />
            </a>
          </li>
          <li className="w-40">
            <a href="#" target="blank">
              <img src={Img2} />
            </a>
          </li>
          <li className="w-40">
            <a href="#" target="blank">
              <img src={Img3} />
            </a>
          </li>
          <li className="w-40">
            <a href="#" target="blank">
              <img src={Img2} />
            </a>
          </li>
        </ul>
      </div>
      <hr className="opacity-25 my-5" />
      <div className="px-12 lg:px-32 ">
        <div className="flex flex-col items-center md:flex-row justify-between gap-3 ">
          <div>
            <p className=" text-sm text-[#999] text-center">
              © 2018 ICO Crypto BlockChain. All Rights Reserved. Webicode.com
            </p>
          </div>
          <div className="flex gap-3 md:gap-4 lg:gap-6 items-center ">
            <a className="text-sm text-[#999] cursor-pointer">Faqs</a>
            <a className="text-sm text-[#999] cursor-pointer">Terms & Conditions</a>
            <a className="text-sm text-[#999] cursor-pointer">Contact Us </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
