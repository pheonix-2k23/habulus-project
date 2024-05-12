import { useEffect, useState } from "react";
import ImageList from "../../../shared/Project/ImageList";
import axios from "axios";
import { API_LINK } from "../../../utils/api";

const CompBHK = ({ id }) => {
  const [data, setData] = useState({
    image: "",
    bhk: [],
  });

  useEffect(() => {
    const GetDataHandler = async () => {
      try {
        const resp = await axios.get(`${API_LINK}/features/bhk/get-bhk/${id}`);
        setData(resp.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    id && GetDataHandler();
  }, [id]);

  return data && <ImageList image={data?.image} list={data?.bhk} />;
};

export default CompBHK;
