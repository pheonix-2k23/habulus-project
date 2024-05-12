import { useState } from "react";
import Main from "../../components/dashboard/Main";
import Features from "../../components/dashboard/Features";
import AprtmentViews from "../../components/dashboard/AprtmentViews";
import Broucher from "../../components/dashboard/Broucher";
import { useLocation, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const ModifyProject = () => {
  const params = useParams();
  const [id, setId] = useState(params.id);
  const location = useLocation();
  const type = location?.search?.split("=")[1]?.replaceAll("-", " ");
  return (
    <div className="bg-[#212020] w-full md:w-[80%] overflow-y-scroll max-h-[100vh]">
      <h1 className="text-center text-4xl font-bold text-white mt-10">
        Admin Panel
      </h1>
      <Link
        to={`/dashboard/project?type=${type.replaceAll(" ", "-")}`}
        className="absolute top-10 ml-6 text-white p-3 "
      >
        <IoArrowBack size={25} />
      </Link>
      <Main setId={setId} id={id} type={type} />
      <div className="border-b-2 mt-10 border-[#4d4d4d]"></div>
      <Features id={id} />
      <div className="border-b-2 mt-10 border-[#4d4d4d]"></div>
      <AprtmentViews id={id} />
      <div className="border-b-2 mt-10 border-[#4d4d4d]"></div>
      <Broucher id={id} />
    </div>
  );
};

export default ModifyProject;
