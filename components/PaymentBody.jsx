import React from "react";

function ProfileBody() {
  return (
    <div className="flex w-full space-x-5">
      <div className="mt-6 p-2 rounded-md w-[48%] ml-3">
        <div className="w-[100%] h-20 shadow-sm rounded  grid grid-cols-2 gap-x-5 gap-y-2">
          <div className="flex justify-center flex-col items-center text-gray-500  border-2 ">
            <p>Container</p>
          </div>

          <div className="flex justify-center flex-col items-center text-gray-500 border-2 ">
            <p>Container</p>
          </div>

          <div className="flex justify-center flex-col items-center text-gray-500 border-2 ">
            <p>Container</p>
          </div>

          <div className="flex justify-center flex-col items-center text-gray-500 border-2 ">
            <p>Container</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBody;
