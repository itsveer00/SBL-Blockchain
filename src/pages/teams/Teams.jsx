import React from "react";
import TeamCard from "../../components/Team/TeamCard";

const Teams = () => {
  return (
    <div
      id="teams"
      className="min:h-screen justify-center p-15 lg:px-40 py-[150px] bg-white"
    >
      <div className="flex flex-col justify-center items-center mb-16 ">
        <h2 className="text-4xl font-medium text-center pb-5 text-[#252525]">
          Our Senior Team Leads
        </h2>
        <p className="text-sm font-medium text-center leading-6 w-[60%]  text-[#252525]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nibh
          dolor, efficitur eget pharetra ac, cursus sed sapien. Cras posuere
          ligula ut blandit varius.
        </p>
      </div>

      <div className="flex flex-wrap justify-center">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </div>
  );
};

export default Teams;
