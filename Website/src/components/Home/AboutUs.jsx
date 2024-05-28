import React from "react";
import { Link } from "react-router-dom";
import AboutCompletedImage from "../../assets/company projects/completed project.png";
import HomeAbout from "../../assets/about.png";
import AboutUnderConstImage from "../../assets/company projects/underconstruction.png";
import AboutReadtToMoveIn from "../../assets/company projects/ready to move in.png";
import AboutUpcomingImage from "../../assets/company projects/upcoming.png";

const AboutUs = ({ refs }) => {
  const handleItemClick = (itemName) => {
    const element = document.getElementById(itemName) || null;
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      className="py-4 w-[90%] lg:w-full mx-auto max-w-6xl md:block hidden"
      id="projects"
    >
      <p className="text-3xl font-bold mt-3 mb-6">About Us</p>
      <section className="flex justify-evenly items-start flex-col lg:flex-row gap-x-4">
        <div className="lg:w-[48%] w-[90%] mx-auto mb-10 md:mb-0">
          <img src={HomeAbout} alt="" className="object-cover" />
          <div className="mt-4">
            <p className=" text-white md:text-[#0E4316] font-bold text-3xl">
              Smart Living Spaces
            </p>
            <p className=" text-white md:text-[#0E4316] mb-2 font-medium">
              The Magic of Your Dream Home Begins With us
            </p>
            <p className="text-sm">
              Habulus Groups always focuses on providing superior quality living
              standards in the perfect way to our customers in all our projects.
              We are a brand that looks into every aspect related to properties,
              from design to collaboration with the best architects, promising
              flawless interiors to look into every small thing in detail.
              HABULUS GROUPS Apartments is an epitome of class, quality and
              luxury. We work and innovate consistently to raise the bar of
              providing luxurious living spaces for our customers.
            </p>
            <button
              className="border bg-black border-white text-white px-6 py-2 rounded-md mt-4"
              onClick={() => handleItemClick("contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
        <div className="lg:w-[48%] w-full md:grid md:mt-10 lg:mt-0 lg:flex flex-col grid-cols-2 gap-x-4 mx-auto">
          <AboutProjectComp
            path={"/completed-projects"}
            title="Completed Projects"
            subtitle="To delivered high-quality construction projects that exceed
              client expectations."
            image={AboutCompletedImage}
          />
          <AboutProjectComp
            path={"/under-construction"}
            title="Under construction projects"
            subtitle="To be the preferred in construction  for all types of projects that client expected."
            image={AboutUnderConstImage}
          />
          <AboutProjectComp
            path={"/ready-to-move-in"}
            title="Ready to move in"
            subtitle="Quality, Integrity, Safety, and Client Satisfaction ready to move in the buildings "
            image={AboutReadtToMoveIn}
          />
          <AboutProjectComp
            path={"/upcoming-projects"}
            title="Upcoming Projects"
            subtitle="To deliverey the upcomeing high-quality construction projects that exceed client expectations."
            image={AboutUpcomingImage}
          />
        </div>
      </section>
    </section>
  );
};

export default AboutUs;

export const AboutProjectComp = ({ title, subtitle, image, path }) => {
  return (
    <Link
      to={path}
      className="flex justify-start items-start md:border p-4 shadow-sm rounded-md mb-4 cursor-pointer group hover:bg-black transition-animate"
    >
      <img
        src={image}
        alt=""
        className="aspect-square h-[90px] w-[90px] object-cover"
      />
      <div className="ml-4 group-hover:text-white transition-animate">
        <p className="font-semibold text-lg">{title}</p>
        <p>{subtitle}</p>
      </div>
    </Link>
  );
};
