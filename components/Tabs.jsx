import { useState } from "react";
import { Tab } from "@headlessui/react";
import UserCard from "./UserCard";
import { FaChevronDown } from "react-icons/fa";
import ChannelFilter from "./ChannelFilter";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  let [categories] = useState(["Post","Users", "Channels", "Groups"]);

  return (
    <Tab.Group>
      <div className="bg-white rounded-xl p-1 mb-80">
        <Tab.List className="row-container p-1 space-x-1 ">
          <div className="bg-[#ecf0f5]  rounded-full px-1 py-0.5">
            {categories.map((category, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  classNames(
                    "w-[70px] p-.5 text-sm leading-5 font-medium text-gray-700 ",
                    "focus:outline-none focus:ring-0 ",
                    selected
                      ? "bg-white rounded-full shadow-md"
                      : "text-gray-800"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </div>
        </Tab.List>
        <Tab.Panels className="mt-2">
        <Tab.Panel className={classNames("bg-white rounded-xl p-1")}>
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(10)].map((_, index) => (
                <UserCard key={index} />
              ))}
            </div>
            <div className="w-full row-container space-x-1 py-5">
              <div className="!bg-white border !w-8 !h-8 shadow hover:shadow-2xl icon-bg">
                <FaChevronDown className="h-3 w-3 text-lightPlayRed" />
              </div>
              <p className="text-lightPlayRed font-medium text-sm cursor-pointer">
                Load more Users
              </p>
            </div>
          </Tab.Panel>
          {/* users tab */}
          <Tab.Panel className={classNames("bg-white rounded-xl p-1")}>
            <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...Array(10)].map((_, index) => (
                <UserCard key={index} />
              ))}
            </div>
            <div className="w-full row-container space-x-1 py-5">
              <div className="!bg-white border !w-8 !h-8 shadow hover:shadow-2xl icon-bg">
                <FaChevronDown className="h-3 w-3 text-lightPlayRed" />
              </div>
              <p className="text-lightPlayRed font-medium text-sm cursor-pointer">
                Load more Users
              </p>
            </div>
          </Tab.Panel>
          {/* channels tab */}
          <Tab.Panel className={classNames("bg-white rounded-xl p-1")}>
            <div className="grid grid-cols-1 md:grid-cols-2  w-full gap-2">
              {[...Array(10)].map((_, index) => (
                <ChannelFilter key={index} />
              ))}
            </div>
            <div className="w-full row-container space-x-1 py-5">
              <div className="!bg-white border !w-8 !h-8 shadow hover:shadow-2xl icon-bg">
                <FaChevronDown className="h-3 w-3 text-lightPlayRed" />
              </div>
              <p className="text-lightPlayRed font-medium text-sm cursor-pointer">
                Load more Channels
              </p>
            </div>
          </Tab.Panel>
          <Tab.Panel
            className={classNames(
              "bg-white rounded-xl p-3",
              "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
            )}
          >
            <UserCard />
          </Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
}
