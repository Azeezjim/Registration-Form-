import Header from "./Header"
import LeftSideBar from "./LeftSideBar"
import RightSideBar from "./RightSideBar"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="flex">
         <LeftSideBar/>
         <main className="basis-9/12 mt-16">{children}</main>
         <RightSideBar />
      </div>
     
      
    </>
  )
}