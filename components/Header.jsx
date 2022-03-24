import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import {
  MdMenu,
  MdOutlineClose,
  MdSearch,
  MdOutlineSearch,
} from "react-icons/md";
import { BsPlusSquare } from "react-icons/bs";
import { SiGooglechat } from "react-icons/si";
import { AiFillBell } from "react-icons/ai";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();

  if (!session)
    return (
      <div className="w-full bg-transparent fixed top-0 z-40">
        <div className="max-w-6xl mx-auto px-1 md:px-0 flex items-center justify-between">
          <div className="relative w-32 h-16 cursor-pointer">
            <Image src="/logo.png" objectFit="contain" layout="fill" />
          </div>

          <div>
            {router.pathname === "/login" ? (
              <div
                onClick={() => router.push("/register")}
                className="  w-40 h-10 rounded-3xl flex items-center justify-center bg-lightPlayRed cursor-pointer"
              >
                <span className="font-semibold text-white">Register</span>
              </div>
            ) : (
              <div onClick={()=>router.push('/login')} className="w-40 h-10 rounded-3xl flex items-center justify-center bg-lightPlayRed cursor-pointer">
                <span className="font-semibold text-white">Login</span>
              </div>
            )}
          </div>
        </div>
      </div>
    );

  return (
    <div className="bg-[#B30D28] w-full fixed z-40 shadow-sm border-b">
      <div className="flex max-w-7xl p-2  items-center justify-between  mx-auto ">
        <div className="flex  justify-between lg:justify-start items-center space-x-2 ">
          <div className="flex items-center justify-center">
            <MdMenu className="text-white h-6 w-8 cursor-pointer" />
            <div
              className="relative w-32 h-10 lg:inline-grid cursor-pointer"
              onClick={() => router.push("/")}
            >
              <Image src="/logo.png" objectFit="contain" layout="fill" />
            </div>
          </div>
          <div className="hidden sm:flex relative mt-1 p-1 pl-2 rounded-full sm:text-sm  bg-[#C51834]   items-center">
            <MdSearch className="h-5 w-5 text-gray-200" />
            <input
              type="text"
              placeholder="Search for people, Channels, Groups and #hashtags"
              name=""
              className="placeholder-[#E08B93] rounded -full placeholder:text-sm w-96 h-5 pl-1 py-4 bg-[#C51834] outline-0 border-0 focus:outline-none"
              id=""
            />
          </div>
        </div>
        <div className="lg:hidden rounded-full bg-[#C51834] flex items-center justify-center p-1">
          <MdOutlineSearch className="h-8 w-8 text-white" />
        </div>
        <div className="items-center space-x-2 hidden lg:flex  ">
          <div className="icon-bg">
            <BsPlusSquare className="h-5 w-5 text-white" />
          </div>
          <div className="icon-bg">
            <SiGooglechat className="h-5 w-5 text-white" />
          </div>
          <div className="icon-bg">
            <AiFillBell className="h-5 w-5 text-white" />
          </div>
          <div
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="row-container rounded-full bg-[#BA253D] space-x-1 pr-2 cursor-pointer"
          >
            <Image
              src={session ? session.user.image : "/profile_avatar_full.jpg"}
              width={45}
              height={45}
              objectFit="contain"
              className="rounded-full"
            />

            <p className=" text-xs font-semibold text-white">
              {session?.user.name}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
