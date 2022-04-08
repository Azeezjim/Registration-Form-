import { useState } from "react";
import { Tab } from "@headlessui/react";
import GroupCard from "./GroupCard";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const GroupTabs = ({ groupsAll }) => {
  let [categories] = useState([
    "Subscribed Groups",
    "Suggested Groups",
    "My Groups",
  ]);

  let [groups] = useState([
    "Recently added",
    "Family",
    "University",
    "more"
  ])

  if (groupsAll) {
    return (
      <Tab.Group>
          <Tab.List>
            <div className="flex justify-start space-x-3 items-center p-2">
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
                <h2 className="text-sm font-medium ">All Groups</h2>
                <div className="bg-[#FFE2E5] rounded-full p-1 row-container">
                  <span className="text-lightPlayRed font-medium text-xs">
                    3,4510
                  </span>
                </div>
              </Tab>
              {
                groups.map((group, index) => (
                  <Tab key={index}
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
                <h2 className="text-sm font-medium ">{group}</h2>
                
              </Tab>
                ))
              }
            </div>
          </Tab.List>
          <Tab.Panels className="mt-2">
            <Tab.Panel className={classNames("bg-white rounded-xl p-1")}>
              <div className="p-2 pb-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                {[...Array(10)].map((_, index) => (
                  <GroupCard key={index} groupsAll={true} />
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel className={classNames("bg-white rounded-xl p-1")}>
              <div className="p-2 pb-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                {[...Array(10)].map((_, index) => (
                  <GroupCard key={index} groupsAll={true} />
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel className={classNames("bg-white rounded-xl p-1")}>
              <div className="p-2 pb-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                {[...Array(10)].map((_, index) => (
                  <GroupCard key={index} groupsAll={true} />
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel className={classNames("bg-white rounded-xl p-1")}>
              <div className="p-2 pb-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                {[...Array(10)].map((_, index) => (
                  <GroupCard key={index} groupsAll={true} />
                ))}
              </div>
            </Tab.Panel>
            <Tab.Panel className={classNames("bg-white rounded-xl p-1")}>
              <div className="p-2 pb-5 grid grid-cols-1 md:grid-cols-2 gap-5">
                {[...Array(10)].map((_, index) => (
                  <GroupCard key={index} groupsAll={true} />
                ))}
              </div>
            </Tab.Panel>
          </Tab.Panels>
        
      </Tab.Group>
    );
  }

  return (
    <Tab.Group>
      <div className="bg-white rounded-2xl p-1 pb-5 shadow-md">
        <h1 className="text-3xl font-semibold pl-2 py-3">Groups</h1>
        <Tab.List>
          <div className="flex justify-start space-x-3 items-center p-2">
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
          <Tab.Panel className={classNames("bg-white rounded-xl p-1")}>
            <div className="p-2 pb-5 flex overflow-x-scroll space-x-4 py-1 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scroll-smooth scrollbar-track-white">
              {[...Array(10)].map((_, index) => (
                <GroupCard key={index} groups={true} />
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel className={classNames("bg-white rounded-xl p-1")}>
            <div className="p-2 pb-5 flex overflow-x-scroll space-x-4 py-1 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scroll-smooth scrollbar-track-white">
              {[...Array(10)].map((_, index) => (
                <GroupCard key={index} groups={true} />
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel className={classNames("bg-white rounded-xl p-1")}>
            <div className="p-2 pb-5 flex overflow-x-scroll space-x-4 py-1 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scroll-smooth scrollbar-track-white">
              {[...Array(10)].map((_, index) => (
                <GroupCard key={index} groups={true} />
              ))}
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </div>
    </Tab.Group>
  );
};

export default Grouptabs;
