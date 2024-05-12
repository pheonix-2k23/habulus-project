import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import { useLocation, useNavigate } from "react-router-dom";
const Sidebar = ({ open }) => {
  const [active, setActive] = useState("Completed Projects");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathname = location?.search?.replace("?type=", "");
    if (pathname.includes("Completed-Projects")) {
      setActive("Completed Projects");
    } else if (pathname.includes("Under-Construction")) {
      setActive("Under Construction");
    } else if (pathname.includes("Ready-to-move-in")) {
      setActive("Ready to move in");
    } else if (pathname.includes("Upcoming-projects")) {
      setActive("Upcoming projects");
    } else if (location.pathname.includes("latest-update")) {
      setActive("Latest Update");
    } else if (location.pathname.includes("testimonial")) {
      setActive("Testimonial");
    } else if (location.pathname.includes("advertisement")) {
      setActive("Advertisement");
    }
  }, [location]);

  const ButtonComp = ({ title, onClick }) => {
    return (
      <button
        onClick={() => {
          setActive(title);
          if (onClick) onClick();
        }}
        className={`p-2 ${
          active !== title
            ? "bg-[#4d4d4d] text-white"
            : "bg-[#fff] text-[#4d4d4d]"
        }  rounded-md sidebarBtn w-[80%] mb-6`}
      >
        {title}
      </button>
    );
  };
  return (
    <section
      className={`w-full flex flex-col ${
        open ? "flex" : "hidden md:flex"
      } md:w-[20%] h-[100vh] bg-[#313131]`}
    >
      <div className="flex justify-start items-center flex-col h-[100vh] pt-10 overflow-y-auto">
        <img src={logo} width={200} height={200} className="mx-auto mb-10" />
        <ButtonComp
          title="Completed Projects"
          onClick={() => navigate(`/dashboard/project?type=Completed-Projects`)}
        />
        <ButtonComp
          title="Under Construction"
          onClick={() => navigate(`/dashboard/project?type=Under-Construction`)}
        />
        <ButtonComp
          title="Ready to move in"
          onClick={() => navigate(`/dashboard/project?type=Ready-to-move-in`)}
        />
        <ButtonComp
          title="Upcoming projects"
          onClick={() => navigate(`/dashboard/project?type=Upcoming-projects`)}
        />
        <ButtonComp
          title="Latest Update"
          onClick={() => navigate(`/dashboard/latest-update`)}
        />
        <ButtonComp
          title="Testimonial"
          onClick={() => navigate(`/dashboard/testimonial`)}
        />
        <ButtonComp
          title="Advertisement"
          onClick={() => navigate(`/dashboard/advertisement`)}
        />
        <ButtonComp
          title="Logout"
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        />
      </div>
    </section>
  );
};

export default Sidebar;
