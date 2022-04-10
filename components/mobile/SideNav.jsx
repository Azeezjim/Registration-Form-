import { signIn, signOut } from "next-auth/react";
import Image from "next/image";
import { useSession } from "next-auth/react";

import {
  BsDot,
  BsListStars,
  BsShieldFillCheck,
  BsMoonFill,
} from "react-icons/bs";
import {
  FaWallet,
  FaShoppingBag,
  FaHistory,
  FaBookmark,
  FaUserCircle,
  FaVideo,
  FaGlobeAfrica,
} from "react-icons/fa";
import { RiBarChartHorizontalFill } from "react-icons/ri";
import { MdMail, MdClose } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";

const SideNav = () => {
  const { data: session, status } = useSession();
  const user = session.user.userDetails;
  console.log(user);
  return (
    <div className="top-12 right-0 w-full bg-black bg-opacity-60 fixed bottom-[46px]  z-10 md:hidden">
      <div className="grid grid-cols-3">
        <div className="bg-transparent h-full"></div>
        <div className=" col-span-2   bg-white h-full">
          <div className="flex flex-col space-y-3 p-5">
            <div className="flex items-center justify-between">
              <div className="relative w-10 h-10 rounded-full mr-5">
                <Image
                  src={user.picture}
                  layout="fill"
                  className="rounded-full mr-2"
                  objectFit="contain"
                />
              </div>
              <button>
                <MdClose className="w-6 h-6" />
              </button>
            </div>{" "}
            <p className="font-semibold text-xs">{user.name}</p>
            <p className="text-xs font-light">{`@${user.username}`}</p>
            <div className="flex items-center justify-start  pb-2">
              <p className="font-semibold text-xs">{user.total_followers} Fans</p>
              <BsDot className="h-5 w-5" />
              <p className="font-semibold text-xs">
                {user.total_followings} Following
              </p>
              <button className="row-container bg-gray-100 rounded-full px-2 py-1 ml-2">
                <FaWallet className="h-4 w-4 mr-1" />
                <p className="text-xs font-semibold">
                  {user.wallet_balance_formatted}
                </p>
                {/* <span>&#8358;</span>{ */}
              </button>
            </div>
          </div>{" "}
          <hr className="w-full  mb-2" />
            <div className="p-5 flex flex-col space-y-3">

            </div>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
