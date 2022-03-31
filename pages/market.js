/* eslint-disable @next/next/no-img-element */
import ProfileNavBar from "../components/ProfileNavBar";
import MarketButtons from "../components/MarketButtons.jsx";

function Market() {
  return (
    <div className="flex">
      <ProfileNavBar className="w-20" />
      <div className=" w-full px-1 mx-auto pt-3  ml-6 shadow  mt-20">
        <p className="font-semibold">Order View</p>
        <MarketButtons />
        <div className="mt-6 p-2 w-72 shadow-md rounded ">
          <img
            src="images/Illustration/football.jpg"
            alt="Order image"
            className="w-20 h-20 flex justify-start"
          />
          <div className="mt-4 ">
            <span className="flex text-[10px] justify-between mr-8">
              <p className="font-semibold">Order id</p>
              <p className=" mb-7 text-[10px] ">0-44-87543-145763</p>
            </span>
            <hr className="w-full font-bold mt-1.5" />
          </div>

          <div className="mt-4 ">
            <span className="flex text-[10px] justify-between mr-8">
              <p className="font-semibold ">Product Name :</p>
            </span>
            <hr className="w-full font-bold mt-1.5 " />
          </div>

          <div className="mt-4 ">
            <span className="flex text-[10px] justify-between mr-8">
              <p className="font-semibold">Quality :</p>
              <p className=" mb-7 text-[10px] ">0-44-87543-145763</p>
            </span>
            <hr className="w-full font-bold mt-1.5" />
          </div>

          <div className="mt-4 ">
            <span className="flex text-[10px] justify-between mr-8">
              <p className="font-semibold">Per Quantity Order :</p>
              <p className=" mb-7 text-[10px] ">0-44-87543-145763</p>
            </span>
            <hr className="w-full font-bold mt-1.5" />
          </div>
          <div className="mt-4 ">
            <span className="flex text-[10px] justify-between mr-8">
              <p className="font-semibold">Sub Total Ammunt :</p>
              <p className=" mb-7 text-[10px] ">0-44-87543-145763</p>
            </span>
            <hr className="w-full font-bold mt-1.5" />
          </div>

          <div className="mt-4 ">
            <span className="flex text-[10px] justify-between mr-8">
              <p className="font-semibold">Order Date :</p>
              <p className=" mb-7 text-[10px] ">0-44-87543-145763</p>
            </span>
            <hr className="w-full font-bold mt-1.5" />
          </div>

          <div className="mt-4 ">
            <span className="flex text-[10px]">
              <p className="font-semibold">Payment Method :</p>
              <p className=" mb-7 text-[10px] ">0-44-87543-145763</p>
            </span>
            <hr className="w-full font-bold mt-1.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Market;
