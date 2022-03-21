import { FaCheckCircle } from "react-icons/fa";
import {
  BsThreeDots,
  BsHeart,
  BsHeartFill,
  BsChat,
  BsHexagon,
} from "react-icons/bs";
import { HiOutlineEmojiHappy, HiPaperAirplane } from "react-icons/hi";
import ReadMoreReact from "read-more-react";
import { useRef, useState } from "react";
import Popover from "@material-tailwind/react/Popover";
import PopoverContainer from "@material-tailwind/react/PopoverContainer";
import PopoverHeader from "@material-tailwind/react/PopoverHeader";
import PopoverBody from "@material-tailwind/react/PopoverBody";
import Comments from "./Comments";
import Image from "next/image";


const NewsFeedCard = ({
  image,
  user,
  likeCount,
  commentCount,
  description,
  popularComments,
  time,
}) => {
  const optionsButtonRef = useRef();
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  return (
    <div className="sm:rounded-2xl  sm:border shadow-md w-full border bprder-red-500 basis-2/3 bg-coolGray-900 tex">
      <div className="flex items-center justify-between p-1 px-2 sm:px-4 sm:p-3 border-b">
        <div className="flex items-center space-x-1 sm:space-x-2">
          <img
            src={user.image}
            alt=""
            className="object-cover object-center w-12 h-12   rounded-full shadow-sm bg-gray-500 border-gray-700"
          />
          <div className="flex space-x-1 text-sm  items-center justify-center">
            <h2 className=" font-semibold leading-none">{user.username}</h2>
            <FaCheckCircle className="w-3 h-3 text-playRed" />

            <span className="inline-block  text-xs leading-none text-gray-600">
              @afamdman
            </span>
          </div>
        </div>
        <div className="flex items-center justify-center space-x-1">
          <span className="text-xs sm:text-sm text-gray-600 font-light leading-none">
            {time}
          </span>

          <button
            ref={optionsButtonRef}
            title="Open options"
            className="focus:shadow-none focus:outline-none"
          >
            <BsThreeDots className=" w-6 h-6 lg:w-6" />
          </button>
          <Popover placement="bottom" ref={optionsButtonRef}>
            <PopoverContainer>
              <PopoverBody>
                <div className="flex flex-col w-40 items-center py-2 justify-center space-y-1">
                  <div className="hover:bg-gray-100 hover:text-red-500 w-full border-b h-8 p-2 rounded-md cursor-pointer flex items-center justify-start">
                    <p className="font-bold text-xs">Copy link to post</p>
                  </div>
                  <div className="hover:bg-gray-100 hover:text-red-500 w-full h-8 p-2 rounded-md cursor-pointer flex items-center justify-start">
                    <p className="font-bold text-xs">Report</p>
                  </div>
                  <div className="hover:bg-gray-100 hover:text-red-500 w-full h-8 p-2 rounded-md cursor-pointer flex items-center justify-start">
                    <p className="font-bold text-xs">Add to blocklists.</p>
                  </div>
                </div>
              </PopoverBody>
            </PopoverContainer>
          </Popover>
        </div>
      </div>
      <div className=" p-1 sm:p-2 text-lg">
        <ReadMoreReact
          min={100}
          max={200}
          readMoreText="Read more..."
          text={description}
        />
      </div>
      <div className="md:border md:p-0.5 ">
        <img src={image} className="w-full  object-cover bg-gray-500" />
      </div>

      <div className="p-3">
        <div className="flex items-center justify-between px-2">
          <button
            type="button"
            title="Like post"
            className="flex items-center justify-center space-x-1"
          >
            <BsHeart className="news-feed-card-icon" />
            <span className="text-xs">{likeCount}</span>
          </button>
          <button
            type="button"
            title="Add a comment"
            className="flex items-center justify-center space-x-1"
          >
            <BsChat className="news-feed-card-icon" />
            <span className="text-xs">{commentCount}</span>
          </button>
          <button
            type="button"
            title="Donate to post"
            className="flex items-center justify-center space-x-1"
          >
            <BsHexagon className="news-feed-card-icon" />
            <span className="text-xs">Tip</span>
          </button>

          <button
            type="button"
            title="Bookmark post"
            className="flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="news-feed-card-icon"
            >
              <path d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
            </svg>
          </button>
        </div>
        <div className="">
          {showComments ? (
            <div className="border-t border-gray-600 mt-4">
              <p
                onClick={() => setShowComments(false)}
                className="w-full py-1 bg-transparent border-none rounded text-sm pl-4 text-playRed cursor-pointer"
              >
                Hide Comments
              </p>
              <Comments comments={popularComments} />
              <div className="flex items-center mt-2">
                <div className="w-12 h-12 relative rounded-full">
                  <Image
                    src={"/profile_avatar_full.jpg"}
                    className="rounded-full"
                    layout="fill"
                  />
                </div>
                <form className="bg-gray-100 flex items-center p-1 rounded-2xl flex-1">
                  <textarea
                    type="text"
                    maxlength = "1280"
                    className="bg-gray-100 scrollbar-hide flex-1 border-none focus:ring-0 outline-none text-xs resize-none overflow-auto h-auto min-h-[36px]"
                    placeholder="Add a comment"
                  ></textarea>
                  <div className="flex space-x-1 items-center justify-center ">
                    <HiOutlineEmojiHappy className="commentBtn" />
                    <HiPaperAirplane className="commentBtn rotate-90" />
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <p
              onClick={() => setShowComments(true)}
              className="w-full py-1 bg-transparent border-none rounded text-sm pl-4 text-playRed cursor-pointer"
            >
              View {commentCount} Comments
            </p>
          )}
        </div>
      </div>
      <div />
    </div>
  );
};

export default NewsFeedCard;
