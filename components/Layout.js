import Header from "./Header"
import LeftSideBar from "./LeftSideBar"
import RightSideBar from "./RightSideBar"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="flex">
         <LeftSideBar/>
         <main >{children}</main>
         <RightSideBar />
      </div>
     
      
    </>
  )
}