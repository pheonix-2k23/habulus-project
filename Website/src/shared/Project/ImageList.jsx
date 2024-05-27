import { RiCheckLine } from "react-icons/ri";
import { MEDIA_LINK } from "../../utils/api";

const ImageList = ({ image, list }) => {
  return (
    <div className="w-full flex justify-center text-justify items-center md:items-start flex-col md:flex-row mx-auto gap-5">
      <img
        src={MEDIA_LINK + image}
        alt=""
        className="w-[90%] md:w-[50%] aspect-square object-cover"
      />
      <ul className="flex flex-wrap  gap-x-4 md:block md:w-[50%] w-[90%] mt-4 md:mt-0 md:pl-10">
        {list &&
          list.map((item, index) => {
            return (
              <li key={index} className="flex items-center mb-6">
                <span className="bg-[#76E187] p-[6px] rounded-xl mr-4">
                  <RiCheckLine
                    className="text-white text-lg md:text-2xl"
                    size={20}
                  />
                </span>
                <span className="text-lg font-normal md:text-xl md:font-medium">
                  {item}
                </span>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default ImageList;
