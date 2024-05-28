import React from "react";
import { Link } from "react-router-dom";
import HomeAbout from "../../assets/about.png";
import AboutUnderConstruction from "../../assets/about-mobile-1.png";
import AboutCompletedImage from "../../assets/about-mobile-2.png";
import AboutReadtToMoveIn from "../../assets/about-mobile-3.png";
import AboutUpcomingImage from "../../assets/about-mobile-4.png";
import AboutGradient from "../../assets/about-mobile-gradient.png";

const AboutUsMobile = ({ refs }) => {
  const handleItemClick = (itemName, ref) => {
    const isMobileOrTablet = window.innerWidth <= 768;
    if (ref && isMobileOrTablet) {
      window.open(`/#${itemName}`, "_self");
      ref.current?.scrollIntoView({ behavior: "smooth", inline: "nearest" });
    } else {
      if (ref) {
        ref.current?.scrollIntoView({ behavior: "smooth", inline: "nearest" });
      }
    }
  };
  return (
    <section className="py-4 w-full mx-auto max-w-6xl" id="about">
      <section className="bg-black w-full justify-center items-center flex-col py-16">
        <p className="text-white text-center font-medium text-2xl md:text-3xl">
          Welcome to our <br /> Construction Field website!
        </p>
        <p className="text-white text-center mt-4 mb-6 text-sm">
          Learn more about our company and our expertise.
        </p>
        <div className="gap-x-4 flex relative z-50 w-full justify-center">
          <button
            className="border border-white text-white px-6 py-2 rounded-md text-sm"
            onClick={() => handleItemClick("contact", refs.contactRef)}
          >
            Contact Us
          </button>
          <button
            className="bg-white border border-white text-black px-6 py-2 rounded-md text-sm"
            onClick={() => handleItemClick("projects", refs.aboutRef)}
          >
            Learn More
          </button>
        </div>
      </section>
      <div className="left-0 absolute -translate-y-20 z-20 w-full">
        <svg
          viewBox="0 0 1271 426"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H1271V297.226C1271 297.226 1150 426 635.5 426C121 426 0 297.226 0 297.226V0Z"
            fill="black"
          />
        </svg>
      </div>
      <section className="flex items-center flex-col lg:flex-row h-[70vh] relative">
        <div className="relative w-full">
          <img
            src={HomeAbout}
            alt=""
            className="object-cover w-full h-[70vh] absolute left-0"
            style={{ filter: "brightness(50%)" }}
          />
        </div>
        <div className="w-[90%] mx-auto flex justify-center flex-col items-center mb-10 md:mb-0 absolute top-20">
          <p className="text-3xl font-bold mt-16 text-center">About Us</p>
          <div className="mt-4">
            <p className=" text-white md:text-[#0E4316] font-bold text-3xl text-center">
              Smart Living Spaces
            </p>
            <p className=" text-white md:text-[#0E4316] mb-2 font-medium text-center">
              The Magic of Your Dream Home Begins With us
            </p>
            <p className="text-sm text-justify mt-4">
              Habulus Groups always focuses on providing superior quality living
              standards in the perfect way to our customers in all our projects.
              We are a brand that looks into every aspect related to properties,
              from design to collaboration with the best architects, promising
              flawless interiors to look into every small thing in detail.
              HABULUS GROUPS Apartments is an epitome of class, quality and
              luxury. We work and innovate consistently to raise the bar of
              providing luxurious living spaces for our customers.
            </p>
          </div>
        </div>
      </section>
      <div
        className="lg:w-[48%] w-full md:grid md:mt-10 lg:mt-0 lg:flex flex-col grid-cols-2 gap-x-4 mx-auto mt-32 px-6"
        id="projects"
      >
        <Link to={"/under-construction"}>
          <section className="w-full h-[140px] border relative flex justify-center items-center z-10 mb-10 rounded-lg">
            <img
              src={AboutUnderConstruction}
              alt=""
              className="absolute -top-[76px] left-0"
            />
            <p className="absolute right-4 text-right font-semibold text-2xl">
              Under Construction <br /> Projects
            </p>
          </section>
        </Link>
        <Link to={"/completed-projects"}>
          <section className="w-full h-[140px] border relative flex justify-center items-center z-10 mb-10 rounded-lg overflow-hidden">
            <img
              src={AboutCompletedImage}
              alt=""
              className="absolute h-[140px] object-cover right-0"
            />
            <div className="w-full h-[140px] from-black to-black/10 bg-gradient-to-r absolute"></div>
            <p className="absolute left-4 text-left font-semibold text-2xl">
              Completed
              <br /> Projects
            </p>
          </section>
        </Link>
        <Link to={"/ready-to-move-in"}>
          <section className="w-full h-[140px] border relative flex justify-center items-center z-10 mb-10 rounded-lg overflow-hidden">
            <img
              src={AboutReadtToMoveIn}
              alt=""
              className="absolute h-[140px] object-cover left-0 w-full"
            />
            <div className="w-full h-[140px] from-black to-black/10 bg-gradient-to-l absolute"></div>
            <p className="absolute right-4 text-right font-semibold text-2xl">
              Ready to Move in
            </p>
          </section>
        </Link>
        <Link to={"/upcoming-projects"}>
          <section className="w-full h-[140px] border relative flex justify-center items-center z-10 mb-10 rounded-lg">
            <img
              src={AboutUpcomingImage}
              alt=""
              className="absolute -top-[76px] right-0 z-20"
            />
            <div className="w-full h-[140px] from-black to-black/10 bg-gradient-to-l absolute"></div>
            <p className="absolute left-4 text-left font-semibold text-2xl z-40">
              Upcoming Projects
            </p>
          </section>
        </Link>
      </div>
    </section>
  );
};

export default AboutUsMobile;
