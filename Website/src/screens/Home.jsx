import React from "react";
import AboutUs from "../components/Home/AboutUs";
import OurTeam from "../components/Home/OurTeam";
import Companies from "../components/Home/Companies";
import Testimonials from "../components/Home/Testimonials";
import Hero from "../components/Home/Hero";
import Faq from "../components/Home/Faq";
import Plots from "../components/Home/Plots";
import LatestUpdate from "../components/Home/LatestUpdate";
import Advertisement from "../components/Home/Advertisement";
import AnyQuestion from "../components/Home/AnyQuestion";

const Home = () => {
  return (
    <main
      className="flex bg-black md:bg-white text-white md:text-black justify-start w-full flex-col"
      id="home"
    >
      <Hero />
      <AboutUs />
      <OurTeam />
      <Companies />
      <Testimonials />
      <Faq />
      <Plots />
      <LatestUpdate />
      <Advertisement />
      {/* <AnyQuestion /> */}
    </main>
  );
};

export default Home;
