import Header from "./Header"
import LeftSideBar from "./LeftSideBar"
import RightSideBar from "./RightSideBar"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="flex flex-row">
         <LeftSideBar/>
         <main className="basis-9/12 col-span-8">{children}</main>
         <RightSideBar />
      </div>
     
      
    </>
  )
}