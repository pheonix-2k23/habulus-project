import React from "react";
import TeamImageBg from "../../assets/team.png";

const OurTeam = () => {
  return (
    <section className="w-full max-w-6xl mx-auto relative h-[180px] flex justify-center items-center mt-10">
      <div className="absolute left-0 w-full">
        <img
          src={TeamImageBg}
          alt="Team"
          className="w-full h-[180px] object-cover"
        />
      </div>
    </section>
  );
};

export default OurTeam;
