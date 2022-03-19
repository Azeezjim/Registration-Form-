import Image from "next/image";
const CreatorCard = ({ username, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border flex flex-col items-center justify-center">
      <div className="px-1 pt-1 rounded-lg">
        <Image src={image} width={96} height={96} alt="username" className="rounded-lg"/>
      </div>
      <p>{username}</p>
    </div>
  );
};

export default CreatorCard;
