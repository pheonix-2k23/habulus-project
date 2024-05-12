import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { FaFileArrowUp } from "react-icons/fa6";
import { MEDIA_LINK } from "../utils/api";

const fileTypes = ["JPG", "PNG", "GIF"];

const UploadFile = ({ setFile, image, type }) => {
  const [imageURL, setImageURL] = useState(null);

  const handleChange = (file) => {
    setFile(file);
    const reader = new FileReader();
    reader.onload = () => {
      setImageURL(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="flex justify-center items-center flex-col md:flex-row">
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={type === "pdf" ? ["PDF"] : fileTypes}
      >
        <div className="border-2 border-white border-dashed h-[150px] w-[240px] flex-col rounded mx-auto flex justify-center items-center">
          <FaFileArrowUp className="text-white text-3xl" />
          <p className="text-white mt-2 text-lg">Drag and Drop</p>
          <p className="text-white mt-1 text-xs">
            Your files here or Browse to upload
          </p>
        </div>
      </FileUploader>
      {type !== "pdf" && imageURL ? (
        <img
          src={imageURL}
          alt="Uploaded"
          className="h-[140px] md:ml-4 mt-4 md:mt-0"
        />
      ) : (
        image && (
          <img
            src={MEDIA_LINK + image}
            alt="Uploaded"
            className="h-[140px] md:ml-4 mt-4 md:mt-0"
          />
        )
      )}
    </div>
  );
};

export default UploadFile;
