import { getProviders, signIn } from "next-auth/react";
import { useRef } from "react";
import Image from "next/image";
import { FaUserCircle, FaQuestionCircle } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";

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
      <div className="bg-cover w-full  rounded-3xl h-[500px] bg-[url('/banner-mobile.jpg')] bg-playRed/40 bg-blend-darken">
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
          <div className="w-60 h-10 rounded-3xl flex items-center justify-center bg-playRed cursor-pointer">
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
              <FaUserCircle className="w-8 h-8 text-playRed" />
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
              <IoIosLock className="w-8 h-8 text-playRed" />
              <input
                placeholder="Password"
                className="flex-1 bg-white border-none focus:ring-0 outline-none text-xs"
                type="password"
                name="Password"
                id="Password"
                ref={passwordRef}
              />
              <FaQuestionCircle className="w-5 h-5 absolute right-3 text-playRed"/>
            </div>
          </div>
        </div>
        <div className="pl-2 py-1 pr- bg-white rounded-full absolute -left-4">
          <div className="relative w-16 h-16 ">
          <Image src={'/playjor-icon.png'} layout="fill" objectFit="contain" className="p-1 rounded-full "/>
          </div>
        </div>
      </div>

      

      
      <button onClick={userLogin}>Login</button>
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
