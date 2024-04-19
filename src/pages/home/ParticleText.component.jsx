import React from "react";

const ParticleText = () => {
  return (
    <div className=" flex flex-col items-center mx-auto px-10 h-screen ">
      <div className="pt-56">
        <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-center text-white ">
          Build a new kind of Decentralized
        </h1>
      </div>
      <p className="text-lg font-normal text-center mx-2 pt-7 leading-[30px] tracking-wider sm:w-full md:w-full lg:w-[75%] text-white">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga.
      </p>
      <div className="flex pt-14">
        <button className="text-base font-medium bg-gray-600 text-white p-3 mr-16 rounded hover:bg-transparent duration-300">
          JOIN US
        </button>
        <button className="text-base font-medium bg-yellow-300 text-black p-3 rounded hover:bg-transparent hover:text-white duration-300">
          VIEW WHITE PAPER
        </button>
      </div>
    </div>
  );
};

export default ParticleText;
