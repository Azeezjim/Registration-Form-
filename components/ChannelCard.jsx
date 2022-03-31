import Image from "next/image";
import Button from "./Button";

const ChannelCard = () => {
    return (
       <div className="w-52 h-80 bg-white rounded-xl">
           <div className="relative w-full h-[90px] rounded-t-lg mb-16">
          <Image
            src={"https://stackdiary.com/140x100.png"}
            objectFit="cover"
            layout="fill"
            className="rounded-t-lg"
          />
          <div className="absolute -bottom-[65%] left-1/3">
            <div className="w-16 h-16 md:w-20 md:h-20 relative">
              <Image
                src="/profile_avatar_full.jpg"
                alt="side-img"
                layout="fill"
                objectFit="cover"
                className="relative rounded-full"
              />
            </div>
          </div>
        </div>
       </div>
    )
}

export default ChannelCard
