import Header from "./Header"
import LeftSideBar from "./LeftSideBar"
import RightSideBar from "./RightSideBar"

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="grid">
         <LeftSideBar/>
         <main className="grid-cols-8">{children}</main>
         <RightSideBar className="grid-cols-1"/>
      </div>
     
      
    </>
  )
}