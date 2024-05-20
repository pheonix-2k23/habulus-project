import { useState, useEffect } from "react";
import Title from "./../../shared/Project/Title";
import { API_LINK, MEDIA_LINK } from "../../utils/api";
import axios from "axios";

const Main = ({ id }) => {
  const [data, setData] = useState({
    title: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    const GetDataHandler = async () => {
      try {
        const resp = await axios.get(`${API_LINK}/project/get-project/${id}`);
        setData(resp.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    id && GetDataHandler();
  }, [id]);

  return (
    <section className="lg:min-h-[90vh] container mx-auto flex justify-center items-center w-full flex-col pt-20 lg:py-14">
      {data && (
        <>
          <img
            src={MEDIA_LINK + data.image}
            alt=""
            className="w-[90%] md:w-[40%] h-[350px] object-cover"
          />
          <div className="w-[90%] md:w-[65%] flex justify-center items-center flex-col my-8 md:my-6">
            <Title title={data && data.title} />
            <p className="mt-4 text-justify">{data && data.description}</p>
          </div>
        </>
      )}
    </section>
  );
};

export default Main;
