import React from "react";
import { useState, useEffect } from "react";
import Title from "./../../shared/Project/Title";
import { API_LINK, MEDIA_LINK } from "./../../utils/api";
import axios from "axios";
import { FiDownload } from "react-icons/fi";

const Broucher = ({ id }) => {
  const [data, setData] = useState();
  const [project, setProject] = useState();

  useEffect(() => {
    const getProject = async () => {
      try {
        const resp = await axios.get(`${API_LINK}/project/get-project/${id}`);
        setProject(resp.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    const GetDataHandler = async () => {
      try {
        const resp = await axios.get(`${API_LINK}/brochure/get-brochure/${id}`);
        setData(resp.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    id && GetDataHandler();
    id && getProject();
  }, [id]);

  return (
    <section className="flex flex-col justify-start items-center h-[50vh] lg:h-[70vh] py-24 px-4">
      <div className="w-full text-center mb-10">
        <Title title={"BROUCHER"} />
      </div>
      {data && project && (
        <a
          className="bg-[#e2e2e2] text-black max-w-6xl py-4 px-8 w-[90%] md:w-[80%] rounded-md shadow-md flex justify-between items-center cursor-pointer hover:scale-105 transition-animate"
          href={MEDIA_LINK + data.pdf}
          target="_blank"
        >
          <p className="font-semibold md:text-xl">{project.title}</p>
          <FiDownload size={22} />
        </a>
      )}
    </section>
  );
};

export default Broucher;
