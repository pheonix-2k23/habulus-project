import React, { useEffect, useState } from "react";
import Video from "../assets/video/2d-3d.mp4";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import Icon2D from "../assets/2d-3d/2d.svg";
import Icon3D from "../assets/2d-3d/3d.svg";
import Image2D from "../assets/2d-3d/2dImage.png";
import Image3D from "../assets/2d-3d/3dImage.png";
import ImageOne from "../assets/2d-3d/image1.png";
import Boy from "../assets/2d-3d/boy.png";
import Drone from "../assets/2d-3d/drone.png";

function View2D3D() {
  const [view, setView] = useState("2D View");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const data = {
    "2D View": {
      image: Image2D,
      description: `Our 2D architectural drawings provide a detailed and accurate
      representation of your home's layout. This essential planning tool
      allows you to examine the spatial arrangement, dimensions, and flow
      of each room. From room configurations to plumbing and electrical
      layouts, our 2D views serve as the blueprint for your dream home,
      ensuring that every detail is meticulously planned and executed`,
      title: "2D View: Precision in Planning",
    },
    "3D View": {
      image: Image3D,
      description: `Step into the future with our cutting-edge 3D renderings that bring your home to life with stunning realism. Our 3D visualizations provide a virtual tour of your property, allowing you to explore the design, textures, and ambiance of each space. Experience the interplay of light and shadow, envision the color schemes, and make informed decisions about finishes and décor elements—all before construction begins.`,
      title: "3D View: Immersive Realism",
    },
  };

  return (
    <main className="overflow-hidden bg-black md:bg-white">
      <section className="h-[90vh] mt-12 w-full relative ">
        <Link
          to={"/completed-projects"}
          className="text-white absolute top-6 left-6 z-50 text-2xl"
        >
          <FaArrowLeft />
        </Link>
        <video
          src={Video}
          className="w-full h-full absolute top-0 left-0 object-cover"
          autoPlay
          muted
          loop
          playsInline
        ></video>
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center flex-col z-10">
          <p className="text-2xl md:text-5xl text-white font-bold w-full px-8 text-center md:text-right md:leading-[60px] mx-auto md:absolute md:top-16">
            View Your Home Before Construction: <br />
            2D and 3D Perspectives
          </p>
        </div>
        <img src={Boy} alt="" className=" absolute z-40 hidden md:block" />
        <img
          src={Drone}
          alt=""
          className="absolute -right-10 -bottom-36 z-40 block"
        />
      </section>
      <section className="py-4 w-full mx-auto max-w-6xl mt-24">
        <div className="w-full px-10 md:px-16 py-10 text-justify  bg-black md:bg-white">
          <p className="font-bold text-2xl md:text-4xl mb-3  text-white md:text-black text-justify">
            Visualize Your Dream Home with Habulus Groups
          </p>
          <p className="font-medium text-justify  text-white md:text-black mb-4">
            At Habulus Groups, we believe that the journey to your dream home
            should be as immersive as the living experience itself. Introducing
            our state-of-the-art 360-degree view technology, we invite you to
            explore every nook and cranny of your future residence before
            construction even begins.Our 360-degree panoramas offer a holistic
            view of your home, allowing you to navigate seamlessly through each
            room and space. Immerse yourself in the layout, get a feel for room
            dimensions, and appreciate the flow of design—all from the comfort
            of your device. It&apos;s like being inside your home before
            it&apos;s even built.
          </p>
        </div>
      </section>
      <section className="w-full mx-auto font-medium max-w-6xl bg-white py-10 md:py-0">
        <div className="w-full px-8 md:px-16">
          <div className="flex justify-between items-center flex-wrap">
            <p className="font-bold text-2xl md:text-4xl mb-3">
              {data[view].title}
            </p>
            <div
              className="bg-white justify-center items-center cursor-pointer select-none border-2 rounded-full ml-auto md:ml-0 mb-4 md:mb-0 hidden md:flex"
              onClick={() =>
                setView(view === "2D View" ? "3D View" : "2D View")
              }
            >
              {view === "2D View" && <img src={Icon2D} className="w-[37px]" />}{" "}
              <p
                className={`font-semibold text-xl ${
                  view === "2D View" ? "ml-1 mr-2" : "mr-1 ml-2"
                }`}
              >
                {view}
              </p>
              {view === "3D View" && <img src={Icon3D} className="w-[37px]" />}
            </div>
          </div>
          <div className="w-full flex justify-center text-justify items-center md:items-start flex-col md:flex-row mx-auto gap-5">
            <img
              src={data[view].image}
              alt=""
              className="w-[90%] md:w-[55%] object-cover"
            />
            <div
              className="bg-white justify-center items-center cursor-pointer select-none border-2 rounded-full flex md:hidden"
              onClick={() =>
                setView(view === "2D View" ? "3D View" : "2D View")
              }
            >
              {view === "2D View" && <img src={Icon2D} className="w-[37px]" />}{" "}
              <p
                className={`font-semibold text-xl ${
                  view === "2D View" ? "ml-1 mr-2" : "mr-1 ml-2"
                }`}
              >
                {view}
              </p>
              {view === "3D View" && <img src={Icon3D} className="w-[37px]" />}
            </div>
            <p className="text-justify mt-4 md:mt-10">
              {data[view].description}
            </p>
          </div>
        </div>
      </section>
      <section className="py-4 w-full mx-auto max-w-6xl">
        <div className="w-full px-4 md:px-16 py-10  bg-black md:bg-white text-justify">
          <p className="font-bold text-2xl  text-white md:text-black md:text-4xl mb-3 text-justify">
            Immerse Yourself in a 360-Degree Experience
          </p>
          <p className="font-medium text-justify  text-white md:text-black mb-4">
            At Habulus Groups, we believe that the journey to your dream home
            should be as immersive as the living experience itself. Introducing
            our state-of-the-art 360-degree view technology, we invite you to
            explore every nook and cranny of your future residence before
            construction even begins.Our 360-degree panoramas offer a holistic
            view of your home, allowing you to navigate seamlessly through each
            room and space. Immerse yourself in the layout, get a feel for room
            dimensions, and appreciate the flow of design—all from the comfort
            of your device. It&apos;s like being inside your home before
            it&apos;s even built.
          </p>
        </div>
      </section>
      <img
        src={ImageOne}
        alt=""
        className="w-[90%] md:w-[76%] mx-auto mb-10 rounded hidden md:block object-cover"
      />
    </main>
  );
}

export default View2D3D;
