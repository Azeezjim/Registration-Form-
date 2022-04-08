import { BsHeart, BsHeartFill } from "react-icons/bs";
import Image from "next/image";
const Comment = ({ username, desc }) => {
  return (
    <div className="flex items-center justify-between text-xs mx-4">
      <div className="relative w-10 h-10 flex justify-start  items-center  mr-1 basis-1/12">
        <Image
          src="/profile_avatar_full.jpg"
          alt="side-img"
          objectFit="contain"
          layout="fill"
          className="rounded-full "
        />
      </div>
      <div className="flex flex-col justify-center basis-10/12">
        <div>
          <p className="">
            <span className="font-extrabold">{username}</span> {desc}
          </p>
        </div>
        <div className="flex items-center space-x-3 text-gray-500">
            <span>6h</span>
            <div className="flex items-center space-x-1"><span>50</span><BsHeartFill className="hover:fill-pink-500 text-pink-500"/></div>
            <p className="ml-3 cursor-pointer"> Reply</p>
        </div>
      </div>
      <div className="basis-1/12 hover:cursor-pointer hover:text-gray-400">
        <BsHeart />
      </div>
    </div>
  );
};

export default Comment;
