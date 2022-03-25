import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

const SideNavLayout = ({ children }) => {
    return (
        <div className="flex relative">
            <LeftSideBar />
            <main className="basis-9/12 mt-[70px] ">{children}</main>
            <RightSideBar/>
        </div>
    )
}

export default SideNavLayout
