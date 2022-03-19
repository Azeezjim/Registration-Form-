import Button from "./Button";
import Image from "next/image";

const LikedChannels = () => {
  return (
    <div className="side-container">
      <p className="text-start font-bold">Channels you may like</p>
      <div className="flex flex-col items-center pb-4">
        <div className="flex space-x-2  justify-center items-center mb-2">
          <Button text="POPULAR" active={true} />
          <Button text="NEWEST" active={false} />
          <Button text="SEE ALL" active={false} />
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center space-x-6">
            <div className=" w-12 h-12 relative">
              <Image
                src="/profile_avatar_full.jpg"
                alt="side-img"
                layout="fill"
                objectFit="contain"
                className="relative rounded-full w-12 h-12"
              />
            </div>
            <div className="flex flex-col space-y-.5">
              <p className="font-bold  text-gray-600">Graphic Design</p>
              <span className="text-sm font-semibold">345k Following</span>
            </div>
            <Button text="Subscribe" active={true} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center space-x-6">
            <div className=" w-12 h-12 relative">
              <Image
                src="/profile_avatar_full.jpg"
                alt="side-img"
                layout="fill"
                objectFit="contain"
                className="relative rounded-full w-12 h-12"
              />
            </div>
            <div className="flex flex-col space-y-.5">
              <p className="font-bold  text-gray-600">Graphic Design</p>
              <span className="text-sm font-semibold">345k Following</span>
            </div>
            <Button text="Subscribe" active={true} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center space-x-6">
            <div className=" w-12 h-12 relative">
              <Image
                src="/profile_avatar_full.jpg"
                alt="side-img"
                layout="fill"
                objectFit="contain"
                className="relative rounded-full w-12 h-12"
              />
            </div>
            <div className="flex flex-col space-y-.5">
              <p className="font-bold  text-gray-600">Graphic Design</p>
              <span className="text-sm font-semibold">345k Following</span>
            </div>
            <Button text="Subscribe" active={true} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center space-x-6">
            <div className=" w-12 h-12 relative">
              <Image
                src="/profile_avatar_full.jpg"
                alt="side-img"
                layout="fill"
                objectFit="contain"
                className="relative rounded-full w-12 h-12"
              />
            </div>
            <div className="flex flex-col space-y-.5">
              <p className="font-bold  text-gray-600">Graphic Design</p>
              <span className="text-sm font-semibold">345k Following</span>
            </div>
            <Button text="Subscribe" active={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikedChannels;
