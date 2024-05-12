import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_LINK } from "../../utils/api";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const ModifyTestimonial = () => {
  const [formData, setFormData] = useState({
    link: "",
    description: "",
  });

  const params = useParams();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let resp;
      if (params.id) {
        resp = await axios.patch(
          `${API_LINK}/testimonial/update-testimonial/${params.id}`,
          formData
        );
      } else {
        resp = await axios.post(
          `${API_LINK}/testimonial/add-testimonial`,
          formData
        );
      }
      setFormData({
        link: "",
        description: "",
      });
      toast.success("Data added successfully");
      navigate("/dashboard/testimonial");
    } catch (error) {
      console.log(error);
      toast.error("Failed to add data");
    }
  };

  useEffect(() => {
    getDataHandler();
  }, []);

  const getDataHandler = async () => {
    try {
      const resp = await axios.get(
        `${API_LINK}/testimonial/get-testimonial/${params.id}`
      );
      setFormData(resp.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      className="flex relative justify-center flex-col items-center w-full md:w-[80%] bg-[#212020] min-h-full"
      onSubmit={handleSubmit}
    >
      <Link
        to={`/dashboard/testimonial`}
        className="absolute top-10 left-0 text-white p-3 "
      >
        <IoArrowBack size={25} />
      </Link>
      <div className="w-full flex justify-start items-center flex-col mt-2 my-2">
        <label htmlFor="link" className="w-[50%] text-white/70 mb-2">
          Link
        </label>
        <input
          type="text"
          name="link"
          id="link"
          value={formData.link}
          onChange={handleChange}
          className="w-[50%] bg-[#4d4d4d] p-2 rounded text-white/70 caret-white outline-none"
        />
      </div>
      <div className="w-full flex justify-start items-center flex-col mt-6">
        <label htmlFor="description" className="w-[50%] text-white/70 mb-2">
          Description
        </label>
        <input
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
          className="w-[50%] bg-[#4d4d4d] p-2 rounded text-white/70 caret-white outline-none"
        />
      </div>
      <button
        type="submit"
        className="mt-6 bg-[#437730] text-[#212020] font-semibold py-3 px-4 rounded w-[10%] md:w-[15%] mx-auto block"
      >
        Publish
      </button>
    </form>
  );
};

export default ModifyTestimonial;
