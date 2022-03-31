import SideNavLayout from "../../components/SideNavLayout";
import Image from "next/image";

const Channel = () => {
  return (
    <SideNavLayout>
      <div className="max-w-4xl mx-auto relative">
        <div className="w-full col-container rounded-2xl absolute -top-20">
          <div className="w-full h-[340px] relative">
            <img
              src="https://playjor.ams3.digitaloceanspaces.com/upload/photos/d-cover.jpg"
              alt=""
              srcset=""
              className="object-cover"
            />
            {/* <Image src={"https://picsum.photos/900/300.webp"} layout="fill" objectFit="cover"/> */}
          </div>
        </div>
      </div>
    </SideNavLayout>
  );
};

export default Channel;
