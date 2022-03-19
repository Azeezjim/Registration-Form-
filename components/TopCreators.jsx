import CreatorCard from "./CreatorCard.jsx";
import { RiVipCrownFill } from "react-icons/ri";

const TopCreators = ({creators}) => {
    return (
        <div className="side-container">
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
    )
}

export default TopCreators
