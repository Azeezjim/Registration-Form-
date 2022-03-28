import { useState } from "react";
import { Tab } from "@headlessui/react";
import UserCard from "./UserCard";
import { FaChevronDown } from "react-icons/fa";
import ChannelFilter from "./ChannelFilter";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs() {
  let [categories] = useState({
    Users: [
      {
        id: 1,
        title: "Does drinking coffee make you smarter?",
        date: "5h ago",
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: "2h ago",
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Channels: [
      {
        id: 1,
        title: "Is tech making coffee better or worse?",
        date: "Jan 7",
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: "The most innovative things happening in coffee",
        date: "Mar 19",
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Groups: [
      {
        id: 1,
        title: "Ask Me Anything: 10 answers to your questions about coffee",
        date: "2d ago",
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: "4d ago",
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });

  return (
    <Tab.Group>
      <div className="bg-white rounded-xl p-1 mb-80">
        <Tab.List className="row-container p-1 space-x-1 ">
          <div className="bg-[#ecf0f5]  rounded-full px-1 py-0.5">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
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
            <div className="flex flex-col  w-full space-y-2">
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
