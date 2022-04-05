import Image from "next/image";
import Button from "./Button.jsx";
const GroupCard = ({ filter, profile, groups }) => {
  if (groups) {
    return (
      <div className="flex flex-col w-[230px] flex-shrink-0 flex-grow-0   rounded-t-lg border shadow-md ">
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
          <div className="flex flex-col items-start pb-1 space-y-2 ">
            <p className="font-bold text-gray-500 text-lg truncate">
              Wedding Ideas
            </p>
            <p className="font-medium text-sm text-gray-400 truncate">
              234k Members 1.7k Post A Day
            </p>
            <div className="flex items-center space-x-8 ">
              <div className="row-container relative ">
                <div className=" w-7 h-7 relative">
                  <Image
                    src="/profile_avatar_full.jpg"
                    alt="side-img"
                    layout="fill"
                    objectFit="cover"
                    className="relative rounded-full w-12 h-12"
                  />
                </div>
                <div className="bg-white p-[2px] rounded-full row-container absolute left-5">
                  <div className=" w-8 h-8 relative">
                    <Image
                      src="/profile_avatar_full.jpg"
                      alt="side-img"
                      layout="fill"
                      objectFit="cover"
                      className="relative rounded-full w-12 h-12"
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <p className="text-sm font-medium text-gray-500">
                  <span className="font-semibold">Alex </span>and 4 friends are members
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-between ">
            <Button text="Joined" extraClasses="w-[120px] h-8" active={true} />
            <Button text="View" extraClasses="w-[120px] h-8 bg-gray-100" />
          </div>
        </div>
      </div>
    );
  }
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

  if (profile) {
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
            <Button text="View" extraClasses="w-[120px] h-8 bg-gray-100" />
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
