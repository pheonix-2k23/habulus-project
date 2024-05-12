import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_LINK } from "../../utils/api";
import toast from "react-hot-toast";
import UploadFile from "../../components/uploadFile";
import { useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const ModifyLatestUpdate = () => {
  const params = useParams();
  const updatesList = [
    "Construction",
    "Updates",
    "Interior Design",
    "Success",
    "Villas",
    "Completion",
    "Under Construction",
    "Ready To Move In",
    "Apartments",
  ];

  const [formData, setFormData] = useState({
    image: "",
    title: "",
    updates: [],
  });

  const [file, setFile] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (file) => {
    setFile(file);
  };

  const handleCheckboxChange = (update) => {
    const updatedUpdates = [...formData.updates];
    if (updatedUpdates.includes(update)) {
      updatedUpdates.splice(updatedUpdates.indexOf(update), 1);
    } else {
      updatedUpdates.push(update);
    }
    setFormData((prevData) => ({
      ...prevData,
      updates: updatedUpdates,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Processing...");
    try {
      const formDataToSend = new FormData();
      if (file) {
        formDataToSend.append("image", file);
      }
      formDataToSend.append("title", formData.title);
      formData.updates.forEach((update) => {
        formDataToSend.append("updates[]", update);
      });

      let resp;

      if (params.id) {
        resp = await axios.put(
          `${API_LINK}/latestUpdate/update-latestUpdate/${params.id}`,
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        resp = await axios.post(
          `${API_LINK}/latestUpdate/add-latestUpdate`,
          formDataToSend,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }
      setFormData(resp.data.data);
      toast.dismiss();
      toast.success("Success");
    } catch (error) {
      toast.dismiss();
      console.log(error);
      toast.error("Failed to save data");
    }
  };

  useEffect(() => {
    const getDataHandler = async () => {
      try {
        const resp = await axios.get(
          `${API_LINK}/latestUpdate/get-latestUpdate/${params.id}`
        );
        setFormData(resp.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    params.id && getDataHandler();
  }, [params.id]);

  return (
    <form
      className="w-full  relative md:w-[80%] flex justify-center items-center flex-col bg-[#212020]  min-h-full"
      onSubmit={handleSubmit}
    >
      <Link
        to={`/dashboard/latest-update`}
        className="absolute top-10 left-0 text-white p-3 "
      >
        <IoArrowBack size={25} />
      </Link>
      <UploadFile setFile={handleFileChange} image={formData?.image} />
      <div className="w-full flex justify-start items-center flex-col mt-6">
        <label htmlFor="title" className="w-[50%] text-white/70 mb-2">
          Project Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          value={formData?.title}
          onChange={handleChange}
          className="w-[50%] bg-[#4d4d4d] p-2 rounded text-white/70 caret-white outline-none"
        />
      </div>
      <div className=" w-full text-left flex justify-start items-center flex-col mt-3">
        <label className="text-white/70 w-[50%]  mt-6 mb-4">Updates</label>
        <div className="grid grid-cols-3 gap-5 w[50%]">
          {updatesList &&
            updatesList.map((update) => (
              <label key={update} className="inline-block text-white/70">
                <input
                  type="checkbox"
                  name={update}
                  value={update}
                  checked={formData.updates.includes(update)}
                  onChange={() => handleCheckboxChange(update)}
                  className="mr-2"
                />
                {update}
              </label>
            ))}
        </div>
      </div>
      <button
        type="submit"
        className="mt-8 bg-[#437730] text-[#212020] font-semibold py-2 px-4 rounded w-[10%] md:w-[15%] mx-auto block"
      >
        {params.id ? "Save Changes" : "Publish"}
      </button>
    </form>
  );
};

export default ModifyLatestUpdate;
