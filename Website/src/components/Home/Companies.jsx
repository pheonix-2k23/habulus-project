import React, { useRef } from "react";
import AccentLogo from "../../assets/partner companies/accent home.png";
import HabulusStrucutreLogo from "../../assets/partner companies/habulus structures.png";
import EleganceHome from "../../assets/partner companies/elegance homes.png";
import HabulusBuilders from "../../assets/partner companies/habulus build&dev.png";
import HabulusHomes from "../../assets/partner companies/habulus homes pvt.png";

const Companies = () => {
  const CompanyComp = ({ image, title, subtitle }) => {
    return (
      <div className="flex justify-center items-center flex-col bg-[#fafafa] border shadow-xl py-6 px-3 hover:scale-105 cursor-pointer transition-animate w-[90%] mb-5 md:mb-0">
        <img
          src={image}
          alt=""
          className="w-[100px] h-[100px] aspect-square rounded-md object-contain"
        />
        <p className="mt-4 font-semibold text-lg text-center">{title}</p>
        <p className="mt-1 text-sm text-center">{subtitle}</p>
      </div>
    );
  };
  return (
    <section className="w-full py-12" id="companies">
      <p className="font-bold text-3xl text-center">Companies</p>
      <p className="text-center mt-3">
        We collaborate with trusted partners to deliver outstanding results.
      </p>
      <div className="grid md:grid-cols-5 place-items-center max-w-6xl mx-auto mt-6 gap-x-5 items-stretch">
        <CompanyComp
          image={AccentLogo}
          title={"Accent Homes"}
          subtitle={"Home not a place.. Its a feeling"}
        />
        <CompanyComp
          image={HabulusStrucutreLogo}
          title={"Habulus Structures"}
          subtitle={"A life beyond compare, Orchestrated with utmost care."}
        />
        <CompanyComp
          image={EleganceHome}
          title={"Elegance Homes"}
          subtitle={"Your dream is creative home"}
        />
        <CompanyComp
          image={HabulusBuilders}
          title={"Habulus Builders & Developers"}
          subtitle={"Making your dream Home come true"}
        />
        <CompanyComp
          image={HabulusHomes}
          title={"Habulus Homes Pvt Ltd"}
          subtitle={"You dream it.. We Built It"}
        />
      </div>
    </section>
  );
};

export default Companies;
