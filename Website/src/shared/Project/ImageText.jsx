import { MEDIA_LINK } from "../../utils/api";

const ImageText = ({ image, description }) => {
  return (
    <div className="w-full flex justify-center text-justify items-center md:items-start flex-col md:flex-row mx-auto gap-5">
      <img
        src={MEDIA_LINK + image}
        alt=""
        className="w-[90%] md:w-[45%] h-[300px] object-cover"
      />
      <p className="text-justify">{description}</p>
    </div>
  );
};

export default ImageText;
