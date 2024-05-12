import React from "react";

const AnyQuestion = () => {
  return (
    <section className="w-full min-h-[70vh] flex justify-center items-center flex-col mb-10">
      <p className="font-bold text-5xl text-center mb-6">Have any Questions</p>
      <p className="text-center mt-3 mb-10 text-xl">
        We&apos;ll help you with truly smart and secure living spaces.
      </p>
      <div className="w-[50%] mx-auto flex">
        <input
          type="text"
          placeholder="Type someting what you need"
          className="text-lg w-full outline-none border-2 rounded-l-full px-4 py-2"
        />
        <button className="bg-red-500 px-8 py-2 rounded-r-full text-white font-semibold">
          Send
        </button>
      </div>
    </section>
  );
};

export default AnyQuestion;
