import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import axios from "axios";
import { API_LINK, MEDIA_LINK } from "../utils/api";
import toast from "react-hot-toast";
import Video from "../assets/video/upcoming-projects.mp4";

const UpcomingProjects = () => {
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
        `${API_LINK}/project/get-projects?type=Upcoming projects`
      );
      setData(resp.data.data);
    } catch (error) {
      console.log("Error in loading Upcoming Projects");
      toast.error("Error in Loading Upcoming Projects");
    }
    setLoading(false);
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  const showLessProjects = () => {
    setVisibleProjects(3);
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
        <div className="relative mx-auto h-full w-[90%] flex justify-center md:justify-start items-end flex-col z-10 pt-14">
          <p className=" text-3xl md:text-5xl text-white font-bold w-full text-center md:text-left mx-auto">
            Exciting Upcoming Projects by Habulus Groups
          </p>
          <p className="text-white w-full text-center md:text-left mx-auto mt-4">
            Just think how your dream home look like
          </p>
        </div>
      </section>
      <section className="w-full my-10">
        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[90%] lg:w-full gap-8 mx-auto max-w-6xl">
            {" "}
            {data &&
              data.slice(0, visibleProjects).map((item) => {
                return (
                  <Link
                    to={`/project/${item._id}?type=upcoming-projects`}
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
                          Upcoming Projects
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
        <div className="w-full mx-auto bg-black md:bg-white text-white md:text-black px-4 md:px-10 py-14">
          <p className="font-bold text-3xl md:text-4xl uppercase mb-3">
            Elevate Your Living Experience with Our Future Offerings
          </p>
          <p className="font-medium text-justify mb-2">
            At Habulus Groups, we&apos;re always looking ahead to create spaces
            that transcend the ordinary and redefine contemporary living. Get
            ready to embark on a journey with us as we unveil our upcoming
            projects, each designed to elevate your lifestyle and set new
            benchmarks in architectural excellence.
          </p>
        </div>
      </section>
    </main>
  );
};

export default UpcomingProjects;
