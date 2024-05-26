import React from "react";
import Plot1 from "../../assets/company projects/plot1.png";
import Plot2 from "../../assets/company projects/plot2.png";
import Plot3 from "../../assets/company projects/plot3.png";
import ResidentalPlot from "../../assets/plot/Recedental plot.png";
import VillaPlot from "../../assets/plot/villa plot.png";
import Apartments from "../../assets/plot/appartments.png";
import PremiumPlot from "../../assets/plot/premium plant.png";
import FacilityManagement from "../../assets/plot/facility management.png";

const Plots = () => {
  return (
    <section
      className="w-full py-12 max-w-6xl md:w-[90%] mx-auto flex gap-x-6 flex-col md:flex-row"
      id="property"
    >
      <div className="hidden md:block w-[90%] md:w-[40%] mx-auto ">
        <div className="relative flex justify-center items-center mb-6">
          <div className="bg-black/0 w-full h-[230px] absolute z-20 flex justify-center items-center flex-col">
            <button className="border bg-white text-black px-6 py-2 rounded-md mt-4">
              View
            </button>
            <p className="text-white mt-3 w-[85%] text-center">
              Click to view more Residental plots
            </p>
          </div>
          <img src={Plot1} className="h-[300px] w-full object-cover" alt="" />
        </div>
        <div className="hidden md:block relative justify-center items-center">
          <div className="bg-black/0 w-full h-[300px] absolute z-20 flex justify-center items-center flex-col">
            <button className="border bg-white text-black px-6 py-2 rounded-md mt-4">
              View
            </button>
            <p className="text-white mt-3 w-[85%] text-center">
              Click to view more Apartments with our outstanding designs
            </p>
          </div>
          <img src={Plot3} className="h-[670px] w-full object-cover" alt="" />
        </div>
      </div>
      <div className="w-[90%] md:w-[60%] mx-auto">
        <div className="hidden md:block">
          <div className="relative flex justify-center items-center mb-6">
            <div className="bg-black/0 w-full h-[230px] absolute z-20 flex justify-center items-center flex-col">
              <button className="border bg-white text-black px-6 py-2 rounded-md mt-4">
                View
              </button>
              <p className="text-white mt-3 w-[85%] text-center">
                Click to view more Villa plots with our best collections{" "}
              </p>
            </div>
            <img src={Plot2} className="h-[300px] w-full object-cover" alt="" />
          </div>
        </div>
        <div>
          <Component
            title="Residental Plots"
            subtitle="Individual plots These types of plots are created for individual housing"
            image={ResidentalPlot}
          />
          <Component
            title="Villa plots"
            subtitle="Elevate your lifestyle in a secure, gated community, where spacious design meets customizable elegance"
            image={VillaPlot}
          />
          <Component
            title="Apartments"
            subtitle="Crafting timeless living spaces, our construction company builds apartments that seamlessly blend luxury and functionality, redefining urban living"
            image={Apartments}
          />
          <Component
            title="Premium plats"
            subtitle="Discover unparalleled luxury and exclusivity in our premium construction company plots, where sophistication meets superior craftsmanship for your dream home"
            image={PremiumPlot}
          />
          <Component
            title="Facility management"
            subtitle="Optimizing operational efficiency and maintaining top-tier standards in construction facility management for seamless project execution"
            image={FacilityManagement}
          />
        </div>
      </div>
    </section>
  );
};

export default Plots;

export const Component = ({ title, subtitle, image, path }) => {
  return (
    <div className="flex justify-start items-start md:border p-4 shadow-sm rounded-md mb-4">
      <img
        src={image}
        alt=""
        className="aspect-square h-[90px] w-[90px] object-cover"
      />
      <div className="ml-4 group-hover:text-white transition-animate">
        <p className="font-semibold text-lg">{title}</p>
        <p className="line-clamp-2 md:line-clamp-none">{subtitle}</p>
      </div>
    </div>
  );
};
