import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_LINK } from "../../utils/api";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import Image1 from "../../assets/auth.jpg";
import Logo from "../../assets/logo.png";

const Login = () => {
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/dashboard/project?type=Completed-Projects");
    }
  }, [navigate]);

  const loginHandler = async (e) => {
    e.preventDefault();
    try {
      toast.loading("Login...");
      const resp = await axios.post(`${API_LINK}/admin/login`, data);
      localStorage.setItem("token", resp.data.data.token);
      toast.dismiss();
      navigate("/dashboard/project?type=Completed-Projects");
      toast.success("Logged In");
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
          <form className="w-[100%] px-8 pt-6 pb-8" onSubmit={loginHandler}>
            <img
              src={Logo}
              alt="Company Logo"
              className="w-[60%]  justify-items-center text-center ml-20 h-16 mb-4 object-contain"
            />
            <p className="text-black-600 font-bold text-xl text-center mb-2">
              WELCOME BACK
            </p>
            <p className="text-gray-600 text-center mb-4">
              Please sign in to continue
            </p>

            <div className="flex justify-start items-center flex-col mt-6">
              <input
                className=" w-[60%] bg-[#D9D9D96E] border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="id"
                type="text"
                placeholder="Email ID"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-start items-center flex-col mt-4">
              <input
                className=" bg-[#D9D9D96E] border rounded w-[60%] py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                value={data.password}
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center items-center w-full">
              <Link
                className="text-sm text-blue-500 hover:text-blue-800"
                to={"/forget-password"}
              >
                Forgot Password?
              </Link>
            </div>
            <div className=" flex items-center justify-center mt-4">
              <button
                className="bg-blue-500 w-[60%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
                onClick={loginHandler}
              >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
