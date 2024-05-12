import React from "react";
import HeroImage from "../../assets/Front photo.jpg";

const Hero = () => {
  const handleItemClick = (itemName) => {
    const element = document.getElementById(itemName) || null;
    element?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <img src={HeroImage} className="w-full h-[90vh] object-cover" />
      <section className="bg-black w-full flex justify-center items-center flex-col py-16">
        <p className="text-white text-center font-medium text-2xl md:text-3xl">
          Welcome to our <br /> Construction Field website!
        </p>
        <p className="text-white text-center mt-4 mb-6 text-sm">
          Learn more about our company and our expertise.
        </p>
        <div className="gap-x-4 flex">
          <button
            className="border border-white text-white px-6 py-2 rounded-md text-sm"
            onClick={() => handleItemClick("contact")}
          >
            Contact Us
          </button>
          <button
            className="bg-white border border-white text-black px-6 py-2 rounded-md text-sm"
            onClick={() => handleItemClick("projects")}
          >
            Learn More
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;
