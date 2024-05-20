import { useEffect, useState } from "react";
import axios from "axios";
import { API_LINK, MEDIA_LINK } from "../../../utils/api";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

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

  const handleNext = () => {
    setCount((prevCount) =>
      prevCount === images.length - 1 ? 0 : prevCount + 1
    );
  };

  const handlePrev = () => {
    setCount((prevCount) =>
      prevCount === 0 ? images.length - 1 : prevCount - 1
    );
  };

  const [count, setCount] = useState(0);

  return (
    <>
      <div className="md:flex flex-col mx-auto w-full justify-center items-center hidden">
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
      <div className="block md:hidden">
        {images && images.length > 0 && (
          <div className="w-full relative flex justify-between items-center">
            <AiFillLeftCircle
              size={26}
              className="absolute left-1"
              onClick={handlePrev}
            />
            <img
              src={MEDIA_LINK + images[count]}
              alt=""
              className="h-[200px] w-[100%] object-cover"
            />
            <AiFillRightCircle
              size={26}
              className="absolute right-1"
              onClick={handleNext}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Views;
