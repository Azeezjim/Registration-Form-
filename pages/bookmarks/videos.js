/* eslint-disable react/jsx-key */
/* eslint-disable @next/next/no-img-element */
import ProfileNavBar from "../../components/ProfileNavBar";
import { IoMdVideocam } from "react-icons/io";
import { BiChevronDown } from "react-icons/bi";

export default function bookmarks() {
  const videos = ["Will Smith 1.mp4", "Will Smith 2.mp4"];
  return (
    <div className="flex ">
      <ProfileNavBar className="w-20" />
      <div className="max-w-5xl px-1 mx-auto pt-20 mr-16 ml-6 shadow ">
        <div className=" bg-white p-2 shadow-md">
          <div className="py-1 space-y-2">
            <div className="py-3 mx-2 flex space-x-2 ">
              <div className="side-icon ">
                <IoMdVideocam className="text-white h-5 w-5" />
              </div>
              <p className=" m-auto font-semibold-sm">Videos</p>
            </div>
            <hr className="w-full py-3 " />
          </div>
          <div className="grid grid-cols-4 gap-2 rounded">
            {videos.map((video, i) => (
              <video
                key={i}
                src={`/Videos/${video}`}
                controls
                // autoPlay
                className="  rounded"
              >
                {video}
              </video>
            ))}
          </div>
        </div>
        <div className="flex space-x-2.5 justify-center items-center mt-5">
          <div className="white-icon ">
            <BiChevronDown className="text-[#CD0929] h-5 w-5" />
          </div>
          <p className="text-[#CD0929] text-[12px]">Load more videos</p>
        </div>
      </div>
    </div>
  );
}
