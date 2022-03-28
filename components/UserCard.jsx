import Image from "next/image";
import Button from "./Button";
import UserCardPopup from "./UserCardPopup";

const UserCard = () => {
  return (
    <div className="!p-0 !items-center side-container relative rounded-t-lg">
      <div className="relative w-full h-[90px] rounded-t-lg mb-16">
        <Image
          src={"https://stackdiary.com/140x100.png"}
          objectFit="cover"
          layout="fill"
          className="rounded-t-lg"
        />
        <div className="absolute -bottom-[65%] left-1/3">
          <div className=" w-20 h-20 relative">
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
      <div className="col-container pb-10 space-y-4">
        <div className="relative hover-trigger">
          <p className="text-center font-medium text-lg truncate text-[rgba(0,0,0,.9);] cursor-pointer">
            Akhano Doe
          </p>
          <div className="absolute bg-white border border-grey-100 p-2 shadow-2xl rounded-lg hover-target z-10">
            <UserCardPopup  name="Akhano Doe"/>
          </div>
        </div>
        <Button text="Follow" active={true} />
      </div>
    </div>
  );
};

export default UserCard;
