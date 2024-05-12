import React, { useEffect, useState } from "react";
import ImageCard from "../../components/ImageCard";
import toast from "react-hot-toast";
import axios from "axios";
import { API_LINK } from "../../utils/api";
import Loading from "../../components/Loading";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";

const LatestUpdate = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    GetLatestUpdate();
  }, []);

  const GetLatestUpdate = async () => {
    try {
      const resp = await axios.get(
        `${API_LINK}/latestUpdate/get-latestUpdates`
      );
      setData(resp.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.dismiss();
      toast.error("Something Went Wrong!");
    }
  };
  const DeleteLatestUpdate = async (id) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this latest update?"
      );
      if (confirmed) {
        toast.loading("Deleting...");
        const resp = await axios.delete(
          `${API_LINK}/latestUpdate/delete-latestUpdate/${id}`
        );
        GetLatestUpdate();
        toast.dismiss();
        toast.success("Latest Update Deleted");
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
        Latest Update
      </p>
      {loading && <Loading />}
      <Link
        to={"/dashboard/latest-update/modify"}
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
                  editpath={`/dashboard/latest-update/modify/${item._id}`}
                  image={item.image}
                  deleteHandler={DeleteLatestUpdate}
                />
              );
            })}
        </div>
      )}
    </section>
  );
};

export default LatestUpdate;
