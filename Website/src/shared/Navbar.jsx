import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ refs }) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  const handleItemClick = (itemName, ref) => {
    if (location.pathname !== "/") {
      navigate("/");
    }
    //setActive(itemName);
    const isMobileOrTablet = window.innerWidth <= 900;
    if (isMobileOrTablet) {
      const newWindow = window.open(`/#${itemName}`, "_self");
      newWindow.onload = () => {
        const targetElement = newWindow.document.getElementById(itemName);
        if (targetElement) {
          const topOffset = targetElement.getBoundingClientRect().top;
          newWindow.scrollTo(0, topOffset + 10); // Scroll to the element's position plus 10 pixels
        }
      };
    } else {
      if (ref) {
        ref.current?.scrollIntoView({ behavior: "smooth" });
      }
    }
    setOpen(false);
  };

  return (
    <header className="bg-white sm:flex md:justify-between md:shadow-md sm:items-center px-8 sm:py-1 fixed top-0 left-0 w-full z-[100]">
      <div className="flex justify-between nd:px-8 py-2 sm:p-0 items-center">
        <Link to={"/"} className="flex items-center">
          <img
            src={Logo}
            className="md:h-[40px] h-[46px] relative z-10 object-contain"
            alt="Logo"
          />
        </Link>
        <div className="sm:hidden">
          <button
            onClick={() => setOpen(!open)}
            type="button"
            className="w-full text-gray-500 hover:text-white focus:text-white focus:outline-none flex justify-center items-center"
          >
            <GiHamburgerMenu size={28} className="text-black bg-white" />
          </button>
        </div>
      </div>
      <ul
        className={`${
          open ? "flex" : "hidden"
        } px-2 sm:flex sm:p-0 w-full lg:w-[55%] sm:h-[32%] sm:w-auto transition-all duration-300 ease-in-out bg-white sm:bg-transparent md:justify-end justify-center items-center flex-col md:flex-row select-none`}
      >
        <li
          className={`p-2 lg:p-3 mx-2 lg:mx-3 md:w-auto w-full text-black text-sm lg:text-base cursor-pointer text-center hidden md:block md:hover:text-blue-500 md:hover:bg-transparent hover:bg-[#509FCF] mt-0 font-semibold ${
            active === "home" ? "text-blue-500" : ""
          }`}
          onClick={() => handleItemClick("home", refs.homeRef)}
        >
          Home
        </li>
        <li
          className={`block p-2 lg:p-3 mx-2 lg:mx-3 md:w-auto w-full text-black text-sm lg:text-base cursor-pointer text-center md:hidden md:hover:text-blue-500 md:hover:bg-transparent hover:bg-[#509FCF] mt-0 font-semibold ${
            active === "about" ? "text-blue-500" : ""
          }`}
          onClick={() => handleItemClick("about", null)}
        >
          About Us
        </li>
        <li
          className={`block p-2 lg:p-3 mx-2 lg:mx-3 md:w-auto w-full text-black text-sm lg:text-base cursor-pointer text-center md:hover:text-blue-500 md:hover:bg-transparent hover:bg-[#509FCF] mt-0 font-semibold ${
            active === "companies" ? "text-blue-500" : ""
          }`}
          onClick={() => handleItemClick("companies", refs.companiesRef)}
        >
          Companies
        </li>
        <li
          className={`block p-2 lg:p-3 mx-2 lg:mx-3 md:w-auto w-full text-black text-sm lg:text-base cursor-pointer text-center md:hover:text-blue-500 md:hover:bg-transparent hover:bg-[#509FCF] mt-0 font-semibold ${
            active === "projects" ? "text-blue-500" : ""
          }`}
          onClick={() => handleItemClick("projects", refs.aboutRef)}
        >
          Projects
        </li>
        <li
          className={`block p-2 lg:p-3 mx-2 lg:mx-3 md:w-auto w-full text-black text-sm lg:text-base cursor-pointer text-center md:hover:text-blue-500 md:hover:bg-transparent hover:bg-[#509FCF] mt-0 font-semibold ${
            active === "property" ? "text-blue-500" : ""
          }`}
          onClick={() => handleItemClick("property", refs.propertyRef)}
        >
          Property
        </li>
        <li
          className={`block p-2 lg:p-3 mx-2 lg:mx-3 md:w-auto w-full text-black text-sm lg:text-base cursor-pointer text-center md:hover:text-blue-500 md:hover:bg-transparent hover:bg-[#509FCF] mt-0 font-semibold ${
            active === "contact" ? "text-blue-500" : ""
          }`}
          onClick={() => handleItemClick("contact", refs.contactRef)}
        >
          Contact Us
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
