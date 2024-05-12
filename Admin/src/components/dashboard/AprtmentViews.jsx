import React, { useEffect, useState } from "react";
import UploadFile from "../uploadFile";
import axios from "axios";
import { API_LINK } from "../../utils/api";
import toast from "react-hot-toast";
import MultipleUploadFile from "../multipleUploadFile";
import Title from "./Title";

const AprtmentViews = ({ id }) => {
  const facilitiesList = [
    "Security",
    "Lift",
    "Car Parking",
    "Park",
    "Playground",
    "Swiming Pool",
  ];
  const [plans, setPlans] = useState({
    image: "",
    file: null,
    description: "",
  });

  const [views, setViews] = useState({
    images: [],
  });

  const [viewsFile, setViewsFile] = useState([]);

  const [facilitiesdata, setFacilities] = useState({
    image: "",
    file: null,
    facilities: [],
  });

  const handlePlansFileChange = (file) => {
    setPlans((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const handleViewsFileChange = (files) => {
    setViewsFile((prevFiles) => [...prevFiles, ...files]);
  };

  const handleFacilitiesFileChange = (file) => {
    setFacilities((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const changeFacility = (e) => {
    const { value, checked } = e.target;
    if (!facilitiesdata?.facilities) {
      setFacilities((prevData) => ({
        ...prevData,
        facilities: [],
      }));
    }
    if (checked) {
      setFacilities((prevData) => ({
        ...prevData,
        facilities: [...prevData.facilities, value],
      }));
    } else {
      setFacilities((prevData) => ({
        ...prevData,
        facilities: prevData.facilities.filter(
          (facility) => facility !== value
        ),
      }));
    }
  };

  useEffect(() => {
    id && getDataHandler();
  }, [id]);

  const getDataHandler = async () => {
    try {
      const [plansResp, viewsResp, facilitiesResp] = await Promise.all([
        axios.get(`${API_LINK}/apartment/plan/get-plan/${id}`),
        axios.get(`${API_LINK}/apartment/views/get-views/${id}`),
        axios.get(`${API_LINK}/apartment/facilities/get-facilities/${id}`),
      ]);
      setPlans(plansResp.data.data);
      setViews(viewsResp.data.data);
      setFacilities(facilitiesResp.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Uploading!!");
    try {
      const plansFormData = new FormData();
      plansFormData.append("description", plans.description);
      if (plans.file) {
        plansFormData.append("image", plans.file);
      }
      await axios.post(
        `${API_LINK}/apartment/plan/modify-plan/${id}`,
        plansFormData
      );
      const viewsFormData = new FormData();
      if (viewsFile) {
        viewsFile?.forEach((file) => {
          viewsFormData.append("images", file);
        });
      }
      await axios.post(
        `${API_LINK}/apartment/views/modify-views/${id}`,
        viewsFormData
      );

      const facilitiesFormData = new FormData();
      facilitiesdata?.facilities?.forEach((facility) => {
        facilitiesFormData.append("facilities", facility);
      });
      if (facilitiesdata.file) {
        facilitiesFormData.append("image", facilitiesdata.file);
      }
      await axios.post(
        `${API_LINK}/apartment/facilities/modify-facilities/${id}`,
        facilitiesFormData
      );

      toast.dismiss();
      toast.success("Changes Are Saved!");
    } catch (error) {
      toast.dismiss();
      console.log(error);
    }
  };

  return (
    <form className="w-[90%] md:w-[50%] mx-auto my-10" onSubmit={handleSubmit}>
      <Title title={"Plans Description"} />
      <UploadFile setFile={handlePlansFileChange} image={plans?.image} />
      <div className="flex justify-start items-center flex-col mt-6">
        <input
          type="text"
          name="title"
          id="title"
          value={plans?.description}
          onChange={(e) => setPlans({ ...plans, description: e.target.value })}
          className="w-full bg-[#4d4d4d] p-2 rounded text-white/70 caret-white outline-none"
        />
      </div>
      <Title title={"Views of Appartment"} />
      <MultipleUploadFile
        setFiles={handleViewsFileChange}
        files={views?.images}
        max={5}
      />
      <p className="w-full text-white/70 mb-6 my-3 text-center">
        You can add 5 images
      </p>
      <Title title={"Facilities"} />
      <div className="flex justify-start items-center flex-col my-8">
        <div className="grid grid-cols-3 place-items-start gap-2 w-full">
          {facilitiesList &&
            facilitiesList.map((item, index) => {
              return (
                <div
                  className="flex justify-center items-center w-[1/4]"
                  key={item}
                >
                  <input
                    type="checkbox"
                    name={item}
                    id={item}
                    value={item}
                    checked={facilitiesdata?.facilities?.includes(item)}
                    onChange={changeFacility}
                    className="bg-[#4d4d4d] rounded text-white/70 caret-white outline-none"
                  />
                  <label htmlFor={item} className="text-white/70 ml-2">
                    {item}
                  </label>
                </div>
              );
            })}
        </div>
      </div>
      <UploadFile
        setFile={handleFacilitiesFileChange}
        image={facilitiesdata?.image}
      />
      <button
        type="submit"
        className="mt-6 bg-[#437730] text-[#212020] font-semibold py-2 px-4 rounded w-[50%] md:w-[30%] mx-auto block"
      >
        Save Changes
      </button>
    </form>
  );
};

export default AprtmentViews;
