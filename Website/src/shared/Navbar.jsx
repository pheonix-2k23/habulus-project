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
    <section
      className={`md:shadow-md py-2 flex justify-between items-center px-8`}
    >
      <Link to={"/"}>
        <img
          src={Logo}
          className={`h-[40px] relative z-10 object-contain ${
            open && "hidden"
          }`}
          alt=""
        />
      </Link>
      {!open && (
        <GiHamburgerMenu
          size={26}
          onClick={() => setOpen(true)}
          className="md:hidden"
        />
      )}
      {open && (
        <IoClose
          size={30}
          onClick={() => setOpen(false)}
          className="absolute top-8 right-8"
        />
      )}
      <ul
        className={`w-full h-[100vh] md:h-auto ${
          open ? "flex md:flex" : "hidden md:flex"
        } justify-center md:justify-end items-center flex-col md:flex-row select-none`}
      >
        <Link
          className="mx-3 p-3 font-medium cursor-pointer hover:text-[#509FCF]"
          to={"/#"}
        >
          Home
        </Link>
        <li
          className="mx-3 p-3 font-medium cursor-pointer hover:text-[#509FCF]"
          onClick={() => handleItemClick("companies")}
        >
          Companies
        </li>
        <li
          className="mx-3 p-3 font-medium cursor-pointer hover:text-[#509FCF]"
          onClick={() => handleItemClick("projects")}
        >
          Projects
        </li>
        <li
          className="mx-3 p-3 font-medium cursor-pointer hover:text-[#509FCF]"
          onClick={() => handleItemClick("property")}
        >
          Property
        </li>
        <li
          className="mx-3 p-3 font-medium cursor-pointer hover:text-[#509FCF]"
          onClick={() => handleItemClick("contact")}
        >
          Contact Us
        </li>
      </ul>
    </section>
  );
};

export default Navbar;
