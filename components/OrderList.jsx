import React from "react";

function OrderList() {
  const dataArray = [
    {
      image: "https://i.ibb.co/vJWQbZy/1.jpg",
    }
  ]

  return (
    <div>
      <div className="p-2.5 bg-red-500 text-white flex justify-between text-[12px]">
        <p>Product</p>
        <div className="flex justify-between space-x-[4.5rem] mr-20">
          <p className="mr-7">Order id</p>
          <p>Shipping Address</p>
          <p>Phone Number</p>
          <p>Amount</p>
          <p>Action</p>
        </div>
      </div>

      <div className="flex justify-between text-[12px] mt-8">
        <div className="flex space-x-3">
          <img
            src="images/Illustration/football.jpg"
            alt="Order image"
            className="w-32 h-[100px] flex justify-start"
          />
          <div className="flex flex-col justify-center items-center">
            <p>Pink Dress</p>
            <p>Quantity 1</p>
          </div>
        </div>
      <div className="flex justify-between items-center space-x-[4.5rem] mr-20">
        <p>0-23-64879869</p>
        <p className="w-20">Kudiu Gati, Hosur Road, Banglone, Kankataka </p>
        <p>917834537</p>
        <p>05673874</p>
        <button className="text-white bg-red-500 py-1 px-5 rounded-md text-[11px]">
            View
          </button>
      </div>
      </div>
    </div>
  );
}

export default OrderList;
