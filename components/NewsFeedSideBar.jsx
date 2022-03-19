import { RiVipCrownFill } from "react-icons/ri";
import { useState } from "react";
import { data } from "./data.js";
import CreatorCard from "./CreatorCard.jsx";

const NewsFeedSideBar = () => {
const [creators, setCreators] = useState(data?.stories.slice(0,6));
  return (
    <div className="flex flex-col">
      <div className="flex flex-col space-y-2 items-start justify-center bg-white border shadow-lg rounded-lg max-w-4xl p-2">
        <div className="flex items-center justify-center  space-x-1">
          <div className="flex rounded-full bg-orange-400 items-center justify-center w-6 h-6">
            <RiVipCrownFill className=" text-white"/>
          </div>
          <p className="text-start">Top Content Creators</p>
        </div>
        <div className="grid grid-cols-3 gap-2">
            {
                creators.map((creator) => (
                    <CreatorCard username={creator.username} image={creator.image} key={creator.username}/>
                ))
            }
        </div>
      </div>
    </div>
  );
};

export default NewsFeedSideBar;
