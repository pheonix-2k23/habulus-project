import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_LINK } from "../../utils/api";
import toast from "react-hot-toast";
import { Link, useLocation } from "react-router-dom";
import Loading from "../../components/Loading";
import { IoAdd } from "react-icons/io5";
import ImageCard from "../../components/ImageCard";

const Project = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const type = location?.search?.split("=")[1]?.replaceAll("-", " ");

  useEffect(() => {
    GetProject();
  }, [location]);

  const GetProject = async () => {
    try {
      const resp = await axios.get(
        `${API_LINK}/project/get-projects?type=${type}`
      );
      setData(resp.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.dismiss();
      toast.error("Something Went Wrong!");
    }
  };
  const DeleteProject = async (id) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this project?"
      );
      if (confirmed) {
        toast.loading("Deleting...");
        const resp = await axios.delete(
          `${API_LINK}/project/delete-project/${id}`
        );
        GetProject();
        toast.dismiss();
        toast.success("Project Deleted");
      } else {
        toast.dismiss();
      }
    } catch (error) {
      console.log(error);
      toast.dismiss();
      toast.error("Something Went Wrong!");
    }
  };

  return (
    <section className="bg-[#212020] h-[100vh] w-full md:w-[80%] py-10  overflow-y-scroll">
      <p className="mb-8 text-white font-semibold text-2xl text-center">
        {type}
      </p>
      {loading && <Loading />}
      <Link
        to={`/dashboard/project/modify?type=${type.replaceAll(" ", "-")}`}
        className="absolute bottom-10 right-10 bg-white text-black p-3 rounded-full"
      >
        <IoAdd size={28} />
      </Link>
      {!loading && (
        <div className="w-full flex justify-center items-center flex-wrap gap-6">
          {data &&
            data.map((item) => {
              return (
                <ImageCard
                  id={item._id}
                  key={item._id}
                  editpath={`/dashboard/project/modify/${
                    item._id
                  }?type=${type.replaceAll(" ", "-")}`}
                  image={item.image}
                  deleteHandler={DeleteProject}
                  title={item.title}
                />
              );
            })}
        </div>
      )}
    </section>
  );
};

export default Project;
