import React, { useState } from "react";
import Accordian from "../Accordian";

const Faq = () => {
  const [open, setOpen] = useState(0);
  return (
    <section className="w-full pb-12">
      <p className="font-bold text-3xl text-center mb-10">FAQ&apos;s</p>
      <div className="lg:w-[60%] w-[90%] mx-auto">
        <Accordian
          index={1}
          setOpen={setOpen}
          open={open}
          title={"How can I buy a appartments ?  "}
          description={
            "You can buy an apartment by either contacting the website of the construction company directly or by visiting their offline office. Browse their website for available properties, contact them via email or phone to express interest, and inquire about the purchasing process. Alternatively, visit their physical office to discuss your options with their sales team and proceed with buying the apartment of your choice."
          }
        />
        <Accordian
          index={2}
          setOpen={setOpen}
          open={open}
          title={"Payment method is safety? "}
          description={
            " yes, We provide best secured server and our website have full secured system.If any problem occurs kindly report to our team they will guide you."
          }
        />
        <Accordian
          index={3}
          setOpen={setOpen}
          open={open}
          title={"where is the place of your company?"}
          description={
            "Our company is located at P.O, Deccan Palms, AnanthaNagar 2nd Phase, Huskur gate, 100, Deccan Palms Road, Shree Ananth Nagar Layout, Glass Factory Layout, Electronic City, Bengaluru, Karnataka 560100."
          }
        />
        <Accordian
          index={4}
          setOpen={setOpen}
          open={open}
          title={
            "How long does it take to complete the documentation work for an apartment?"
          }
          description={
            "The duration for completing documentation varies depending on the apartment. However, we strive to ensure that all documentation is completed as soon as possible for every apartment purchase."
          }
        />
        <Accordian
          index={5}
          setOpen={setOpen}
          open={open}
          title={"How can I contact you quickly?"}
          description={
            "Simply click on Contact Us to reach our team. We will assist you in exploring our apartments and locations for your purchase."
          }
        />
      </div>
    </section>
  );
};

export default Faq;
