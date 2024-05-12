import { useEffect, useState } from "react";
import axios from "axios";
import { API_LINK, MEDIA_LINK } from "../../../utils/api";

const Views = ({ id }) => {
  const [images, setImages] = useState();
  useEffect(() => {
    const GetDataHandler = async () => {
      try {
        const resp = await axios.get(
          `${API_LINK}/apartment/views/get-views/${id}`
        );
        setImages(resp.data.data.images);
      } catch (error) {
        console.log(error);
      }
    };
    id && GetDataHandler();
  }, [id]);

  const replaceImage = (img, index) => {
    let dummyImages = [...images];
    dummyImages[0] = img;
    dummyImages[index] = images[0];
    setImages(dummyImages);
  };

  return (
    <div className="flex flex-col mx-auto w-full justify-center items-center">
      {images && images.length > 0 && (
        <img
          src={MEDIA_LINK + images[0]}
          alt=""
          className="h-[200px] w-[90%] object-cover"
        />
      )}
      {images && images.length > 0 && (
        <div className="grid grid-cols-2 grid-row-2 md:grid-cols-4 gap-4 w-[90%] mt-[16px]">
          {Array(4)
            .fill(0)
            .map((_, index) => {
              return (
                <img
                  src={MEDIA_LINK + images[index + 1]}
                  key={index}
                  className="w-full aspect-square object-cover cursor-pointer"
                  onClick={() => replaceImage(images[index + 1], index + 1)}
                />
              );
            })}
        </div>
      )}
    </div>
  );
};

export default Views;
