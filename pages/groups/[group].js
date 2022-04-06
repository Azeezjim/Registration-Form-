import SideNavLayout from "../../components/SideNavLayout";
import { BsFillArrowLeftCircleFill , BsPeople} from "react-icons/bs";
import {RiPriceTag3Line} from "react-icons/ri";
import { MdLockOutline } from "react-icons/md";
import {CgNotes} from "react-icons/cg";
import Image from "next/image";
import Button from "../../components/Button";

const Group = () => {
  return (
    <SideNavLayout>
      <div>
        <div className="w-full mx-auto relative">
          <img
            src="https://playjor.ams3.digitaloceanspaces.com/upload/photos/d-cover.jpg"
            alt=""
            srcSet=""
            className="object-contain   w-full blur-[20px] -mt-36"
          />
          <div className="w-full h-[107%] absolute inset-x-0 top-1 bg-gradient-to-b from-transparent to-[#f9f9f9] z-5"></div>

          <div className=" max-w-[900px] mx-auto absolute inset-0 -bottom-8">
            <div className="w-full  rounded-2xl  relative z-10">
              <img
                src="https://playjor.ams3.digitaloceanspaces.com/upload/photos/d-cover.jpg"
                alt=""
                srcSet=""
                className="object-cover w-full "
              />
              <div />
            </div>
            <div className="flex justify-start p-2 px-4 items-center w-full bg-white rounded-b-lg">
              <div className="row-container space-x-2">
                <div className="relative w-14 h-14 rounded-xl">
                  <Image
                    src={"/profile_avatar_full.jpg"}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-xl"
                  />
                </div>
                <div className="flex flex-col justify-center space-y-2">
                  <div className="row-container space-x-1">
                    <h2 className="text-3xl font-bold leading-7">
                      thesidegist
                    </h2>
                    {/* <MdVerified className="w-4 h-4 text-lightPlayRed" /> */}
                  </div>
                  <p className="text-sm font-semibold">2 members</p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-8 h-8 rounded-full absolute z-10 top-40 left-10 bg-white cursor-pointer"
            onClick={() => router.back()}
          >
            <BsFillArrowLeftCircleFill className="h-8 w-8  " />
          </div>
        </div>
        <div className="row-container mb-10 mt-10 ">
          <div className="bg-white w-[500px] rounded-lg shadow-md p-5">
            <div className="flex flex-col items-start space-y-2 mb-5">
              <div className="flex items-center space-x-2">
                <MdLockOutline className="w-5 h-5 text-gray-500" />
                <p className="font-semibold text-lh">Private</p>
              </div>
              <div className="flex items-center space-x-2">
                <BsPeople className="w-5 h-5 text-gray-500" />
                <p className="font-semibold text-lh">2 Members</p>
              </div>
              <div className="flex items-center space-x-2">
                <RiPriceTag3Line className="w-5 h-5 text-gray-500" />
                <p className="font-semibold text-lh">Cars and Vehicles</p>
              </div>
              <div className="flex items-center space-x-2">
                <CgNotes className="w-5 h-5 text-gray-500" />
                <p className="font-semibold text-lh">3 post</p>
              </div>
            </div>
            <div className="col-container space-y-3">
              <h2 className="text-4xl font-bold text-center">
                Sorry, Private Group!
              </h2>
              <p className="font-bold text-sm text-gray-500 text-center w-[370px]">
                This page is a private group and content is only availaible on
                subscription.
              </p>
              <div className="row-container space-x-4">
                <Button
                  text="Join"
                  extraClasses="w-36 h-9"
                  active={true}
                />
                {/* <button onClick={() => router.back()}> */}
                <Button
                  text="Go Back"
                  extraClasses="w-36 h-9 bg-[#FFD0D8] hover:bg-[#FF1534] hover:text-white text-lightPlayRed"
                  textClass="group-hover:text-white hover:text-white  font-semibold"
                />
                {/* </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SideNavLayout>
  );
};

export default Group;
