import React, { useEffect, useState } from "react";
import LatestUpdateImage from "../../assets/image1.jpg";
import axios from "axios";
import { API_LINK, MEDIA_LINK } from "../../utils/api";
import toast from "react-hot-toast";

const LatestUpdate = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [visibleData, setVisibleData] = useState(2);

  useEffect(() => {
    getDataHandler();
  }, []);

  const getDataHandler = async () => {
    try {
      const resp = await axios.get(
        `${API_LINK}/latestUpdate/get-latestUpdates`
      );
      setData(resp.data.data);
    } catch (error) {
      console.log("Error in loading Latest Update");
      toast.error("Error in Loading Latest Update");
    }
    setLoading(false);
  };

  const loadMore = () => {
    setVisibleData((prevVisibleData) => prevVisibleData + 2);
  };

  const showLessData = () => {
    setVisibleData(2);
  };

  const Card = ({ title, image, updates }) => {
    return (
      <div className=" bg-white shadow-md p-4 rounded-lg border cursor-pointer">
        <img
          src={MEDIA_LINK + image}
          className="w-full h-[220px] object-cover"
        />
        <p className="my-2 text-black">{title}</p>
        <div className="flex justify-start items-center flex-wrap gap-4">
          {updates &&
            updates.map((item) => {
              return (
                <span
                  key={title + item}
                  className="bg-[#D9D9D9] text-black px-2 py-1 rounded-full text-xs"
                >
                  {item}
                </span>
              );
            })}
        </div>
      </div>
    );
  };

  return (
    <section className="w-full pb-12">
      <p className="font-bold text-3xl text-center mb-6">Latest Updates</p>
      <p className="text-center mt-3 mb-10">
        Stay connected and up-to-date with our latest news and updates.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mx-auto max-w-6xl w-[90%] md:w-[80%]">
        {!loading &&
          data &&
          data.slice(0, visibleData).map((item) => {
            return (
              <Card
                key={item._id}
                title={item.title}
                image={item.image}
                updates={item.updates}
              />
            );
          })}
      </div>
      {data && data.length > visibleData && (
        <button
          onClick={loadMore}
          className="border block mx-auto mt-10 bg-black border-white text-white px-6 py-2 rounded-md"
        >
          Load More
        </button>
      )}
      {data && data.length > 2 && visibleData >= data?.length && (
        <button
          onClick={showLessData}
          className="border block mx-auto mt-10 bg-black border-white text-white px-6 py-2 rounded-md"
        >
          Show Less
        </button>
      )}
    </section>
  );
};

export default LatestUpdate;
