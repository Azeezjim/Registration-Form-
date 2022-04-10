import Image from "next/image";

const NotificationCard = ({ text, call }) => {
  return (
    <div className="flex items-center   border-y first:border-y-0 last:border-y-0 py-3 w-full">
      <div className="basis-1/12 ">
        <div className=" w-14 h-14 relative mr-3 md:mr-0">
          <Image
            src="/profile_avatar_full.jpg"
            alt="side-img"
            layout="fill"
            objectFit="cover"
            className=" rounded-full "
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-start basis-11/12">
        <div className="row-container space-x-1">
          <p className="text-lg font-semibold">Rob Veschi</p>
          <span className="text-sm font-medium text-[#1DA1F2]">@raveshi</span>
        </div>
        <p className="text-sm md:text-lg font-normal text-ellipsis">
          {call ? text : `Rob veschi ${text}`}
        </p>
        <span className="text-gray-400 font-medium text-sm">16 Mar 2022</span>
      </div>
    </div>
  );
};

export default NotificationCard;
