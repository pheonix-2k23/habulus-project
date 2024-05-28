import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import axios from "axios";
import { API_LINK, MEDIA_LINK } from "../utils/api";
import toast from "react-hot-toast";
import Video from "../assets/video/under-construction.mp4";

const UnderConstruction = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [visibleProjects, setVisibleProjects] = useState(3);

  useEffect(() => {
    getDataHandler();
  }, []);

  const getDataHandler = async () => {
    try {
      const resp = await axios.get(
        `${API_LINK}/project/get-projects?type=Under Construction`
      );
      setData(resp.data.data);
    } catch (error) {
      console.log("Error in loading Under Construction");
      toast.error("Error in Loading Under Construction");
    }
    setLoading(false);
  };

  const showLessProjects = () => {
    setVisibleProjects(3);
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  return (
    <main className="bg-black md:bg-white">
      <section className="h-[90vh] mt-12 w-full relative">
        <Link
          to={"/"}
          className="text-white absolute top-6 left-6 z-20 text-2xl"
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
        <div className="relative mx-auto h-full w-[90%] flex justify-end items-end flex-col z-10 pb-14">
          <p className="text-3xl md:text-4xl text-white font-bold md:w-[70%] text-center md:text-right ml-auto leading-[40px] md:leading-[50px]">
            Sneak Peek: Your Future Home Unfolding - Under Construction with
            Habulus Groups
          </p>
          <p className="text-white w-full text-center md:text-right ml-auto mt-4">
            Displaying our Under Construction projects to dream your home
          </p>
        </div>
      </section>
      <section className="w-full my-10">
        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[90%] lg:w-full gap-8 mx-auto max-w-6xl">
            {" "}
            {data &&
              data.map((item) => {
                return (
                  <Link
                    to={`/project/${item._id}?type=under-construction`}
                    key={item._id}
                  >
                    <div className="w-full h-[320px] overflow-hidden group relative shadow-xl">
                      <img
                        src={MEDIA_LINK + item.image}
                        className="w-full h-[320px] object-cover rounded-md"
                      />
                      <div className="absolute bottom-0 p-4 lg:translate-y-72 lg:group-hover:translate-y-0 rounded-t-2xl bg-white w-full z-20 transition-animate">
                        <p className="font-semibold">{item.title}</p>
                        <p className="line-clamp-2 text-xs mt-1">
                          {item.description}
                        </p>
                        <span className="uppercase bg-[#ff4747] text-xs text-white font-medium px-4 py-1 rounded-full absolute -top-3 right-5 ">
                          Under Construction
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        )}
      </section>
      {data && data.length > visibleProjects && (
        <button
          onClick={loadMoreProjects}
          className="border block mx-auto mt-10 bg-black border-white text-white px-6 py-2 rounded-md"
        >
          Load More
        </button>
      )}
      {data && data.length > 3 && visibleProjects >= data?.length && (
        <button
          onClick={showLessProjects}
          className="border block mx-auto mt-10 bg-black border-white text-white px-6 py-2 rounded-md"
        >
          Show Less
        </button>
      )}
      <section className="max-w-6xl mx-auto">
        <div className="w-[100%] mx-auto bg-black md:bg-white px-4 md:px-10 py-14 ">
          <p className="font-bold text-3xl md:text-4xl text-white md:text-black uppercase mb-5">
            Embark on Your Home&apos;s Journey with Habulus Groups
          </p>
          <p className="font-medium text-justify text-white md:text-black mb-2">
            At Habulus Groups, we believe that the magic of creating your dream
            home lies not only in the finished product but also in the journey
            of its construction. We&apos;re thrilled to provide an exclusive
            glimpse into our latest under-construction project, where every
            brick laid and beam secured is a step towards turning your dream
            into reality. symphony of innovation, craftsmanship, and thoughtful
            design. Nestled in [Location], this upcoming residential masterpiece
            is set to redefine modern living. From groundbreaking to completion,
            we&apos;re committed to transparency and excellence every step of
            the way.
          </p>
        </div>
      </section>
    </main>
  );
};

export default UnderConstruction;
