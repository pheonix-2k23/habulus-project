import { useEffect, useState } from "react";
import ImageText from "../../../shared/Project/ImageText";
import axios from "axios";
import { API_LINK } from "../../../utils/api";

const Facing = ({ id }) => {
  const [data, setData] = useState({
    image: "",
    description: "",
  });

  useEffect(() => {
    const GetDataHandler = async () => {
      try {
        const resp = await axios.get(
          `${API_LINK}/features/facing/get-facing/${id}`
        );
        setData(resp.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    id && GetDataHandler();
  }, [id]);

  return (
    data && <ImageText image={data?.image} description={data?.description} />
  );
};

export default Facing;
