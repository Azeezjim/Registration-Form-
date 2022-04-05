import Image from "next/image";
import Button from "./Button.jsx";
const GroupCard = ({ filter , profile, }) => {
  if (filter) {
    return (
      <div className="flex flex-col w-full space-y-1 rounded-t-lg border shadow-md ">
        <img
          src="https://stackdiary.com/140x100.png"
          alt=""
          className="w-full h-24 rounded-t-lg"
        />
        <div className="p-2">
          <div className="flex flex-col space-y-2 items-start pb-2">
            <p className="font-bold text-lg">graphic</p>
            <p className="font-medium text-sm text-gray-400">4 Members</p>
          </div>

          <div className="w-full row-container">
            <Button text="JOIN" extraClasses="w-full h-8" active={true} />
          </div>
        </div>
      </div>
    );
  }

  if(profile){
    return (
      <div className="flex flex-col w-full  rounded-t-lg border shadow-md ">
        <div className="relative h-24 w-full rounded-t-lg">
          <Image
          src={"https://stackdiary.com/140x100.png"}
          alt="fh"
          layout="fill"
          objectFit="cover"
          className=" rounded-t-lg"
        />
        </div>
        
        <div className="p-2">
          <div className="flex flex-col items-start pb-1 ">
            <p className="font-bold text-lg">fans of Davido</p>
            <p className="font-medium text-sm text-gray-400">4 Members</p>
          </div>

          <div className="w-full flex items-center justify-between ">
            <Button text="Joined" extraClasses="w-[120px] h-8" active={true} />
            <Button text="View" extraClasses="w-[120px] h-8 bg-gray-100"  />
          </div>
        </div>
      </div>
    );
  }
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
        <Button text="JOIN" active={true} />
      </div>
    </div>
  );
};

export default GroupCard;
