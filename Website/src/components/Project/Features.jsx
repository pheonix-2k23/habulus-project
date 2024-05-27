import { useState } from "react";
import Button from "./../../shared/Project/Button";
import Floor from "./Features/Floor";
import Facing from "./Features/Facing";
import BHK from "./Features/BHK";
import AdvanceFeature from "./Features/AdvanceFeature";

const Features = ({ id }) => {
  const [active, setActive] = useState("Facing");

  return (
    <section className="lg:min-h-[100vh] container mx-auto flex justify-start items-center w-full flex-col pt-14 md:pb-14">
      <div className="grid grid-cols-4 grid-rows-none md:grid-rows-none md:grid-cols-4 my-7 w-[90%] lg:w-[70%] md:gap-7 gap-3 text-wrap">
        <Button
          title={"Facing"}
          active={active === "Facing"}
          setActive={setActive}
        />
        <Button title={"BHK"} active={active === "BHK"} setActive={setActive} />
        <Button
          title={"Floor"}
          active={active === "Floor"}
          setActive={setActive}
        />
        <Button
          title={"Features"}
          active={active === "Features"}
          setActive={setActive}
        />
      </div>
      <div className="my-8 w-[80%]">
        {active === "Facing" && <Facing id={id} />}
        {active === "BHK" && <BHK id={id} />}
        {active === "Floor" && <Floor id={id} />}
        {active === "Features" && <AdvanceFeature id={id} />}
      </div>
    </section>
  );
};

export default Features;
