import React, { useState } from "react";
import UploadFile from "../../components/uploadFile";
import toast from "react-hot-toast";
import { API_LINK } from "../../utils/api";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const Advertisement = () => {
  const [file, setFile] = useState([]);
  const navigate = useNavigate();
  const handleFileChange = (file) => {
    setFile(file);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Processing...");
    try {
      const formDataToSend = new FormData();
      if (file) {
        formDataToSend.append("image", file);
      }
      const resp = await axios.post(
        `${API_LINK}/advertisement/add-advertisement`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      toast.dismiss();
      toast.success("Success");
      navigate("/dashboard/advertisement");
    } catch (error) {
      toast.dismiss();
      console.log(error);
      toast.error("Failed to save data");
    }
  };

  return (
    <form className="flex relative justify-center items-center flex-col w-full bg-[#212020] md:w-[80%] min-h-full">
      <UploadFile setFile={handleFileChange} />
      <Link
        to={`/dashboard/advertisement`}
        className="absolute top-10 left-0 text-white p-3 "
      >
        <IoArrowBack size={25} />
      </Link>
      <button
        type="submit"
        onClick={handleSubmit}
        className="mt-8 bg-[#437730] text-[#212020] font-semibold py-2 px-4 rounded w-[10%] md:w-[15%] mx-auto block"
      >
        Publish
      </button>
    </form>
  );
};

export default Advertisement;
