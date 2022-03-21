import { FaCheckCircle } from "react-icons/fa";
import { BsThreeDots, BsHeart, BsChat, BsHexagon } from "react-icons/bs";
import ReadMoreReact from "read-more-react";
import { useRef, useState } from "react";
import Popover from "@material-tailwind/react/Popover";
import PopoverContainer from "@material-tailwind/react/PopoverContainer";
import PopoverHeader from "@material-tailwind/react/PopoverHeader";
import PopoverBody from "@material-tailwind/react/PopoverBody";

const NewsFeedCard = ({image, user, likeCount,commentCount, description, popularComments, time}) => {
  const optionsButtonRef = useRef();
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);
  return (
    <div>
      <div className="rounded-2xl border shadow-md sm:w-[600px] bg-coolGray-900 text-coolGray-100">
        <div className="flex items-center justify-between px-4 p-3 border-b">
          <div className="flex items-center space-x-2">
            <img
              src={user.image}
              alt=""
              className="object-cover object-center w-10 h-10 rounded-full shadow-sm bg-coolGray-500 border-coolGray-700"
            />
            <div className="flex space-x-1">
              <h2 className="text-sm font-semibold leading-none">
                {user.username}
              </h2>
              <FaCheckCircle className="w-4 h-4 text-playRed" />

              <span className="inline-block text-xs leading-none text-coolGray-400">
                @afamdman
              </span>
            </div>
          </div>
          <div className="flex space-x-1">
            <span className="text-sm text-gray-600 font-light leading-none">
              {time}
            </span>

            <button
              ref={optionsButtonRef}
              title="Open options"
              className="focus:shadow-none focus:outline-none"
            >
              <BsThreeDots className="w-6" />
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
        <div className="p-2 text-lg sm:text-sm ">
          <ReadMoreReact
            min={100}
            max={200}
            readMoreText="Read more..."
            text={
              description
            }
          />
        </div>
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full h-90 bg-coolGray-500"
        />
        <div className="p-3">
          <div className="flex items-center justify-between px-2">
            <button
              type="button"
              title="Like post"
              className="flex items-center justify-center space-x-1"
            >
              <BsHeart className="w-5 h-5 fill-current" />
              <span className="text-xs">{likeCount}</span>
            </button>
            <button
              type="button"
              title="Add a comment"
              className="flex items-center justify-center space-x-1"
            >
              <BsChat className="h-5 w-5 fill-current" />
              <span className="text-xs">{commentCount}</span>
            </button>
            <button
              type="button"
              title="Donate to post"
              className="flex items-center justify-center space-x-1"
            >
              <BsHexagon className="w-5 h-5 fill-current" />
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
                className="w-5 h-5 fill-current"
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
      </div>
    </div>
  );
};

export default NewsFeedCard;
