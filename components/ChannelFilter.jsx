import Image from "next/image";
import Button from "./Button";
import {IoMdThumbsUp} from "react-icons/io"
import {BsTagFill} from "react-icons/bs"


const ChannelFilter = () => {
  return (
    <div className="flex items-center justify-start space-x-5 px-5 pt-2 pb-5 border-b w-full">
      <div className=" w-[90px] h-[90px] relative cursor-pointer">
        <Image
          src="/profile_avatar_full.jpg"
          alt="side-img"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col space-y-1 lg:flex-row lg:items-center lg:justify-between w-full">
        <div className="flex-col">
          <p className="font-bold text-2xl truncate cursor-pointer">Davidofans</p>
          <div className="justify-start row-container space-x-1">
            <IoMdThumbsUp className="h-4 w-4 text-black"/>
            <p className="text-sm text-gray-600">4 people like this</p>
          </div>
          <div className="justify-start row-container space-x-1">
            <BsTagFill className="h-4 w-4 text-black"/>
            <p className="text-sm text-gray-600">Entertainment</p>
          </div>
        </div>
        <Button extraClasses="h-[35px] w-28" textClass="text-gray-600 text-sm font-semibold" text="Subscribe"/>
      </div>
    </div>
  );
};

export default ChannelFilter;
