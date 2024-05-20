import React, { useEffect, useState } from "react";
import CompletedImage from "../assets/completed.jpeg";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import toast from "react-hot-toast";
import axios from "axios";
import { API_LINK, MEDIA_LINK } from "../utils/api";

const CompletedProject = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [visibleProjects, setVisibleProjects] = useState(3);
  useEffect(() => {
    getDataHandler();
  }, []);

  const loadMoreProjects = () => {
    setVisibleProjects((prevVisibleProjects) => prevVisibleProjects + 3);
  };

  const getDataHandler = async () => {
    try {
      const resp = await axios.get(
        `${API_LINK}/project/get-projects?type=Completed Projects`
      );
      setData(resp.data.data);
    } catch (error) {
      console.log("Error in loading Completed Project");
      toast.error("Error in Loading Completed Project");
    }
    setLoading(false);
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
        <img
          src={CompletedImage}
          className="w-full h-[90vh] absolute object-cover"
          alt=""
        />
        <div className="h-[90vh] w-full bg-black/60 absolute flex justify-center items-center flex-col">
          <p className="text-6xl text-white font-bold w-full text-center mx-auto">
            Completed Projects
          </p>
          <p className="text-white w-full text-center mx-auto mt-4">
            Displaying our completed projects to inspire this project{" "}
          </p>
        </div>
      </section>
      <section className="w-full my-10">
        {!loading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 w-[90%] lg:w-full gap-8 mx-auto max-w-6xl">
            {data &&
              data.slice(0, visibleProjects).map((item) => {
                return (
                  <Link
                    to={`/project/${item._id}?type=completed-projects`}
                    key={item._id}
                  >
                    <div className="w-full h-[320px] overflow-hidden group relative shadow-xl">
                      <img
                        src={MEDIA_LINK + item.image}
                        className="w-full h-[320px] object-cover rounded-md"
                      />
                      <div className="absolute bottom-0 p-4 translate-y-72 group-hover:translate-y-0 rounded-t-2xl bg-white w-full z-20 transition-animate">
                        <p className="font-semibold">{item.title}</p>
                        <p className="line-clamp-2 text-xs mt-1">
                          {item.description}
                        </p>
                        <span className="uppercase bg-[#d7c37d] text-xs text-white font-medium px-4 py-1 rounded-full absolute -top-3 right-5 ">
                          Completed Project
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
        )}
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
      </section>
      <section className="max-w-6xl mx-auto pb-10">
        <div className="w-full md:w-[90%] mx-auto bg-black md:bg-white shadow-2xl rounded-3xl md:border px-10 py-14">
          <p className="font-bold text-2xl uppercase mb-3 text-white md:text-black">
            Our Completed Projects: A Testament to Excellence
          </p>
          <p className="font-medium text-white md:text-black text-justify mb-6">
            At Habulus Groups, we take pride in turning dreams into reality. Our
            commitment to quality craftsmanship, innovative design, and customer
            satisfaction shines through in every completed project. Today, we
            are thrilled to announce the successful sell-out of all apartments
            in our latest development.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to="/view-2D3D"
              className="border bg-white md:bg-black  border-black md:border-white text-black md:text-white px-6 py-2 rounded-md"
            >
              Explore Now
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CompletedProject;
