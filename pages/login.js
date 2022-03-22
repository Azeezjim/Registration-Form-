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
      <>
        <div className="pt-16">

    <div className="bg-cover w-full  rounded-2xl h-[500px] bg-[url('/banner-mobile.jpg')]" >
        <div className="flex-col flex items-center justify-center text-white text-center">
            <div className="w-40 h-20 relative">
              <Image src={'/logo-mobile.png'} layout="fill" objectFit="contain" />
            </div>
            <h1 className="text-3xl font-bold">
              Create Original Content
            </h1>
            <p className="text-lg font-semibold">
              for your passionate fans and get paid for it
            </p>
            <div className="w-40 h-10 rounded-3xl flex iems-center justify-center bg-text-playRed">
              <span>Register</span>
            </div>
            <h1 className="text-4xl font-semibold">
              JOIN CREATE EARN
            </h1>
        </div>
    </div>

      <p>login</p>
      <input type="text" ref={emailRef} />
      <input type="password" ref={passwordRef} name="password" id="password" />
      <button onClick={userLogin}>Sign in</button>
    </div>
      </>
  
  );
};

// export async function getServerSideProps(context) {
//   const providers = await getProviders();
//   return {
//     props: { providers },
//   };
// }

export default login;
