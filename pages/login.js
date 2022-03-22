import { getProviders, signIn } from "next-auth/react";
import { useRef } from "react";
import Image from "next/image"

const login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");

  const userLogin = async () => {
    var email = emailRef.current.value;
    var password = passwordRef.current.value;
    const res = await signIn("credentials", {
      callbackUrl: "/",
      email: email,
      password: password
    });
  
  };
  return (
    
        <div className="pt-[75px]">

    <div className="bg-cover w-full  rounded-3xl h-[500px] bg-[url('/banner-mobile.jpg')] bg-playRed/40 bg-blend-darken" >
        <div className="flex-col flex items-center space-y-4 justify-between text-white text-center p-5 ">
            <div className="w-40 h-10 relative">
              <Image src={'/logo-mobile.png'} layout="fill" objectFit="contain" />
            </div>
           <div>
           <h1 className="text-3xl font-bold">
              Create Original Content
            </h1>
            <p className="text-lg font-semibold">
              for your passionate fans and get paid for it
            </p>
           </div>
            <div className="w-60 h-10 rounded-3xl flex items-center justify-center bg-playRed cursor-pointer">
              <span className="font-semibold">Register</span>
            </div>
            <h1 className="text-4xl font-semibold">
              JOIN CREATE EARN
            </h1>
            <p className="text-xs">
              Playjor is an exclusive content and communication tool for all influncers like youtubers, fitness trainers, models, content creators, public figures and social media influencers, who can connect and share their content
            </p>
        </div>
    </div>

      <p>login</p>
      <input type="text" ref={emailRef} />
      <input type="password" ref={passwordRef} name="password" id="password" />
      <button onClick={userLogin}>Sign in</button>
    </div>
     
  
  );
};

// export async function getServerSideProps(context) {
//   const providers = await getProviders();
//   return {
//     props: { providers },
//   };
// }

export default login;
