import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

const SideNavLayout = ({ children }) => {
    return (
        <div className="flex ">
            <LeftSideBar />
            <main className="basis-9/12 mt-16 ">{children}</main>
            <RightSideBar/>
        </div>
    )
}

export default SideNavLayout
