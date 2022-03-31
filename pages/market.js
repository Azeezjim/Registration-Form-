/* eslint-disable @next/next/no-img-element */
import ProfileNavBar from "../components/ProfileNavBar";
import { MdProductionQuantityLimits } from "react-icons/md";

function Market() {
  return (
    <div className="flex">
      <ProfileNavBar className="w-20" />
      <div className="max-w-5xl px-1 mx-auto pt-3mr-16 ml-6 shadow  mt-20">
        <p className="font-semibold">Order View</p>
        <div>
          <div >
            <div className="flex space-x-2.5 mt-3 ml-2 text-[13px]">
              <div className=" py-2 px-1.5 rounded flex items-center justify-start bg-lightPlayRed cursor-pointer">
                <span className="font-semibold text-white flex">
                  <MdProductionQuantityLimits className="mt-1" /> Products
                </span>
              </div>
              <div className=" py-2 px-1.5 rounded flex items-center justify-start bg-lightPlayRed cursor-pointer">
                <span className="font-semibold text-white flex text-sm">
                  <MdProductionQuantityLimits className="mt-1" /> Products
                </span>
              </div>
              <div className=" py-2 px-1.5 rounded flex items-center justify-start bg-lightPlayRed cursor-pointer">
                <span className="font-semibold text-white flex">
                  <MdProductionQuantityLimits className="mt-1" /> Products
                </span>
              </div>
            </div>
              <div className="mt-6 p-2 shadow-md rounded flex-start">
                <img
                  src="images/Illustration/football.jpg"
                  alt="Order image"
                  className="w-20 h-20 flex justify-start"
                />
                <div className="flex">
                  <span className="flex text-[10px] flex-row justify-around">
                    <p>Order id</p>
                    <p className="flex-end">0-44-87543-145763</p>
                  </span>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;
