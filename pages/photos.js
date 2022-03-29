/* eslint-disable @next/next/no-img-element */
import SideNavLayout from "../components/SideNavLayout";
import FilterSearch from "../components/LeftSideBar";
import LeftSideBar from "../components/LeftSideBar";
import { MdPhotoSizeSelectActual } from "react-icons/md";

export default function bookmarks() {
  const images = [
    "person2",
    "person5",
    "person6",
    "person7",
    "person8",
    "person2",
    "person3",
    "person8",
  ];
  return (
    <div className="flex ">
      <LeftSideBar className="w-20" />
      <div className="max-w-5xl px-1 mx-auto pt-20 mr-16 ml-6 shadow ">
        <div className=" bg-white ">
          <div className="py-1 space-y-2">
            <div className="py-3 mx-2 flex space-x-2 ">
              <div className="side-icon ">
                <MdPhotoSizeSelectActual className="text-white h-5 w-5" />
              </div>
              <p className=" m-auto font-semibold">Photos</p>
            </div>
            <hr className="w-full py-3 "/>
          </div>
          <div className="grid grid-cols-4 gap-2">
            {images.map((image, i) => (
              <img
                key={i}
                className="h-48 rounded"
                src={`images/${image}.jpg`}
                alt={image}
              />
            ))}
          {/* <img src="/public/images/" alt=""> */}
          </div>
        </div>
      </div>
    </div>
  );
}
