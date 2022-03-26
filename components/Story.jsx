import Image from "next/image";
import { BsPlusCircleFill } from "react-icons/bs";

const Story = ({ username, img, isYou }) => {
  if (isYou) {
    return (
      <div className="col-container cursor-pointer">
        <div className="relative bg-gradient-to-tr from-yellow-400 to-playRed p-0.5 rounded-full">
          <div className="bg-white p-0.5 rounded-full transform transition hover:-rotate-6">
            <div className="h-20 w-20 relative rounded-full">
              <Image
                className="rounded-full"
                layout="fill"
                objectFit="fill"
                src={img}
                alt={username}
              />
            </div>
          </div>
          <BsPlusCircleFill className="text-playRed bg-white rounded-full h-6 w-6 absolute right-2 bottom-1" />
        </div>
        <p className="text-sm font-semibold truncate text-center">
          {username}
        </p>
      </div>
    );
  } else {
    return (
      <div className="col-container cursor-pointer">
        <div className="bg-gradient-to-tr from-yellow-400 to-playRed p-0.5 rounded-full">
          <div className="bg-white p-0.5 rounded-full transform transition hover:-rotate-6">
            <div className="h-20 w-20 relative rounded-full">
              <Image
                className="rounded-full"
                layout="fill"
                objectFit="fill"
                src={img}
                alt={username}
              />
            </div>
          </div>
        </div>
        <p className="text-sm font-semibold truncate text-center">{username}</p>
      </div>
    );
  }
};

export default Story;
