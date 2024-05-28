import React, { useRef, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Project from "./screens/Project";
import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";
import CompletedProject from "./screens/CompletedProject";
import UpcomingProject from "./screens/UpcomingProject";
import ReadtToMoveIn from "./screens/ReadtToMoveIn";
import UnderConstruction from "./screens/UnderConstruction";
import WALogo from "./assets/whatsapp.png";
import { IoIosClose } from "react-icons/io";
import View360 from "./screens/360-View";
import View2D3D from "./screens/2D-3D";

const App = () => {
  const [open, setOpen] = useState(true);
  const homeRef = useRef(null);
  const companiesRef = useRef(null);
  const propertyRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  return (
    <>
      <BrowserRouter>
        <Navbar
          refs={{
            homeRef,
            companiesRef,
            propertyRef,
            contactRef,
            aboutRef,
          }}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                refs={{
                  homeRef,
                  companiesRef,
                  propertyRef,
                  contactRef,
                  aboutRef,
                }}
              />
            }
          />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/completed-projects" element={<CompletedProject />} />
          <Route path="/upcoming-projects" element={<UpcomingProject />} />
          <Route path="/ready-to-move-in" element={<ReadtToMoveIn />} />
          <Route path="/under-construction" element={<UnderConstruction />} />
          <Route path="/view-360" element={<View360 />} />
          <Route path="/view-2D3D" element={<View2D3D />} />
        </Routes>
        <Footer
          refs={{
            homeRef,
            companiesRef,
            propertyRef,
            contactRef,
            aboutRef,
          }}
        />
        <div className="fixed bottom-10 right-10 z-40 flex flex-row-reverse justify-center items-center">
          <img
            src={WALogo}
            alt=""
            onClick={() => setOpen(!open)}
            className="w-[60px] h-[60px] cursor-pointer object-cover"
          />
          {open && (
            <div className="bg-white rounded-xl mr-4 flex flex-col justify-center items-start py-3 pr-8 pl-3 relative border shadow-md">
              <button
                className="text-red-600 absolute top-2 right-2 text-xl"
                onClick={() => setOpen(false)}
              >
                <IoIosClose />
              </button>
              <p className="font-bold text-sm">We&apos;re Online</p>
              <p className="text-xs">How may I assist you today?</p>
            </div>
          )}
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
