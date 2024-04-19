import React from "react";
import { FaFacebookF, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className="h-[60%] w-full flex justify-center items-center bg-black "
    >
      <div className="w-full flex justify-center items-center py-[150px] bg-[url('https://demos.webicode.com/html/ico-chain/html/images/com-bg.jpg')] bg-cover opacity-80">
      <div className="flex flex-col md:flex-row sm:items-center w-[90%] lg:w-[80%] ">
        
        <div className="flex flex-col w-full items-center md:items-start lg:w-[50%] p-2 ">
          <p className="text-2xl font-normal text-white">Join Our Community</p>
          <ul className="flex flex-wrap gap-2 mt-2">
            <li className="border-2 p-3.5 rounded-full">
              <a href="#" target="blank">
                <FaFacebookF className="text-xl text-white" />
              </a>
            </li>
            <li className="border-2 p-3.5 rounded-full">
              <a href="#" target="blank">
                <FaTwitter className="text-xl text-white" />
              </a>
            </li>
            <li className="border-2 p-3.5 rounded-full">
              <a href="#" target="blank">
                <FaGithub className="text-xl text-white" />
              </a>
            </li>
            <li className="border-2 p-3.5 rounded-full">
              <a href="#" target="blank">
                <FaLinkedin className="text-xl text-white" />
              </a>
            </li>
            <li className="border-2 p-3.5 rounded-full">
              <a href="#" target="blank">
                <FaFacebookF className="text-xl text-white" />
              </a>
            </li>
            <li className="border-2 p-3.5 rounded-full">
              <a href="#" target="blank">
                <FaTwitter className="text-xl text-white" />
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col w-full items-center md:items-start lg:w-[50%] p-2 ">
          <p className="text-2xl font-normal text-white">Subscribe to our newsletter</p>
          <div className="mt-2 flex justify-center md:justify-start bg-red-300">
            <input
              className="p-3 w-[99%]"
              type="email"
              placeholder="Enter your email address"
            />
            <button className="text-white px-5 py-3 bg-[#00001a] hover:bg-transparent">
              SEND
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Contact;
