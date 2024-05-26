import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const handleItemClick = (itemName) => {
    if (location.pathname !== "/") navigate("/");
    setActive(itemName);
    const element = document.getElementById(itemName) || null;
    element?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="bg-white sm:flex md:justify-between md:shadow-md sm:items-center sm:px-8 sm:py-0 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between px-8 py-2 sm:p-0 ">
        <div className="flex items-center">
          <img
            src={Logo}
            className="md:h-[40px] h-[46px] relative z-10 object-contain"
            alt="Logo"
          />
        </div>
        <div className="sm:hidden">
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="w-full text-gray-500 hover:text-white focus:text-white focus:outline-none"
          >
            {open ? (
              <IoClose size={30} className="text-black bg-white" />
            ) : (
              <GiHamburgerMenu size={28} className="text-black bg-white pt-3" />
            )}
          </button>
        </div>
      </div>
      <ul
        className={`${
          open ? "flex md:flex" : "hidden md:flex"
        } px-2 sm:flex sm:p-0 w-full md:[45%] sm:h-[32%] sm:w-auto transition-all duration-300 ease-in-out bg-white-900 sm:bg-transparent md:justify-end justify-center items-center flex-col md:flex-row select-none`}
      >
        <Link
          className="block p-3 mx-3 md:w-auto  text-black text-lg md:text-base cursor-pointer text-center   md:hover:text-blue-500 md:hover:bg-transparent hover:bg-blue-500 mt-0 font-semibold"
          to="/#"
          onClick={() => handleItemClick("home")}
        >
          Home
        </Link>
        <li
          className=" block p-3 mx-3 md:w-auto  text-black  text-center text-lg md:text-base cursor-pointer  md:hover:text-blue-500 md:hover:bg-transparent hover:bg-blue-500 mt-0 font-semibold "
          onClick={() => handleItemClick("companies")}
        >
          Companies
        </li>
        <li
          className=" block p-3 mx-3 md:w-auto  text-black text-lg md:text-base text-center cursor-pointer  md:hover:text-blue-500 md:hover:bg-transparent hover:bg-blue-500 mt-0 font-semibold "
          onClick={() => handleItemClick("projects")}
        >
          Projects
        </li>
        <li
          className=" block p-3 mx-3 md:w-auto  text-black text-lg md:text-base text-center cursor-pointer  md:hover:text-blue-500 md:hover:bg-transparent hover:bg-blue-500 mt-0 font-semibold"
          onClick={() => handleItemClick("property")}
        >
          Property
        </li>
        <li
          className=" block p-3 mx-3 md:w-auto  text-black text-lg md:text-base text-center cursor-pointer  md:hover:text-blue-500 md:hover:bg-transparent hover:bg-blue-500 mt-0 font-semibold "
          onClick={() => handleItemClick("contact")}
        >
          Contact Us
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
