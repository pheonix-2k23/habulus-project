import { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import Sidebar from "../components/Sidebar";
import { useNavigate } from "react-router-dom";
const Wrapper = ({ children }) => {
  const [open, setOpen] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className="flex">
      <div className="md:hidden absolute top-5 left-5 z-20">
        {!open && (
          <GiHamburgerMenu
            size={26}
            className="text-white"
            onClick={() => setOpen(true)}
          />
        )}
        {open && (
          <IoClose
            size={30}
            className="text-white"
            onClick={() => setOpen(false)}
          />
        )}
      </div>
      <Sidebar open={open} />
      {!open && children}
    </div>
  );
};

export default Wrapper;
