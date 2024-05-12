import React from "react";
import { MdEdit } from "react-icons/md";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { API_LINK, MEDIA_LINK } from "../utils/api";

const ImageCard = ({
  image,
  editpath,
  deleteHandler,
  id,
  title,
  edit = true,
}) => {
  const navigate = useNavigate();
  return (
    <div className="h-[170px] relative cursor-pointer overflow-hidden group transition-all">
      <div className="absolute right-2 top-2">
        {edit && (
          <button
            onClick={() => navigate(editpath)}
            className="bg-white p-2 rounded-md shadow hover:bg-blue-600 hover:text-white transition-animate mr-3"
          >
            <MdEdit />
          </button>
        )}
        <button
          className="bg-white p-2 rounded-md shadow hover:bg-red-600 hover:text-white transition-animate"
          onClick={() => deleteHandler(id)}
        >
          <MdOutlineDeleteOutline />
        </button>
      </div>
      <img
        src={MEDIA_LINK + image}
        className="h-[170px] min-w-[200px] object-cover rounded-md w-full"
      />
      {title && (
        <div className="absolute bottom-0 translate-y-20 group-hover:translate-y-0 transition-animate bg-white w-full px-2 py-3 rounded-t-xl">
          <p className="text-center font-semibold text-xs">{title}</p>
        </div>
      )}
    </div>
  );
};

export default ImageCard;
