import Image from "next/image";
import Button from "./Button.jsx";
const GroupCard = () => {
  return (
    <div className="flex flex-col w-full relative space-y-1 rounded-t-lg ">
      <img
        src="https://stackdiary.com/140x100.png"
        alt=""
        className="w-full h-24 rounded-lg"
      />
      <div className="absolute bottom-2 left-1 p-1 bg-white w-[70px] h-[70px]  rounded-full">
        <Image
          src="/profile_avatar_full.jpg"
          className=" object-contain rounded-full"
          width={96}
          height={96}
        />
      </div>
      <div className="flex justify-between ml-20 items-center space-x-6">
        <p className="text-sm font-bold">thesidegist</p>
        <Button text='JOIN' active={true}/>
      </div>
    </div>
  );
};

export default GroupCard;
