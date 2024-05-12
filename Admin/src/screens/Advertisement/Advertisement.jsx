import React, { useEffect, useState } from "react";
import ImageCard from "../../components/ImageCard";
import toast from "react-hot-toast";
import axios from "axios";
import { API_LINK } from "../../utils/api";
import Loading from "../../components/Loading";
import { IoAdd } from "react-icons/io5";
import { Link } from "react-router-dom";

const Advertisement = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    GetAdvertisement();
  }, []);

  const GetAdvertisement = async () => {
    try {
      const resp = await axios.get(
        `${API_LINK}/advertisement/get-advertisements`
      );
      setData(resp.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.dismiss();
      toast.error("Something Went Wrong!");
    }
  };

  const DeleteAdvertisement = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this advertisement?"
    );
    if (!confirmed) {
      return;
    }

    try {
      toast.loading("Deleting...");
      const resp = await axios.delete(
        `${API_LINK}/advertisement/delete-advertisement/${id}`
      );
      GetAdvertisement();
      toast.dismiss();
      toast.success("Advertisement Deleted");
    } catch (error) {
      console.log(error);
      toast.dismiss();
      toast.error("Something Went Wrong!");
    }
  };

  return (
    <section className="bg-[#212020] h-[100vh] w-full md:w-[80%] py-10  overflow-y-scroll">
      <p className="mb-3 text-white font-semibold text-2xl text-center">
        Advertisement
      </p>
      <p className="mb-10 text-white text-center">Maximum 3 Advertisements</p>
      {loading && <Loading />}
      {data && data.length !== 3 && (
        <Link
          to={"/dashboard/advertisement/modify"}
          className="absolute bottom-10 right-10 bg-white text-black p-3 rounded-full"
        >
          <IoAdd size={28} />
        </Link>
      )}
      {!loading && (
        <div className="w-full flex justify-center items-center flex-wrap gap-6">
          {data &&
            data.map((item) => {
              return (
                <ImageCard
                  id={item._id}
                  key={item._id}
                  editpath={`/dashboard/advertisement/modify/${item._id}`}
                  image={item.image}
                  deleteHandler={DeleteAdvertisement}
                  edit={false}
                />
              );
            })}
        </div>
      )}
    </section>
  );
};

export default Advertisement;
