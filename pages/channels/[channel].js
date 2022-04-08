import SideNavLayout from "../../components/SideNavLayout";
import Image from "next/image";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Button from "../../components/Button";

const Channel = () => {
  const router = useRouter();
  return (
    <SideNavLayout>
      <div >
      <div className=" w-full mx-auto relative">
          <img
            src="https://playjor.ams3.digitaloceanspaces.com/upload/photos/d-cover.jpg"
            alt=""
            srcSet=""
            className="object-contain   w-full blur-[20px] -mt-36"
          />
          <div className="w-full h-[110%] absolute inset-x-0 top-2 bg-gradient-to-b from-transparent to-[#f9f9f9] z-5"></div>

          <div className=" max-w-[900px] mx-auto absolute inset-0 -bottom-8">
            <div className="w-full  rounded-2xl  relative z-10">
              <img
                src="https://playjor.ams3.digitaloceanspaces.com/upload/photos/d-cover.jpg"
                alt=""
                srcSet=""
                className="object-cover w-full "
              />
              <div />
            </div>
            <div className="flex justify-between p-2 px-4 items-center w-full bg-white rounded-b-lg">
            <div className="row-container space-x-2">
              <div className="relative w-14 h-14 rounded-xl">
                <Image
                  src={"/profile_avatar_full.jpg"}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl"
                />
              </div>
              <div className="flex flex-col justify-center space-y-2">
                <div className="row-container space-x-1">
                  <h2 className="text-3xl font-bold leading-7">thesidegist</h2>
                  {/* <MdVerified className="w-4 h-4 text-lightPlayRed" /> */}
                </div>
                <p className="text-sm font-semibold">2 people like this</p>
              </div>
            </div>
            <Button
              text="subscribe"
              extraClasses="w-28 h-9 bg-gray-200 rounded-md"
            />
          </div>
          </div>
          
          <div
            className="w-8 h-8 rounded-full absolute z-10 top-40 left-10 bg-white cursor-pointer"
            onClick={() => router.back()}
          >
            <BsFillArrowLeftCircleFill className="h-8 w-8  " />
          </div>

        </div> 
        <div className="row-container mb-10 mt-16 ">
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
