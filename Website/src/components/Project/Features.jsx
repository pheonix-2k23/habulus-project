import { useState } from "react";
import Button from "./../../shared/Project/Button";
import Floor from "./Features/Floor";
import Facing from "./Features/Facing";
import BHK from "./Features/BHK";
import AdvanceFeature from "./Features/AdvanceFeature";

const Features = ({ id }) => {
  const [active, setActive] = useState("Facing");

  return (
    <section className="min-h-[100vh] container mx-auto flex justify-start items-center w-full flex-col pt-14 md:pb-14">
      <div className="grid grid-cols-2 grid-rows-2 md:grid-rows-none md:grid-cols-4 my-7 w-[90%] md:w-[70%] md:gap-7 gap-4">
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
          title={"Advance Feature"}
          active={active === "Advance Feature"}
          setActive={setActive}
        />
      </div>
      <div className="my-8 w-[80%]">
        {active === "Facing" && <Facing id={id} />}
        {active === "BHK" && <BHK id={id} />}
        {active === "Floor" && <Floor id={id} />}
        {active === "Advance Feature" && <AdvanceFeature id={id} />}
      </div>
    </section>
  );
};

export default Features;
