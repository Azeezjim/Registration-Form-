import React from 'react'
import ProfileNavBar from "../components/ProfileNavBar.jsx";
import PaymentBody from "../components/PaymentBody.jsx";

function Payment() {
  return (
    <div>
    <div className="flex p-2 rounded shadow">
      <ProfileNavBar className="w-24 mb-8" />
      <div className=" w-full px-1 mx-auto pt-3 mr-24  mt-12 bg-white rounded">
        <PaymentBody />
        {/* <MarketBody /> */}
        <p className="font-semibold ml-10 mt-4">Product</p>
        {/* <MarketForm /> */}
      </div>
    </div>
  </div>
  )
}

export default Payment;
