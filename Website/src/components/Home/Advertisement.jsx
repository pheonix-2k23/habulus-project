import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_LINK, MEDIA_LINK } from "../../utils/api";
import toast from "react-hot-toast";

const Advertisement = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((prevCount) => (prevCount + 1) % data?.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, [data.length]);

  useEffect(() => {
    getDataHandler();
  }, []);

  const getDataHandler = async () => {
    try {
      const resp = await axios.get(
        `${API_LINK}/advertisement/get-advertisements`
      );
      setData(resp.data.data);
    } catch (error) {
      console.log("Error in loading Latest Update");
      toast.error("Error in Loading Latest Update");
    }
    setLoading(false);
  };

  return (
    <div className="w-full max-w-6xl mx-auto relative mt-10 mb-20">
      {!loading && data.length !== 0 && (
        <div>
          <img
            src={MEDIA_LINK + data[count].image}
            className="w-full cursor-pointer md:h-[100vh] object-cover"
            alt="Advertisement"
          />
          <div className="absolute bottom-4 bg-white p-2 rounded-full left-1/2 transform -translate-x-1/2 flex space-x-2">
            {[...Array(data.length)].map((_, index) => (
              <div
                onClick={() => setCount(index)}
                key={index}
                className={`h-2 w-6 rounded-full cursor-pointer ${
                  index === count ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Advertisement;
