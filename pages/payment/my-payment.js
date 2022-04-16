import ProfileNavBar from "../../components/ProfileNavBar.jsx";
import MyPaymentBody from "../../components/MyPaymentBody.jsx";

function MyPayment() {
  return (
    <div>
    <div className="flex p-2 rounded shadow">
      <ProfileNavBar className="w-24 mb-8" />
      <div className=" w-full px-1 mx-auto pt-3 mr-24  mt-12 bg-white rounded justify-start">
      <p className=" mt-4 font-bold">My Payment</p>
      <p className="text-[10px] text-gray-500">History of all payment you made</p>
      <MyPaymentBody />
      </div>
    </div>
  </div>
  )
}

export default MyPayment;
