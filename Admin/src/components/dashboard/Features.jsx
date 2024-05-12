import React, { useEffect, useState } from "react";
import UploadFile from "../uploadFile";
import axios from "axios";
import { API_LINK } from "../../utils/api";
import Title from "./Title";
import toast from "react-hot-toast";

const Features = ({ id }) => {
  const advanceFeaturesList = [
    "Hospital",
    "School",
    "College",
    "Theatre",
    "Playground",
    "Swimming Pool",
  ];

  const [facing, setFacing] = useState({
    image: "",
    description: "",
    file: null,
  });

  const [bhk, setBHK] = useState({
    image: "",
    file: null,
    bhk: [],
  });

  const [floor, setFloor] = useState({
    image: "",
    description: "",
    file: null,
  });

  const [advanceFeatures, setAdvanceFeatures] = useState({
    features: [],
    image: "",
    file: null,
  });

  const handleFacingFileChange = (file) => {
    setFacing((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const handleBHKFileChange = (file) => {
    setBHK((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const handleFloorFileChange = (file) => {
    setFloor((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const handleAdvanceFeatureFileChange = (file) => {
    setAdvanceFeatures((prevData) => ({
      ...prevData,
      file: file,
    }));
  };

  const handleAdvanceFeatureChange = (e) => {
    const { value, checked } = e.target;
    if (!advanceFeatures.features) {
      setAdvanceFeatures((prevData) => ({
        ...prevData,
        features: [],
      }));
    }
    if (checked) {
      setAdvanceFeatures((prevData) => ({
        ...prevData,
        features: [...prevData.features, value],
      }));
    } else {
      setAdvanceFeatures((prevData) => ({
        ...prevData,
        features: prevData.features.filter((feature) => feature !== value),
      }));
    }
  };

  useEffect(() => {
    id && getDataHandler();
  }, [id]);

  const getDataHandler = () => {
    const fetchFloorData = axios.get(
      `${API_LINK}/features/floor/get-floor/${id}`
    );
    const fetchBHKData = axios.get(`${API_LINK}/features/bhk/get-bhk/${id}`);
    const fetchFacingData = axios.get(
      `${API_LINK}/features/facing/get-facing/${id}`
    );
    const fetchAdvanceFeaturesData = axios.get(
      `${API_LINK}/features/advanceFeature/get-advanceFeature/${id}`
    );

    Promise.all([
      fetchFloorData,
      fetchBHKData,
      fetchFacingData,
      fetchAdvanceFeaturesData,
    ])
      .then((responses) => {
        const [floorResp, bhkResp, facingResp, advanceFeaturesResp] = responses;
        setFloor(floorResp.data.data);
        setBHK(bhkResp.data.data);
        setFacing(facingResp.data.data);
        setAdvanceFeatures(advanceFeaturesResp.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeRadioBhk = (e) => {
    const { value, checked } = e.target;
    if (!bhk.bhk) {
      setBHK((prevData) => ({
        ...prevData,
        bhk: [],
      }));
    }
    if (checked) {
      setBHK((prevData) => ({
        ...prevData,
        bhk: [...prevData.bhk, value],
      }));
    } else {
      setBHK((prevData) => ({
        ...prevData,
        bhk: prevData.bhk?.filter((bhkItem) => bhkItem !== value),
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    toast.loading("Uploading!!");
    try {
      const facingFormData = new FormData();
      facingFormData.append("description", facing.description);
      if (facing.file) {
        facingFormData.append("image", facing.file);
      }
      await axios.post(
        `${API_LINK}/features/facing/modify-facing/${id}`,
        facingFormData
      );

      const bhkFormData = new FormData();
      if (bhk.file) {
        bhkFormData.append("image", bhk.file);
      }
      bhk.bhk.forEach((bhkItem) => {
        bhkFormData.append("bhk", bhkItem);
      });
      await axios.post(
        `${API_LINK}/features/bhk/modify-bhk/${id}`,
        bhkFormData
      );

      const floorFormData = new FormData();
      floorFormData.append("description", floor.description);
      if (floor.file) {
        floorFormData.append("image", floor.file);
      }
      await axios.post(
        `${API_LINK}/features/floor/modify-floor/${id}`,
        floorFormData
      );

      const advanceFeaturesFormData = new FormData();
      if (advanceFeatures?.file) {
        advanceFeaturesFormData.append("image", advanceFeatures?.file);
      }
      advanceFeatures.features?.forEach((feature) => {
        advanceFeaturesFormData.append("features", feature);
      });
      await axios.post(
        `${API_LINK}/features/advanceFeature/modify-advanceFeature/${id}`,
        advanceFeaturesFormData
      );
      toast.dismiss();
      toast.success("Changes Are Saved!");
    } catch (error) {
      toast.dismiss();
      console.log(error);
      toast.error("Error occurred while saving changes!");
    }
  };

  return (
    <form className="w-[90%] md:w-[50%] mx-auto my-10" onSubmit={handleSubmit}>
      <Title title={"Facing of Building"} />
      <UploadFile setFile={handleFacingFileChange} image={facing?.image} />
      <div className="flex justify-start items-center flex-col my-8">
        <input
          type="text"
          name="facing"
          id="facing"
          value={facing?.description}
          onChange={(e) =>
            setFacing({ ...facing, description: e.target.value })
          }
          className="w-full bg-[#4d4d4d] p-2 rounded text-white/70 caret-white outline-none"
        />
      </div>
      <Title title={"BHK Information"} />
      <UploadFile setFile={handleBHKFileChange} image={bhk?.image} />
      <div className="flex justify-start items-center flex-col my-8">
        <div className="flex justify-between items-center w-full">
          {Array(4)
            .fill(0)
            .map((_, index) => {
              return (
                <div
                  className="flex justify-center items-center w-[1/4]"
                  key={index}
                >
                  <input
                    type="checkbox"
                    id={`${index + 1} BHK`}
                    name={`${index + 1} BHK`}
                    value={`${index + 1} BHK`}
                    checked={bhk?.bhk?.includes(`${index + 1} BHK`)}
                    onChange={changeRadioBhk}
                    className="bg-[#4d4d4d] rounded text-white/70 caret-white outline-none"
                  />
                  <label
                    htmlFor={`${index + 1} BHK`}
                    className="text-white/70 ml-2"
                  >
                    {`${index + 1} BHK`}
                  </label>
                </div>
              );
            })}
        </div>
      </div>
      <Title title={"Floor"} />
      <UploadFile setFile={handleFloorFileChange} image={floor?.image} />
      <div className="flex justify-start items-center flex-col my-8">
        <input
          type="text"
          name="floor"
          id="floor"
          value={floor?.description}
          onChange={(e) => setFloor({ ...floor, description: e.target.value })}
          className="w-full bg-[#4d4d4d] p-2 rounded text-white/70 caret-white outline-none"
        />
      </div>
      <Title title={"Advance Features"} />
      <UploadFile
        setFile={handleAdvanceFeatureFileChange}
        image={advanceFeatures?.image}
      />
      <div className="flex justify-start items-center flex-col my-8">
        <div className="grid grid-cols-3 place-items-start gap-2 w-full">
          {advanceFeaturesList.map((item, index) => {
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
                  checked={advanceFeatures?.features?.includes(item)}
                  onChange={handleAdvanceFeatureChange}
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
      <button
        type="submit"
        className="mt-6 bg-[#437730] text-[#212020] font-semibold py-2 px-4 rounded w-[50%] md:w-[30%] mx-auto block"
      >
        Save Changes
      </button>
    </form>
  );
};

export default Features;
