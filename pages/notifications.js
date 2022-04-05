import SideNavLayout from "../components/SideNavLayout";
import Notificationcard from "../components/NotificationCard";
import { MdArrowBack } from "react-icons/md";
import { RiCheckboxMultipleLine } from "react-icons/ri";
import { FaRegComment } from "react-icons/fa";
import { BsHeart, BsUnlock, BsCameraVideo } from "react-icons/bs";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { BiMicrophone } from "react-icons/bi";
import { useState } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Notifications = () => {
  return (
    <SideNavLayout>
      <div className="max-w-5xl mx-auto bg-white p-5">
        <div className="w-full flex justify-start items-center mb-8">
          <MdArrowBack className="w-8 h-8" />
          <h2 className="text-2xl uppercase font-semibold">NOTIFICATIONS</h2>
        </div>
        <Tab.Group>
          <Tab.List>
            <div className="flex justify-start  items-center  py-3">
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-auto h-8 px-3 text-sm leading-5 font-semibold flex items-center space-x-1 ",
                    "focus:outline-none focus:ring-0 pb-3",
                    selected
                      ? "text-lightPlayRed border-b-lightPlayRed border-b-[2px]   font-bold"
                      : "text-gray-500"
                  )
                }
              >
                <RiCheckboxMultipleLine className="w-6 h-6 " />
                <h2 className="text-lg font-medium ">All</h2>
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-auto h-8 px-3 text-sm leading-5 font-semibold flex items-center space-x-1 ",
                    "focus:outline-none focus:ring-0 pb-3",
                    selected
                      ? "text-lightPlayRed border-b-lightPlayRed border-b-[2px]   font-bold"
                      : "text-gray-500"
                  )
                }
              >
                <FaRegComment className="w-6 h-6 " />
                <h2 className="text-lg font-medium ">COMMENTS</h2>
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-auto h-8 px-3 text-sm leading-5 font-semibold flex items-center space-x-1 ",
                    "focus:outline-none focus:ring-0 pb-3",
                    selected
                      ? "text-lightPlayRed border-b-lightPlayRed border-b-[2px]   font-bold"
                      : "text-gray-500"
                  )
                }
              >
                <BsHeart className="w-6 h-6 " />
                <h2 className="text-lg font-medium ">LIKED</h2>
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-auto h-8 px-3 text-sm leading-5 font-semibold flex items-center space-x-1 ",
                    "focus:outline-none focus:ring-0 pb-3",
                    selected
                      ? "text-lightPlayRed border-b-lightPlayRed border-b-[2px]   font-bold"
                      : "text-gray-500"
                  )
                }
              >
                <BsUnlock className="w-6 h-6 " />
                <h2 className="text-lg font-medium ">SUBSCRIBED</h2>
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-auto h-8 px-3 text-sm leading-5 font-semibold flex items-center space-x-1 ",
                    "focus:outline-none focus:ring-0 pb-3",
                    selected
                      ? "text-lightPlayRed border-b-lightPlayRed border-b-[2px]   font-bold"
                      : "text-gray-500"
                  )
                }
              >
                <AiOutlineDollarCircle className="w-6 h-6 " />
                <h2 className="text-lg font-medium ">TIPPED</h2>
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-auto h-8 px-3 text-sm leading-5 font-semibold flex items-center space-x-1 ",
                    "focus:outline-none focus:ring-0 pb-3",
                    selected
                      ? "text-lightPlayRed border-b-lightPlayRed border-b-[2px]   font-bold"
                      : "text-gray-500"
                  )
                }
              >
                <BsCameraVideo className="w-6 h-6 " />
                <h2 className="text-lg font-medium ">VIDEO CALLS</h2>
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    "w-auto h-8 px-3 text-sm leading-5 font-semibold flex items-center space-x-1 ",
                    "focus:outline-none focus:ring-0 pb-3",
                    selected
                      ? "text-lightPlayRed border-b-lightPlayRed border-b-[2px]   font-bold"
                      : "text-gray-500"
                  )
                }
              >
                <BiMicrophone className="w-6 h-6 " />
                <h2 className="text-lg font-medium ">AUDIO CALLS</h2>
              </Tab>
            </div>
          </Tab.List>
          <Tab.Panels className="mt-2">
          <Tab.Panel className={classNames("bg-white p-1")}>
             <div className="p-2 grid grid-cols-1">
                {[...Array(2)].map((_, index) => (
                  <Notificationcard key={index} text="liked your post." />
                ))}
                {[...Array(2)].map((_, index) => (
                  <Notificationcard key={index} text="commented on your post." />
                ))}
                {[...Array(2)].map((_, index) => (
                  <Notificationcard key={index} text="is Following you." />
                ))}
              </div>
          </Tab.Panel>
          <Tab.Panel className={classNames("bg-white p-1")}>
             <div className="p-2 grid grid-cols-1">
                {[...Array(6)].map((_, index) => (
                  <Notificationcard key={index} text="commented on your post." />
                ))}
              </div>
          </Tab.Panel>
          <Tab.Panel className={classNames("bg-white p-1")}>
             <div className="p-2 grid grid-cols-1">
                {[...Array(6)].map((_, index) => (
                  <Notificationcard key={index} text="liked your post." />
                ))}
              </div>
          </Tab.Panel>
          <Tab.Panel className={classNames("bg-white p-1")}>
             <div className="p-2 grid grid-cols-1">
                {[...Array(6)].map((_, index) => (
                  <Notificationcard key={index} text="is Following you." />
                ))}
              </div>
          </Tab.Panel>
          <Tab.Panel className={classNames("bg-white p-1")}>
             <div className="p-2 grid grid-cols-1">
                {[...Array(6)].map((_, index) => (
                  <Notificationcard key={index} text="has Tipped you." />
                ))}
              </div>
          </Tab.Panel>
          <Tab.Panel className={classNames("bg-white p-1")}>
             <div className="p-2 grid grid-cols-1">
                {[...Array(3)].map((_, index) => (
                  <Notificationcard key={index} text="Video call request has been initiated by user test5 !! please check" call={true} />
                ))}
                {[...Array(3)].map((_, index) => (
                  <Notificationcard key={index} text="Your Video Call request has been accepted by user Test Demo !!" call={true} />
                ))}
              </div>
          </Tab.Panel>
          <Tab.Panel className={classNames("bg-white p-1")}>
             <div className="p-2 grid grid-cols-1">
                {[...Array(3)].map((_, index) => (
                  <Notificationcard key={index} text="Audio call request has been initiated by user test5 !! please check" call={true} />
                ))}
                {[...Array(3)].map((_, index) => (
                  <Notificationcard key={index} text="Your Audio Call request has been accepted by user Test Demo !!" call={true} />
                ))}
              </div>
          </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </SideNavLayout>
  );
};

export default Notifications;
