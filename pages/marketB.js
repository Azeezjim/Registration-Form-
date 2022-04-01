import ProfileNavBar from "../components/ProfileNavBar";
import MarketButtons from "../components/MarketButtons.jsx";
import MarketForm from "../components/MarketForm.jsx";
// import MarketBody from "../components/MarketBody.jsx"


function MaeketB() {
  return (
    <div>
       <div className="flex p-2 rounded shadow">
      <ProfileNavBar className="w-24 mb-8" />
      <div className=" w-full px-1 mx-auto pt-3 mr-24  mt-12 bg-white rounded">
        <MarketButtons />
        {/* <MarketBody /> */}
        <p className="font-semibold mb-3 mt-4">Product</p>
        <MarketForm />
      </div>
    </div>
    </div>
  )
}

export default MaeketB