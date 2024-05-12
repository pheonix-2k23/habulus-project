import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_LINK } from "../../utils/api";
import toast from "react-hot-toast";
import Image1 from "../../assets/auth.jpg";

const ForgetPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const sendForgetRequest = async (e) => {
    e.preventDefault();
    toast.loading("Processing...");
    try {
      const resp = await axios.post(`${API_LINK}/admin/forgot-password`, {
        email,
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
            onSubmit={sendForgetRequest}
          >
            <img
              src="logo.png"
              alt="Company Logo"
              className="w-[60%]  justify-items-center text-center ml-20 h-16 mb-4"
            />
            <p className="text-black-600 font-bold font- text-center mb-4">
              FORGET PASSWORD
            </p>
            <div className="flex justify-start items-center flex-col mt-6">
              <input
                className=" w-[60%] bg-[#D9D9D96E] border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="id"
                type="text"
                placeholder="Email ID"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex justify-end items-center mt-4">
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
                Send Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ForgetPassword;
