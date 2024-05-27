import { useState } from "react";
import Button from "./../../shared/Project/Button";
import Title from "./../../shared/Project/Title";
import Plans from "./Apartment Views/Plans";
import Views from "./Apartment Views/Views";
import Facilities from "./Apartment Views/Facilities";

const ApartmentViews = ({ id }) => {
  const [active, setActive] = useState("Plans");
  return (
    <section className="lg:min-h-[100vh] flex justify-start items-center w-full flex-col bg-[#222121] md:bg-[#d9d9d9] py-14">
      <div className="w-full container flex justify-center items-center flex-col">
        <Title title={"APARTMENT VIEWS"} />
        <div className="grid grid-cols-3 my-7 w-[90%] lg:w-[50%] gap-3">
          <Button
            title={"Plans"}
            active={active === "Plans"}
            setActive={setActive}
          />
          <Button
            title={"Views"}
            active={active === "Views"}
            setActive={setActive}
          />
          <Button
            title={"Facilities"}
            active={active === "Facilities"}
            setActive={setActive}
          />
        </div>
        <div className="my-8 w-[80%]">
          {active === "Plans" && <Plans id={id} />}
          {active === "Views" && <Views id={id} />}
          {active === "Facilities" && <Facilities id={id} />}
        </div>
      </div>
    </section>
  );
};

export default ApartmentViews;
