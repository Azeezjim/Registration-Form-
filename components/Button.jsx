const Button = ({ text, active, extraClasses, textClass }) => {
  return (
    <div
      className={`${
        extraClasses ? extraClasses : "w-20 h-8"
      } rounded-md cursor-pointer flex items-center justify-center ${
        active
          ? "bg-[#FF1534] hover:bg-textPlayRed text-white"
          : "bg-[#e7e5e5]"
      }`}
    >
      <p className={`${textClass ? textClass : "text-sm font-semibold"} `}>
        {text}
      </p>
    </div>
  );
};

export default Button;
