// import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";
import ProfileNavBar from "./ProfileNavBar";

const SideNavLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 relative">
      {/* <LeftSideBar /> */}
        <ProfileNavBar />
        <main className="lg:col-span-9 mt-[50px] lg:mt-16  ">{children}</main>
        <RightSideBar />
    </div>
  );
};

export default SideNavLayout;
