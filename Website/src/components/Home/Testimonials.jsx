import axios from "axios";
import React, { useEffect, useState } from "react";
import { API_LINK } from "../../utils/api";
import toast from "react-hot-toast";
import YouTube from "react-youtube";

const Testimonials = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [visibleData, setVisibleData] = useState(3);

  useEffect(() => {
    getDataHandler();
  }, []);

  const getDataHandler = async () => {
    try {
      const resp = await axios.get(`${API_LINK}/testimonial/get-testimonials`);
      setData(resp.data.data);
    } catch (error) {
      console.log("Error in loading Testimonial");
      toast.error("Error in Loading Testimonial");
    }
    setLoading(false);
  };
  function extractYouTubeVideoId(url) {
    const regExp =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    const match = url.match(regExp);
    if (match && match[1]) {
      return match[1];
    } else {
      return null;
    }
  }

  const loadMore = () => {
    setVisibleData((prevVisibleData) => prevVisibleData + 3);
  };

  const showLessData = () => {
    setVisibleData(3);
  };

  const opts = {
    height: "200",
    width: "370",
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-12">
      <p className="font-bold text-3xl text-center">Client Testimonials</p>
      <p className="text-center mt-3">
        Hear what our satisfied clients have to say about our services.
      </p>
      <div className="grid lg:grid-cols-3 place-items-center gap-6 mt-10 md:w-auto">
        {!loading &&
          data &&
          data
            .slice(0, visibleData)
            .map((item) => (
              <YouTube
                key={item._id}
                videoId={extractYouTubeVideoId(item.link)}
                opts={opts}
              />
            ))}
      </div>
      {data && data.length > visibleData && (
        <button
          onClick={loadMore}
          className="border block mx-auto mt-10 bg-black border-white text-white px-6 py-2 rounded-md"
        >
          Load More
        </button>
      )}
      {data && data.length > 3 && visibleData >= data?.length && (
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

export default Testimonials;
