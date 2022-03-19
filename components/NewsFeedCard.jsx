import { FaCheckCircle } from "react-icons/fa";
import { BsThreeDots, BsHeart, BsChat, BsHexagon } from "react-icons/bs";

const NewsFeedCard = () => {
  return (
    <div>
      <div className="rounded-2xl border shadow-md sm:w-[500px] bg-coolGray-900 text-coolGray-100">
        <div className="flex items-center justify-between p-3 border-b">
          <div className="flex items-center space-x-2">
            <img
              src="https://stackdiary.com/140x100.png"
              alt=""
              className="object-cover object-center w-8 h-8 rounded-full shadow-sm bg-coolGray-500 border-coolGray-700"
            />
            <div className="flex space-x-1">
              <h2 className="text-sm font-semibold leading-none">
                Afam Nwaoboli
              </h2>
              <FaCheckCircle className="w-4 h-4 text-playRed" />

              <span className="inline-block text-xs leading-none text-coolGray-400">
                @afamdman
              </span>
            </div>
          </div>
          <div className="flex space-x-1">
            <span className="text-sm text-gray-600 font-light leading-none">
              Nov 23
            </span>
            <button title="Open options" type="button">
              <BsThreeDots />
            </button>
          </div>
        </div>
        <div className="p-2 text-xs ">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga
            reiciendis, ut id saepe at, dolores, hic quaerat doloribus
            voluptatem officiis quo et! Repellendus vitae et, ipsum aliquam cum
            magnam cupiditate totam sed qui alias? Provident repellendus sequi
            molestiae facere, alias deleniti nisi. Blanditiis numquam nemo ex,
            corporis dolorem corrupti voluptatibus.
          </p>
        </div>
        <img
          src="https://stackdiary.com/140x100.png"
          alt=""
          className="object-cover object-center w-full h-72 bg-coolGray-500"
        />
        <div className="p-3">
          <div className="flex items-center justify-between px-2">
            <button
              type="button"
              title="Like post"
              className="flex items-center justify-center space-x-1"
            >
              <BsHeart className="w-5 h-5 fill-current" />
              <span className="text-xs">2,128</span>
            </button>
            <button
              type="button"
              title="Add a comment"
              className="flex items-center justify-center space-x-1"
            >
              <BsChat className="h-5 w-5 fill-current" />
              <span className="text-xs">396</span>
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
          <div className="space-y-3">
      
            <p
              className="w-full py-1 bg-transparent border-none rounded text-sm pl-4 text-playRed">View 396 Comments</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsFeedCard;
