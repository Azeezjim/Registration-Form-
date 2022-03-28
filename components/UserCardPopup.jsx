import Button from "./Button";
import Image from "next/image";
import { AiOutlineEye } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

const UserCardPopup = ({ name }) => {
  return (
    <div className="flex flex-col w-[350px] space-y-1 rounded-t-lg ">
      <div className="relative w-full">
        <img
          src="https://stackdiary.com/140x100.png"
          alt=""
          className="w-full h-24 rounded-lg"
        />
        <div className="absolute -bottom-20 left-2 p-1 bg-white  rounded-full">
          <div className="relative h-24 w-24 rounded-full">
            <Image
              src="/profile_avatar_full.jpg"
              className="rounded-full"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-start col-container space-y-1  pl-28 ">
        <p className="text-2xl font-medium">{name}</p>
        <div className=" row-container space-x-1 ">
          <AiOutlineEye />
          <p>2w ago</p>
        </div>
        <div className="row-container space-x-1">
          <AiOutlineEye />
          <p>Male</p>
        </div>
        <div className="row-container space-x-1">
          <MdLocationOn />
          <p>Living in Nigeria</p>
        </div>
        <div className="row-container space-x-2">
          <Button text="Follow" extraClasses="h-[35px] w-28" textClass="text-sm font-medium" active={true} />
          <Button text="Message"  extraClasses="h-[35px] w-28" textClass="text-sm font-medium" />
        </div>
      </div>
    </div>
  );
};

export default UserCardPopup;
