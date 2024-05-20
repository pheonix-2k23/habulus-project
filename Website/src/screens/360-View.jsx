import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Map from "../assets/company projects/map.png";
import { FaArrowLeft } from "react-icons/fa6";

function View360() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="bg-black md:bg-white text-white md:text-black">
      <section className="w-full mt-12 relative">
        <Link
          to={"/ready-to-move-in"}
          className="md:text-black text-white  absolute top-6 left-6 z-20 text-2xl"
        >
          <FaArrowLeft />
        </Link>
      </section>
      <section className="py-4 w-full mx-auto max-w-6xl">
        <div className=" w-full px-6 md:px-16 py-10 text-justify ">
          <p className="text-4xl font-bold w-full">
            Our construction and completed projects
          </p>
          <p className="w-full mt-4 text-justify font-medium mx-auto">
            Dive into the heart of our success by clicking on completed
            projects, each pin representing a story of quality and achievement.
            Navigate the pulsating energy of our construction sites with under
            construction projects, promising the creation of tomorrow&apos;s
            dream spaces. Unlock the mystery of what&apos;s to come with
            upcoming projects, as we prepare to redefine the skyline. Seek
            instant gratification by discovering ready-to-move-in projects,
            where your dream home awaits. With just a click, join us in
            sculpting a future where innovation and transparency thrive at
            Habulus Groups.
          </p>
          <br></br>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.4047640778736!2d77.6957189092707!3d12.834946921189873!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6d922d344b7f%3A0x83a64dfe97f35cea!2sHabulus%20Groups%20pvt%20ltd!5e0!3m2!1sen!2sin!4v1715488526941!5m2!1sen!2sin"
            height="450"
            className="w-full"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <div className="w-full h-[2px] p-[1px] mb-6 bg-black/20"></div>
      <iframe
        src="https://www.keypano.com/v/bnbjla_9_26603-1715087445.html"
        height="450"
        className="w-full"
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      <section className=" py-4 w-full mx-auto max-w-6xl">
        <div className="w-full px-6 md:px-16 py-10">
          <p className="font-bold text-4xl mb-3">
            360-Degree Room View: Step Inside Your Future Home with Habulus
            Groups
          </p>
          <p className="font-medium text-justify mb-4 mt-2">
            At Habulus Groups, we believe in offering an immersive and
            interactive experience for our clients. Introducing our
            revolutionary 360-Degree Room View technology, we invite you to step
            inside the rooms of our upcoming projects and explore every corner,
            every feature, and every detail before construction is even
            complete.
          </p>
          <p className="font-bold text-xl mb-3 text-justify">
            Your Vision, Our Technology
          </p>
          <p className="font-medium text-justify mb-4">
            At Habulus Groups, we understand the importance of visualizing your
            dream home. Our 360-Degree Room View technology brings your vision
            to life, ensuring that you have a say in every aspect of your future
            living space.
          </p>
          <p className="font-medium text-justify mb-4">
            Ready to step inside your dream home? Contact us today to schedule a
            personalized 360-Degree Room View experience and witness the future
            of home visualization with Habulus Groups.
          </p>
        </div>
      </section>
    </main>
  );
}

export default View360;
