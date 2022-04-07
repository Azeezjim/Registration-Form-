/* eslint-disable @next/next/no-img-element */
import ProfileNavBar from "../../components/ProfileNavBar";
import MarketButtons from "../../components/MarketButtons";
import MarketBody from "../../components/MarketBody";

function Market() {
  return (
    <div className="flex p-2 rounded shadow">
      <ProfileNavBar className="w-24 mb-8" />
      <div className=" w-full px-1 mx-auto pt-3 mr-24  mt-12 bg-white rounded">
        <p className="font-semibold mt1.5 mb-3.5 pl-2">Order View</p>
        <MarketButtons />
        <MarketBody />
      </div>
    </div>
  );
}

export default Market;
