import React, { useEffect } from "react";
import Hero from "../components/Project/Hero";
import Features from "../components/Project/Features";
import Broucher from "../components/Project/Broucher";
import ApartmentViews from "../components/Project/ApartmentViews";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";

const Project = () => {
  const location = useLocation();
  const state = location.search.replaceAll("?type=", "");
  const params = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="flex mt-12 justify-start w-full flex-col bg-black md:bg-white text-white md:text-black">
      <section className=" w-full relative">
        <Link
          to={"/" + state}
          className="text-white md:text-black absolute top-6 left-6 z-20 text-2xl"
        >
          <FaArrowLeft />
        </Link>
      </section>
      <>
        <Hero id={params.id} />
        <Features id={params.id} />
        <ApartmentViews id={params.id} />
        <Broucher id={params.id} />
      </>
    </main>
  );
};

export default Project;
