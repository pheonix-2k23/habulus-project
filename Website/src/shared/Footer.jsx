import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import videoFooter from "../assets/footer/footer vedio.mp4";
import Animation from "../assets/footer/footer.gif";
import logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleItemClick = (itemName) => {
    if (location.pathname !== "/") navigate("/");
    const element = document.getElementById(itemName) || null;
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section
      className="min-h-screen flex flex-col justify-start items-center relative"
      id="contact"
    >
      {location.pathname === "/" && (
        <img
          src={Animation}
          className="absolute z-50 -top-[195px] -left-[90px] w-[460px]"
        />
      )}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 object-cover h-full w-full z-0"
      >
        <source src={videoFooter} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full min-h-screen flex justify-center items-center flex-col bg-black/70 py-14 px-4 z-40">
        <p className="text-justify text-white justify-start flex flex-col text-l text- relative z-10 mb-10 text-lg w-[90%]">
          Habulus Groups is an epitome of class, quality and luxury. We work and
          innovate consistently to raise the bar of providing luxurious living
          spaces for our customers.
        </p>
        <div className="md:flex w-[90%]">
          <div className="md:w-[40%] w-full md:h-[60vh] flex flex-col justify-start text-left self-start relative z-10">
            <p className="mb-5 text-xl font-semibold text-white">QUICK LINKS</p>
            <li
              className="mb-2 font-medium cursor-pointer list-none text-white"
              onClick={() => handleItemClick("home")}
            >
              Home
            </li>
            <li
              className="mb-2 font-medium cursor-pointer list-none text-white"
              onClick={() => handleItemClick("companies")}
            >
              Companies
            </li>
            <li
              className="mb-2 font-medium cursor-pointer list-none text-white"
              onClick={() => handleItemClick("projects")}
            >
              Project
            </li>
            <li
              className="mb-2 font-medium cursor-pointer list-none text-white"
              onClick={() => handleItemClick("property")}
            >
              Property
            </li>
            <li
              className="mb-2 font-medium cursor-pointer list-none text-white"
              onClick={() => handleItemClick("contact")}
            >
              Contact Us
            </li>
          </div>
          <div className="w-[60%] md:w-full flex justify-start text-left self-start relative z-10 flex-col">
            <p className="flex mb-5 mt-10 md:mt-0 md:ml-8 text-xl font-semibold text-white">
              CONTACT DETAILS
            </p>
            <p className="md:ml-8 text-white hover:text-[#FAFF00] cursor-pointer">
              Flat no 501,Site No 1482,1483, sri nilaya residency 2, deccan
              palms layout,Ananth nagar,electronic city phase
              2,Bengaluru(Bangalore) urban, karnataka ,560100
            </p>
            <p className="md:ml-8 text-white mt-2">
              Email -{" "}
              <span className="hover:text-[#FAFF00] cursor-pointer">
                enquiry@habulus.com
              </span>
            </p>
            <p className="md:ml-8 text-white mt-2">Phone - +91 8989899393</p>
          </div>
        </div>
        <div className="flex md:w-[90%] mt-10 md:mt-0 justify-center md:justify-between items-center flex-col md:flex-row gap-3">
          <div className="flex md:block flex-col justify-center items-center">
            <img
              src={logo}
              className="h-[38px] rounded-full mb-4 object-cover"
              alt=""
            />
            <p className="text-xl font-bold text-white">
              Designed by Phoenix Tech
            </p>
          </div>
          <div className="flex gap-4">
            <FaFacebook size={24} className="cursor-pointer text-white" />
            <FaTwitter size={24} className="cursor-pointer text-white" />
            <FaInstagram size={24} className="cursor-pointer text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
