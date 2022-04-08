const Button = ({ text, active, extraClasses, textClass }) => {
  return (
    <button
      className={`${
        extraClasses ? extraClasses : "w-20 h-8 "
      } ${
        active
          ? "bg-[#FF1534] hover:bg-textPlayRed text-white"
          : "bg-[#e7e5e5]"
      } rounded-md cursor-pointer flex items-center justify-center group `}
    >
      <p className={`${textClass ? textClass : "text-sm font-semibold"} `}>
        {text}
      </p>
    </button>
  );
};

export default Button;
