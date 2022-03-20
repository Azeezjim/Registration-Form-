import Image from "next/image";
import { BsPlusCircleFill } from "react-icons/bs";

const Story = ({ username, img, isYou }) => {
  if (isYou) {
    return (
      <div className="flex flex-col items-center space-x-1 cursor-pointer">
        <div className=" relative bg-gradient-to-tr from-yellow-400 to-playRed p-1 rounded-full">
          <div className="bg-white h-[100px] w-[100px] rounded-full p-1 transform transition hover:-rotate-6">
            <Image
              className="h-24 w-24 rounded-full "
              width={96}
              height={96}
              src={img}
              alt={username}
            />
          </div>
          <BsPlusCircleFill className="text-playRed bg-white rounded-full h-6 w-6 absolute right-2 bottom-1" />
        </div>
        <p className="text-sm font-semi-bold  truncate text-center">
          {username}
        </p>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col items-center space-x-1 cursor-pointer">
        <div className="bg-gradient-to-tr from-yellow-400 to-playRed p-1 rounded-full">
          <div className="bg-white h-[100px] w-[100px] rounded-full p-1 transform transition hover:-rotate-6">
            <Image
              className="h-24 w-24 rounded-full "
              width={96}
              height={96}
              src={img}
              alt={username}
            />
          </div>
        </div>
        <p className="text-sm font-semibold truncate text-center">{username}</p>
      </div>
    );
  }
};

export default Story;
