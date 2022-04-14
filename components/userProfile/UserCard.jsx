import Image from "next/image";
import Button from "../Button";
import UserCardPopup from "./UserCardPopup";
import { IoMdPersonAdd } from "react-icons/io";

const UserCard = () => {
  return (
    <>
      <div className="bg-white border shadow-lg rounded-lg max-w-3xl p-3 px-5 flex items-center justify-between md:!hidden">
        <div className="row-container space-x-2">
          <div className="w-16 h-16 md:w-20 md:h-20 relative">
            <Image
              src="/profile_avatar_full.jpg"
              alt="side-img"
              layout="fill"
              objectFit="cover"
              className="relative rounded-full"
            />
          </div>
          <p className="text-center font-medium text-lg truncate text-[rgba(0,0,0,.9);] cursor-pointer">
            Akhano Doe
          </p>
        </div>
        <div className="bg-lightPlayRed w-10 h-10 rounded-md row-container cursor-pointer">
          <IoMdPersonAdd className="text-white h-6 w-6"/>
        </div>
      </div>
      <div className="hidden md:inline-block !p-0 !items-center side-container relative rounded-lg">
        <div className="relative w-full h-[90px] rounded-t-lg mb-16">
          <Image
            src={"https://stackdiary.com/140x100.png"}
            objectFit="cover"
            layout="fill"
            className="rounded-t-lg"
          />
          <div className="absolute -bottom-[65%] left-1/3">
            <div className="w-16 h-16 md:w-20 md:h-20 relative">
              <Image
                src="/profile_avatar_full.jpg"
                alt="side-img"
                layout="fill"
                objectFit="cover"
                className="relative rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="col-container pb-5 space-y-2">
          <div className="relative hover-trigger">
            <p className="text-center font-medium text-lg truncate text-[rgba(0,0,0,.9);] cursor-pointer">
              Akhano Doe
            </p>
            <div className="absolute bg-white border border-grey-100 p-2 shadow-2xl rounded-lg hover-target z-10 transition-all duration-300 ease-in">
              <UserCardPopup name="Akhano Doe" />
            </div>
          </div>
          <Button text="Follow" extraClasses="h-[35px] w-16" active={true} />
        </div>
      </div>
    </>
  );
};

export default UserCard;
