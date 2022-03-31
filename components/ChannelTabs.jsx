import { useState } from "react";
import { Tab } from "@headlessui/react";
import ChannelCard from "./ChannelCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ChannelTabs = () => {
  let [categories] = useState([
    "Subscribed channels",
    "Suggested Channels",
    "My Channel",
  ]);

  return (
    <Tab.Group>
      <div className="bg-white rounded-2xl p-1">
        <Tab.List>
          <div className="flex justify-start space-x-3 items-center">
            {categories.map((category, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  classNames(
                    "w-auto h-8 px-4 text-sm leading-5 font-medium ",
                    "focus:outline-none focus:ring-0 ",
                    selected
                      ? "bg-[#FFCFD4] text-textPlayRed rounded-full shadow-lg"
                      : "text-gray-800 bg-white rounded-full shadow-lg"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </div>
        </Tab.List>
        <Tab.Panels className="mt-2">
          {/* users tab */}
          <Tab.Panel className={classNames("bg-white rounded-xl p-1")}>
            <div className="p-2 flex overflow-x-scroll space-x-4 py-1 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scroll-smooth scrollbar-track-white">
               {[...Array(10)].map((_, index) => (
                <ChannelCard key={index} />
              ))}
            </div>
             
          </Tab.Panel>
          {/* channels tab */}
          <Tab.Panel className={classNames("bg-white rounded-xl p-1")}>
            <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-x-20 gap-y-4"></div>
            <div className="w-full row-container space-x-1 py-5">
              <div className="!bg-white border !w-8 !h-8 shadow hover:shadow-2xl icon-bg"></div>
              <p className="text-lightPlayRed font-medium text-sm cursor-pointer">
                Load more Channels
              </p>
            </div>
          </Tab.Panel>
          <Tab.Panel className={classNames("bg-white rounded-xl p-3")}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-5"></div>
            <div className="w-full row-container space-x-1 py-5">
              <div className="!bg-white border !w-8 !h-8 shadow hover:shadow-2xl icon-bg"></div>
              <p className="text-lightPlayRed font-medium text-sm cursor-pointer">
                Load more Groups
              </p>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default ChannelTabs;
