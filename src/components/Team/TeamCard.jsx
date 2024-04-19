import React from "react";

const TeamCard = () => {
  return (
    <div className="relative group">
      <img
        src="https://demos.webicode.com/html/ico-chain/html/images/team-img-1.jpg"
        alt=""
        className="transition-transform duration-300 transform group-hover:-translate-y-4"
      />
      <div className="absolute font-medium -bottom-1 left-0 right-0 bg-black bg-opacity-75 text-white text-center  opacity-0 group-hover:opacity-100  transition-opacity cursor-pointer duration-300">
        <p className="-mb-1">Candidate Name</p>
        <label className="text-sm">profile</label>
      </div>
    </div>
  );
};

export default TeamCard;
