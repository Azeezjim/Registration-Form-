import { useState } from "react";
import { Tab } from "@headlessui/react";
import ChannelCard from "./ChannelCard";
import NewsFeedCard from "./NewsFeedCard";
import GroupCard from "./GroupCard";
import { useSelector } from "react-redux";
import { MdSmartDisplay } from "react-icons/md";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const ProfileTabs = () => {
  const feeds = useSelector((state) => state.creators.feed);
  let [categories] = useState([
    "Timeline",
    "Channel",
    "Groups",
    "Photos",
    "Videos",
    "Audios",
    "Shop",
  ]);

  return (
    <div>
      <Tab.Group>
        <Tab.List>
          <div className="flex justify-start space-x-3 items-center  border rounded-b-lg shadow-md py-3 bg-slate-50">
            {categories.map((category, index) => (
              <Tab
                key={index}
                className={({ selected }) =>
                  classNames(
                    "w-auto h-8 px-4 text-sm leading-5 font-semibold ",
                    "focus:outline-none focus:ring-0 ",
                    selected
                      ? "text-lightPlayRed underline decoration-lightPlayRed underline-offset-8 decoration-[3px] font-bold"
                      : ""
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
            <div className="p-2 grid grid-cols-1 gap-y-3">
              {feeds.map((feed, index) => (
                <NewsFeedCard
                  image={feed.photos[0]}
                  user={feed.user}
                  likeCount={feed.likeCount}
                  commentCount={feed.commentCount}
                  description={feed.description}
                  popularComments={feed.popularComments}
                  time={feed.time}
                  key={index}
                />
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel className={classNames("bg-white rounded-xl p-1")}>
            <div className="p-2 bg-white rounded-lg shadow-lg border">
              <div className="flex items-center space-x-2 my-5">
                <div className="side-icon">
                  <MdSmartDisplay className="text-white h-6 w-6" />
                </div>
                <h1 className="text-3xl font-semibold">Ore's Groups</h1>
              </div>
              <div className="p-2 grid grid-cols-2 gap-3">
                {[...Array(3)].map((_, index) => (
                  <GroupCard key={index} profile={true} channel={index} />
                ))}
              </div>
            </div>
            <div className="p-2 bg-white rounded-lg shadow-lg mt-16 border">
              <div className="flex items-center space-x-2 my-5">
                <div className="side-icon">
                  <MdSmartDisplay className="text-white h-6 w-6" />
                </div>
                <h1 className="text-3xl font-semibold">Groups joined by Ore</h1>
              </div>
              <div className="p-2 grid grid-cols-2 gap-3">
                {[...Array(4)].map((_, index) => (
                  <GroupCard key={index} profile={true} channel={index} />
                ))}
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default ProfileTabs;
