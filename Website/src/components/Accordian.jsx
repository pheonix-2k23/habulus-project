import React from "react";
import { IoMdAdd } from "react-icons/io";
import { LuMinus } from "react-icons/lu";

const Accordian = ({ title, description, open, setOpen, index }) => {
  const toggleAccordion = () => {
    setOpen(open === index ? 0 : index);
  };

  return (
    <>
      <div
        className="w-full text-left flex justify-between items-center px-4 py-2 md:border-2 focus:outline-none md:text-[#28262C] cursor-pointer select-none font-medium rounded-md mb-4"
        onClick={toggleAccordion}
      >
        {title}
        <span className="text-2xl">
          {open === index ? <LuMinus className="text-red-600" /> : <IoMdAdd />}
        </span>
      </div>
      {open === index && (
        <div className="px-4 mb-4 md:text-[#28262C]">
          <p className="md:text-gray-800 text-sm">{description}</p>
        </div>
      )}
    </>
  );
};

export default Accordian;
