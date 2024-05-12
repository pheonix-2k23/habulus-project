import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <AiOutlineLoading3Quarters className="animate-spin text-white" />
    </div>
  );
};

export default Loading;
