import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/authentication/Login";
import ForgetPassword from "./screens/authentication/ForgetPassword";
import UpdatePassword from "./screens/authentication/UpdatePassword";
import Latestupdate from "./screens/Latest Update/Latestupdate";
import Testimonial from "./screens/Testimonial/Testimonial";
import Advertisement from "./screens/Advertisement/Advertisement";
import ModifyAdvertisement from "./screens/Advertisement/ModifyAdvertisement";
import Wrapper from "./screens/Wrapper";
import Error from "./screens/404";
import ModifyLatestUpdate from "./screens/Latest Update/ModifyLatestUpdate";
import ModifyTestimonial from "./screens/Testimonial/ModifyTestiomonial";
import ModifyProject from "./screens/Project/ModifyProject";
import Project from "./screens/Project/Project";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Authentication */}
        <Route path="/" element={<Login />} />
        <Route path="/forget-password" element={<ForgetPassword />} />
        <Route path="/update-password/:id" element={<UpdatePassword />} />
        {/* Main Website */}
        <Route
          path="/dashboard/project"
          element={
            <Wrapper>
              <Project />
            </Wrapper>
          }
        />
        <Route
          path="/dashboard/project/modify/:id?"
          element={
            <Wrapper>
              <ModifyProject />
            </Wrapper>
          }
        />
        {/* Latest Update */}
        <Route
          path="/dashboard/latest-update"
          element={
            <Wrapper>
              <Latestupdate />
            </Wrapper>
          }
        />
        <Route
          path="/dashboard/latest-update/modify/:id?"
          element={
            <Wrapper>
              <ModifyLatestUpdate />
            </Wrapper>
          }
        />
        {/* Testimonial */}
        <Route
          path="/dashboard/testimonial"
          element={
            <Wrapper>
              <Testimonial />
            </Wrapper>
          }
        />
        <Route
          path="/dashboard/testimonial/modify/:id?"
          element={
            <Wrapper>
              <ModifyTestimonial />
            </Wrapper>
          }
        />
        <Route
          path="/dashboard/advertisement"
          element={
            <Wrapper>
              <Advertisement />
            </Wrapper>
          }
        />
        <Route
          path="/dashboard/advertisement/modify/:id?"
          element={
            <Wrapper>
              <ModifyAdvertisement />
            </Wrapper>
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
