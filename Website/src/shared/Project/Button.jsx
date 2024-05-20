const Button = ({ title, active, setActive }) => {
  return (
    <button
      onClick={() => setActive(title)}
      className={`p-2 md:p-2 ${
        !active
          ? "bg-[#2f2e2e] md:bg-[#4A4646] text-white"
          : "bg-[#d9d9d9] md:bg-[#292929] text-black md:text-white"
      }  font-medium md:font-semibold rounded-md text-sm md:text-xl uppercase flex-grow`}
    >
      {title}
    </button>
  );
};

export default Button;
