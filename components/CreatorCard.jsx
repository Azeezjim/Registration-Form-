import Image from "next/image";
const CreatorCard = ({ username, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border flex flex-col items-center justify-center cursor-pointer">
      <div className="px-1 pt-1 w-24 h-24 relative rounded-lg">
        <Image src={image} layout="fill" alt="username" objectFit="contain" className="rounded-lg"/>
      </div>
      <p>{username}</p>
    </div>
  );
};

export default CreatorCard;
