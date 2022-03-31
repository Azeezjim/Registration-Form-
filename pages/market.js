/* eslint-disable @next/next/no-img-element */
import ProfileNavBar from "../components/ProfileNavBar";
import MarketButtons from "../components/MarketButtons.jsx";
import MarketBody from "../components/MarketBody.jsx"

function Market() {
  return (
    <div className="flex">
      <ProfileNavBar className="w-20" />
      <div className=" w-full px-1 mx-auto pt-3  ml-16mr-24 shadow  mt-28 mr-24">
        <p className="font-semibold">Order View</p>
        <MarketButtons />
        <MarketBody />
      </div>
    </div>
  );
}

export default Market;
