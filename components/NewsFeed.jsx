import { data } from "./data.js";
import { useState } from "react";
import NewsFeedCard from "./NewsFeedCard";
const NewsFeed = () => {
  const [feeds, setFeeds] = useState(data?.feed);
  return (
    <div className="flex flex-col space-y-4 grow">
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
  );
};

export default NewsFeed;
