import { useState } from "react";
import { data } from "./data.js";
import TopCreators from "./TopCreators.jsx";
import Trending from "./Trending.jsx";

const NewsFeedSideBar = () => {
const [creators, setCreators] = useState(data?.stories.slice(0,6));
  return (
    <div className="flex flex-col space-y-2">
        <TopCreators creators={creators}/>
        <Trending creators={creators}/>
    </div>
  );
};

export default NewsFeedSideBar;
