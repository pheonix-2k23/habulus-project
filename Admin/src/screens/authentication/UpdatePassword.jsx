import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Image1 from "../../assets/auth.jpg";
import Logo from "../../assets/logo.png";
import toast from "react-hot-toast";
import axios from "axios";
import { API_LINK } from "../../utils/api";

const UpdatePassword = () => {
  const params = useParams();
  const [data, setData] = useState({
    cpassword: "",
    password: "",
  });
  const navigate = useNavigate();

  const updatePasswordHandler = async (e) => {
    e.preventDefault();
    if (data.password !== data.cpassword) {
      toast.error("Both Password are Different!");
      return;
    }
    toast.loading("Processing...");
    try {
      const resp = await axios.post(`${API_LINK}/admin/update-password`, {
        password: data.password,
        token: params.id,
      });
      toast.dismiss();
      toast.success(resp.data.message);
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.dismiss();
      if (error?.response?.data) {
        toast.error(error?.response?.data?.message);
      } else {
        toast.error("Something Went Wrong!");
      }
    }
  };
  return (
    <section className="h-[100vh] w-full flex justify-center items-center bg-[#5b5b5b]">
      <div className="flex justify-center items-center h-[90vh] w-[90vw] shadow-xl">
        <div className="w-[60%] h-full">
          <img
            src={Image1}
            alt="Login Image"
            className="w-full h-full rounded-l-2xl"
          />
        </div>
        <div className="w-[40%] flex flex-col justify-center items-center h-full bg-white rounded-r-2xl">
          <form
            className="w-[100%] px-8 pt-6 pb-8"
            onSubmit={updatePasswordHandler}
          >
            <img
              src={Logo}
              alt="Company Logo"
              className="w-[60%]  justify-items-center text-center ml-20 h-16 mb-4 object-contain"
            />
            <p className="text-black-600 font-bold font- text-center mb-4">
              UPDATE PASSWORD
            </p>
            <div className="flex justify-start items-center flex-col mt-6">
              <input
                className=" bg-[#D9D9D96E] border rounded w-[60%] py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                value={data.password}
                onChange={(e) => setData({ ...data, password: e.target.value })}
              />
            </div>
            <div className="flex justify-start items-center flex-col mt-2">
              <input
                className=" bg-[#D9D9D96E] border rounded w-[60%] py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Confirm Password"
                value={data.cpassword}
                onChange={(e) =>
                  setData({ ...data, cpassword: e.target.value })
                }
              />
            </div>
            <div className="flex justify-end items-center mt-3">
              <Link
                className="w-[60%] text-center text-sm text-blue-500 hover:text-blue-800"
                to={"/"}
              >
                Sign In?
              </Link>
            </div>
            <div className=" flex items-center justify-center mt-4">
              <button
                className="bg-blue-500 w-[60%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Update Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UpdatePassword;
