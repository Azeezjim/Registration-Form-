import Header from "./Header";
import {getSession} from "next-auth/react"
import { wrapper } from "../store";


function Layout({children}) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}



export default Layout

