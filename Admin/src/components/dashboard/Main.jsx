import React, { useEffect, useState } from "react";
import UploadFile from "../uploadFile";
import axios from "axios";
import { API_LINK } from "../../utils/api";
import toast from "react-hot-toast";
import Title from "./Title";
const Main = ({ setId, id, type }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    file: null,
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (file) => {
    setFormData((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Uploading!!");
    try {
      const sendformData = new FormData();
      sendformData.append("title", formData.title);
      sendformData.append("description", formData.description);
      sendformData.append("location", formData.location);
      if (formData.file) {
        sendformData.append("image", formData.file);
      }
      sendformData.append("type", type);
      if (id) {
        await axios.put(
          `${API_LINK}/project/update-project/${id}`,
          sendformData
        );
      } else {
        const resp = await axios.post(
          `${API_LINK}/project/add-project`,
          sendformData
        );
        setId(resp.data.data._id);
      }
      toast.dismiss();
      toast.success("Changes Are Saved!");
    } catch (error) {
      toast.dismiss();
      console.log(error);
    }
  };

  useEffect(() => {
    id && getDataHandler();
  }, [id]);

  const getDataHandler = async () => {
    try {
      const resp = await axios.get(
        `${API_LINK}/project/get-project/${id}`,
        formData
      );
      console.log(resp.data);
      setFormData(resp.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="w-[90%] md:w-[50%] mt-10 mx-auto" onSubmit={handleSubmit}>
      <Title title={"Project Details"} />
      <UploadFile setFile={handleFileChange} image={formData?.image} />
      <div className="flex justify-start items-center flex-col mt-6">
        <label htmlFor="title" className="w-full text-white/70 mb-2">
          Project Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData?.title}
          onChange={handleChange}
          className="w-full bg-[#4d4d4d] p-2 rounded text-white/70 caret-white outline-none"
        />
      </div>
      <div className="flex justify-start items-center flex-col mt-3">
        <label htmlFor="description" className="w-full text-white/70 mb-2">
          Project Description
        </label>
        <input
          type="text"
          name="description"
          id="description"
          value={formData?.description}
          onChange={handleChange}
          className="w-full bg-[#4d4d4d] p-2 rounded text-white/70 caret-white outline-none"
        />
      </div>
      <div className="flex justify-start items-center flex-col mt-3">
        <label htmlFor="location" className="w-full text-white/70 mb-2">
          Location
        </label>
        <input
          type="text"
          name="location"
          id="location"
          value={formData?.location}
          onChange={handleChange}
          className="w-full bg-[#4d4d4d] p-2 rounded text-white/70 caret-white outline-none"
        />
      </div>
      <button
        type="submit"
        className="mt-6 bg-[#437730] text-[#212020] font-semibold py-2 px-4 rounded w-[50%] md:w-[30%] mx-auto block"
      >
        Save Changes
      </button>
    </form>
  );
};

export default Main;
