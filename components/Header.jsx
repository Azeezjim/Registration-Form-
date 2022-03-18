import Image from "next/image";
import { MdMenu, MdOutlineClose, MdSearch } from "react-icons/md";
import {BsPlusSquare} from 'react-icons/bs'
import { SiGooglechat} from 'react-icons/si'
import {AiFillBell} from 'react-icons/ai'

const Header = () => {
  return (
    <div className="shadow-sm border-b  bg-[#B30D28] w-full">
      <div className="flex max-w-7xl mx-5 xl:mx-auto p-2 h-[60px] items-center justify-between">
        <div className="flex items-center space-x-2">
            <MdMenu  className="text-white h-6 w-8 cursor-pointer"/>
          <div className="relative w-32 h-10 lg:inline-grid cursor-pointer">
            <Image src="/logo.png" objectFit="contain" layout="fill" />
          </div>
          <div className="relative mt-1 p-1 pl-2 rounded-full sm:text-sm  bg-[#C51834]  flex items-center">
                <MdSearch className="h-5 w-5 text-gray-200"/>
              <input type="text" placeholder="Search for people, Channels, Groups and #hashtags" name="" className="placeholder-[#E08B93] rounded -full placeholder:text-sm w-96 h-5 pl-1 py-4 bg-[#C51834] outline-0 border-0 focus:outline-none" id="" />
          </div>       
        </div>
        <div className="flex items-center space-x-2">
                <div className="icon-bg">
                    <BsPlusSquare className="h-5 w-5 text-white"/>
                </div>
                <div className="icon-bg">
                    <SiGooglechat className="h-5 w-5 text-white"/> 
                </div>
                <div className="icon-bg">
                    <AiFillBell className="h-5 w-5 text-white"/>
                </div>
                <div className="flex bg-[#BA253D] rounded-full items-center  space-x-1 w-28 h-10 cursor-pointer">
                    <div className="relative w-10 h-10 ">
                        <Image src='/profile_avatar_full.jpg' layout="fill" objectFit="contain" className="rounded-full w-10 h-10"/>    
                    </div>
                    <span className="ml-12 h-10 w-10 relative top-2 right-0 text-white font-bold">Afam</span>
                </div>
          </div>
      </div>
    </div>
  );
};

export default Header;
