import { getProviders, signIn } from "next-auth/react";
import { useRef } from "react";
import Image from "next/image";
import {
  FaUserCircle,
  FaQuestionCircle,
  FaFacebookF,
  FaTwitter,
  FaCompass
} from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { IoIosLock } from "react-icons/io";
import {IoNewspaperSharp} from "react-icons/io5"

const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const userLogin = async () => {
    var email = emailRef.current.value;
    var password = passwordRef.current.value;
    const res = await signIn("credentials", {
      callbackUrl: "/",
      email: email,
      password: password,
    });
  };
  return (
    <div className="pt-[75px]">
      <div className="bg-cover w-full  rounded-3xl h-[500px] bg-[url('/banner-mobile.jpg')] bg-playRed/40 bg-blend-darken relative">
        <div className="flex-col flex items-center space-y-4 justify-between text-white text-center pt-5 px-3 ">
          <div className="w-40 h-10 relative">
            <Image src={"/logo-mobile.png"} layout="fill" objectFit="contain" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">Create Original Content</h1>
            <p className="text-lg font-semibold">
              for your passionate fans and get paid for it
            </p>
          </div>
          <div className="w-60 h-10 rounded-3xl flex items-center justify-center bg-lightPlayRed cursor-pointer">
            <span className="font-semibold">Register</span>
          </div>
          <h1 className="text-4xl font-semibold">JOIN CREATE EARN</h1>
          <p className="text-xs">
            Playjor is an exclusive content and communication tool for all
            influncers like youtubers, fitness trainers, models, content
            creators, public figures and social media influencers, who can
            connect and share their content
          </p>
          <div className="flex flex-col space-y-2 items items-center justify-center">
            <div className="inputBox text-gray-900">
              <FaUserCircle className="w-8 h-8 text-lightPlayRed" />
              <input
                placeholder="Email"
                className="flex-1 bg-white border-none focus:ring-0 outline-none text-xs"
                type="email"
                name="email"
                id="email"
                ref={emailRef}
              />
            </div>
            <div className="inputBox text-gray-900 relative">
              <IoIosLock className="w-8 h-8 text-lightPlayRed" />
              <input
                placeholder="Password"
                className="flex-1 rounded-full bg-white border-none focus:ring-0 outline-none text-xs"
                type="password"
                name="Password"
                id="Password"
                ref={passwordRef}
              />
              <FaQuestionCircle className="w-5 h-5 absolute right-3 text-lightPlayRed" />
            </div>
          </div>
        </div>
        <div className="pl-2 py-1 pr-0.5 bg-white rounded-full absolute -bottom-6 sm:-bottom-4 -left-4">
          <div className="relative w-14 h-14 xs:w-[70px] xs:h-[70px]  ">
            <Image
              src={"/playjor-icon.png"}
              layout="fill"
              objectFit="contain"
              className="p-1 rounded-full "
            />
          </div>
        </div>
      </div>
      <div className="flex-col flex items-center mt-1">
        <div className="bg-lightPlayRed inputBox ">
          <p className="text-white text-lg font-semibold" onClick={userLogin}>
            Login
          </p>
        </div>
        <div className="flex flex-col space-y-3 items-center my-6 justify-around">
          <p className="text-playRed text-sm text-center  font-semibold shadow-sm">
            Or login with
          </p>
          <div className="flex items-center justify-around space-x-4">
            <div className="social-login-buttons">
              <FaFacebookF className="w-8 h-8 text-blue-700" />
            </div>
            <div className="social-login-buttons">
              <FaTwitter className="w-8 h-8 text-[#1DA1F2] " />
            </div>
            <div className="social-login-buttons">
              <FcGoogle className="w-8 h-8" />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-xs sm:max-w-sm mx-auto flex flex-col space-y-6">
        <div className="login-card bg-blend-normal">
          <h2 className="text-textPlayRed text-center font-bold text-2xl">
            Create a free profile on Playjor! create your content, invite your
            fans to subscribe and earn money from your content!
          </h2>
          <p className="text-sm text-gray-800 text-center mt-4">
            Simply create a profile post exclusive images, video and tutorials
            and invite your social media fans to subscribe to view.
            <p>
              You set the monthly membership &#40; subs &#41; rate, so
              you&apos;re always in control of how much your fans pay. and how
              much you earn.
            </p>
          </p>
        </div>
        <div className="login-card ">
          <div className="relative w-40 h-40 ">
            <Image
              src={"/playjor-icon.png"}
              layout="fill"
              objectFit="contain"
              className="p-1 rounded-full "
            />
          </div>
          <h1 className="text-6xl leading-none tracking-wide text-center text-playRed font-bold">
            Playjor
          </h1>
        </div>
        <div className="login-card">
          <h1 className="font-semibold text-3xl text-lightPlayRed uppercase ">
            create
          </h1>
          <div className="relative w-32 h-28 my-5">
            <Image src={"/icon-6.png"} layout="fill" objectFit="contain" />
          </div>
          <div className="text-center flex flex-col items-center justify-center space-y-4">
            <p className="text-xl font-semibold text-slate-700 leading-tight">
              Create exclusive, unique, original, picture, audio, video content
              your fans {"can't"} find anywhere else but here.
            </p>
            <div className="w-40 h-10 rounded-3xl flex items-center justify-center bg-lightPlayRed cursor-pointer">
              <span className="font-bold text-white">Create account</span>
            </div>
          </div>
        </div>
        <div className="login-card">
          <h1 className="font-semibold text-3xl text-lightPlayRed uppercase ">
            channels
          </h1>
          <div className="relative w-44 h-36 my-5">
            <Image
              src={"/banner-thumb-1.png"}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="text-center flex flex-col items-center justify-center space-y-4">
            <p className="text-xl font-semibold text-slate-700 leading-tight">
              Share your content in your private channel. Where your fans pay
              your own chosen subscription fee, weekly, monthly or one time
              payment.
            </p>
            <div className="w-40 h-10 rounded-3xl flex items-center justify-center bg-lightPlayRed cursor-pointer">
              <span className="font-bold text-white">Create account</span>
            </div>
          </div>
        </div>
        <div className="login-card">
          <h1 className="font-semibold text-3xl text-lightPlayRed uppercase ">
            create
          </h1>
          <div className="relative w-44 h-36  my-5">
            <Image
              src={"/case-study-4.png"}
              layout="fill"
              objectFit="contain"
            />
          </div>
          <div className="text-center flex flex-col items-center justify-center space-y-4">
            <p className="text-xl font-semibold text-slate-700 leading-tight">
              Create a fan group where your fans can share their own content
              with other fans, earn from the m,onthly fees fans pay to join your
              exclusive group.
            </p>
            <div className="w-40 h-10 rounded-3xl flex items-center justify-center bg-lightPlayRed cursor-pointer">
              <span className="font-bold text-white">Create account</span>
            </div>
          </div>
        </div>
      </div>
      <div className="slant-header">
      </div>
      <section class="bg-lightPlayRed  slanted-div ">
        <div className="flex flex-col space-y-8">
            <h1 className="font-semibold text-4xl text-white  ">Discover Playjor.com</h1>
            <div className="row-container space-x-10">
             <div className="col-container space-y-2">
             <div className="row-container p-4 bg-white rounded-full">
                  <FaCompass className="h-10 w-10 text-lightPlayRed"/>
              </div>
              <p className="text-center text-white text-2xl font-bold">
                Explore
                </p>
             </div>
             <div className="col-container space-y-2">
              <div className="row-container p-4 bg-white rounded-full">
                    <IoNewspaperSharp className="h-10 w-10 text-lightPlayRed"/>
                </div>
                <p className="text-center text-white text-2xl font-bold">
                Blog
                </p>
             </div>
            </div>
        </div>
      </section>

      <div className="text-playRed slant-footer">&copy;2019</div>
    </div>
  );
};

// export async function getServerSideProps(context) {
//   const providers = await getProviders();
//   return {
//     props: { providers },
//   };
// }

export default Login;
