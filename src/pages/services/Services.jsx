import React from "react";
import Img4 from "../../assets/img4.jpg";

const Services = () => {
  return (
    <div id="services" className="min:h-screen py-[150px] bg-white">
      <div className="flex flex-col justify-center items-center px-5  ">
        <div className="flex flex-col md:flex-row ">
          <div className="flex flex-col py-20 w-full md:w-[50%] px-4 bg-slate-100">
            <p className="text-2xl font-medium text-center lg:text-start lg:pl-28 text-[#2d3a4b]">
              Our Services
            </p>
            <p className=" text-sm font-medium mt-3 relative text-[#6f6f6f] leading-[20px] tracking-wider text-center lg:text-start lg:pl-28">
              Cupiditate non provident, similique sunt in culpa qui officia
              deserunt mollitia animi, id est laborum et dolorum fuga.
            </p>
            
            <div className="flex mt-9 lg:pl-28 justify-center lg:justify-start ">
              <div className="pr-5">
                <div className="flex ">
                  <label className="text-5xl font-medium">5000</label>
                  <label className="text-5xl font-medium">+</label>
                </div>
                <p className="text-sm font-medium text-[#6f6f6f]">Customers</p>
              </div>
              <div>
                <div className="flex ">
                  <label className="text-5xl font-medium">750</label>
                  <label className="text-5xl font-medium">+</label>
                </div>
                <p className="text-sm font-medium text-[#6f6f6f]">Deploying</p>
              </div>
            </div>
            <p className="text-sm font-medium mt-7 relative text-[#6f6f6f] leading-[20px] tracking-wider text-center lg:text-start lg:pl-28">
              Cupiditate non provident, similique sunt in culpa qui officia
              deserunt mollitia animi, id est laborum et dolorum fuga.
              Cupiditate non provident, similique sunt in culpa qui officia
              deserunt mollitia animi, id est laborum et dolorum fuga
            </p>
          </div>

          <div className="flex justify-center items-center md:w-[50%] ">
            <img className="h-full object-cover w-[100%]" src={Img4} alt="img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
