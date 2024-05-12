import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_LINK } from "../../utils/api";
import toast from "react-hot-toast";
import Loading from "../../components/Loading";
import { Link, useNavigate } from "react-router-dom";
import { MdEdit, MdOutlineDeleteOutline } from "react-icons/md";
import { IoAdd } from "react-icons/io5";

const Testimonial = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    GetTestimonial();
  }, []);

  const GetTestimonial = async () => {
    try {
      const resp = await axios.get(`${API_LINK}/testimonial/get-testimonials`);
      setData(resp.data.data);

      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.dismiss();
      toast.error("Something Went Wrong!");
    }
  };

  const DeleteTestiomonial = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this testimonial?"
    );
    if (!confirmed) {
      return;
    }

    try {
      toast.loading("Deleting...");
      const resp = await axios.delete(
        `${API_LINK}/testimonial/delete-testimonial/${id}`
      );
      GetTestimonial();

      toast.dismiss();
      toast.success("Testimonial Deleted");
    } catch (error) {
      console.log(error);
      toast.dismiss();
      toast.error("Something Went Wrong!");
    }
  };

  function getYoutubeThumbnailUrl(url) {
    try {
      const videoId = url.match(
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/
      )[1];
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
      return thumbnailUrl;
    } catch (error) {
      return "";
    }
  }

  return (
    <section className="bg-[#212020] h-[100vh] w-full md:w-[80%] py-10 overflow-y-scroll">
      <p className="mb-8 text-white font-semibold text-2xl text-center">
        Testimonial
      </p>
      {loading && <Loading />}
      {!loading && (
        <div className="w-full flex justify-center items-center flex-wrap gap-6">
          {data &&
            data.map((item) => {
              return (
                <div
                  className="h-[170px] relative cursor-pointer"
                  key={item._id}
                >
                  <div className="absolute right-2 top-2">
                    <button
                      onClick={() =>
                        navigate(`/dashboard/testimonial/modify/${item._id}`)
                      }
                      className="bg-white p-2 rounded-md shadow hover:bg-blue-600 hover:text-white transition-animate mr-3"
                    >
                      <MdEdit />
                    </button>
                    <button
                      className="bg-white p-2 rounded-md shadow hover:bg-red-600 hover:text-white transition-animate"
                      onClick={() => DeleteTestiomonial(item._id)}
                    >
                      <MdOutlineDeleteOutline />
                    </button>
                  </div>
                  <img
                    src={getYoutubeThumbnailUrl(item.link)}
                    className="h-[170px] object-cover rounded-md w-full"
                  />
                </div>
              );
            })}
        </div>
      )}
      <Link
        to={"/dashboard/testimonial/modify"}
        className="absolute bottom-10 right-10 bg-white text-black p-3 rounded-full"
      >
        <IoAdd size={28} />
      </Link>
    </section>
  );
};

export default Testimonial;
