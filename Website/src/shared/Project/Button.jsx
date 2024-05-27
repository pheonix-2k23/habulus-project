const Button = ({ title, active, setActive }) => {
  return (
    <button
      onClick={() => setActive(title)}
      className={`p-1 md:p-2 ${
        !active
          ? " bg-[#d9d9d9] md:bg-[#4A4646] text-black md:text-white"
          : "bg-[#2F2E2E] md:bg-[#292929] text-white md:text-white"
      }  font-semibold md:font-semibold rounded-md text-sm md:text-xl uppercase flex-grow`}
    >
      {title}
    </button>
  );
};

export default Button;
