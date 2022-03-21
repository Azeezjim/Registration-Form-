import { useState } from "react";
import { data } from "./data.js";
import TopCreators from "./TopCreators.jsx";
import Trending from "./Trending.jsx";
import LikedChannels from "./LikedChannels.jsx";
import LikedGroups from "./LikedGroups.jsx";

const NewsFeedSideBar = () => {
const [creators, setCreators] = useState(data?.stories.slice(0,6));
  return (
    <div className="hidden lg:block h-[calc(100vh-5.75rem)] sticky top-16  overflow-y-scroll  scroll-smooth scrollbar-hide overscroll-contain">
      <div className="flex flex-col space-y-2 sticky h-[1000px]">
        <TopCreators creators={creators} />
        <Trending creators={creators} />
        <LikedChannels />
        <LikedGroups />
      </div>
    </div>
  );
};

export default NewsFeedSideBar;
