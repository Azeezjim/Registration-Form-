import { useState } from "react";
import { useSelector } from "react-redux";
import TopCreators from "../creators/TopCreators.jsx";
import Trending from "../Trending.jsx";
import LikedChannels from "../channels/LikedChannels.jsx";
import LikedGroups from "../groups/LikedGroups.jsx";

const NewsFeedSideBar = () => {
const creators = useSelector(state => state.creators.creators.slice(0,6));
  return (
    <div className="hidden lg:block  sticky top-16 h-[calc(100vh-5.75rem)]  overflow-y-scroll  scroll-smooth scrollbar-hide overscroll-contain">
      <div className="flex flex-col space-y-2  h-[1500px]">
        <TopCreators creators={creators} />
        <Trending creators={creators} />
        <LikedChannels />
        <LikedGroups />
      </div>
    </div>
  );
};

export default NewsFeedSideBar;
