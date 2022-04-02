import { MdProductionQuantityLimits } from "react-icons/md";

function MarketButtons() {
  return (
    <div className="flex justify-between">
      <div className="flex space-x-2.5 mt-1 ml-2 text-[11px]">
        <div className=" py-1 px-1.5 rounded flex items-center justify-start bg-lightPlayRed cursor-pointer">
          <span className="font-semibold text-white flex">
            <MdProductionQuantityLimits className="mt-1" /> Products
          </span>
        </div>
        <div className=" py-1 px-1.5 rounded flex items-center justify-start bg-lightPlayRed cursor-pointer">
          <span className="font-semibold text-white flex">
            <MdProductionQuantityLimits className="mt-1" /> Products
          </span>
        </div>
        <div className=" py-1 px-1.5 rounded flex items-center justify-start bg-lightPlayRed cursor-pointer">
          <span className="font-semibold text-white flex">
            <MdProductionQuantityLimits className="mt-1" /> Products
          </span>
        </div>
      </div>
      <div className="flex space-x-2.5 mt-3 ml-2 text-[11px]">
        <div className=" py-1 px-1.5 rounded flex items-center justify-end bg-lightPlayRed cursor-pointer">
          <span className="font-semibold text-white flex">
            <MdProductionQuantityLimits className="mt-1" /> Products
          </span>
        </div>
        <div className=" py-1 px-1.5 rounded flex items-center justify-end bg-lightPlayRed cursor-pointer">
          <span className="font-semibold text-white flex">
            <MdProductionQuantityLimits className="mt-1" /> Products
          </span>
        </div>
      </div>
    </div>
  );
}

export default MarketButtons;
