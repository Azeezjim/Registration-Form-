import SideNavLayout from "../../components/SideNavLayout";
import Image from "next/image";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import { useRouter } from "next/router";
import Button from "../../components/Button";

const Channel = () => {
  const router = useRouter();
  return (
    <SideNavLayout>
      <div className=" max-w-4xl mx-auto">
        <div className="w-full bg-white rounded-2xl -mt-24 relative">
          <img
            src="https://playjor.ams3.digitaloceanspaces.com/upload/photos/d-cover.jpg"
            alt=""
            srcSet=""
            className="object-cover w-full"
          />
          <div />
          <div className="flex justify-between p-2 px-4 items-center w-full">
            <div className="row-container space-x-2">
              <div className="relative w-14 h-14 rounded-2xl">
                <Image
                  src={"/profile_avatar_full.jpg"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <div className="flex flex-col justify-center space-y-2">
                <div className="row-container space-x-1">
                  <h2 className="text-3xl font-bold leading-7">thesidegist</h2>
                  <MdVerified className="w-4 h-4 text-lightPlayRed" />
                </div>
                <p className="text-sm font-semibold">3 people like this</p>
              </div>
            </div>
            <Button
              text="subscribe"
              extraClasses="w-28 h-9 bg-gray-200 rounded-md"
            />
          </div>
          {/* <Image src={"https://picsum.photos/900/300.webp"} layout="fill" objectFit="cover"/> */}
          <div
            className="w-8 h-8 rounded-full absolute z-10 top-28 -left-7 bg-white cursor-pointer"
            onClick={() => router.back()}
          >
            <BsFillArrowLeftCircleFill className="h-8 w-8  " />
          </div>
        </div>
        <div className="row-container my-10 ">
          <div className="bg-white w-[600px] h-52 rounded-lg shadow-md col-container space-y-3">
            <h2 className="text-4xl font-bold">Sorry, Private Page!</h2>
            <p className="font-semibold text-sm text-gray-500 text-center w-[400px]">
              This page is a private page and content is only availaible on
              subscription.
            </p>
            <div className="row-container space-x-1">
              <Button text="Subscribe" extraClasses="w-36 h-9" active={true} />
              {/* <button onClick={() => router.back()}> */}
              <Button
                text="Go Back"
                extraClasses="w-36 h-9 bg-[#FFD0D8] hover:bg-[#FF1534] hover:text-white text-lightPlayRed"
                textClass="group-hover:text-white hover:text-white  font-semibold"
              />
              {/* </button> */}
            </div>
          </div>
        </div>
      </div>
    </SideNavLayout>
  );
};

export default Channel;
