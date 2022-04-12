import MobileNavCard from "./MobileNavCard";
import { MdClose, MdHome, MdBookmarkAdd, MdGroups } from "react-icons/md";
import { IoIosAlbums } from "react-icons/io";
import { CgNotes } from "react-icons/cg";
import { setMainMobileNavState } from "../../store/slices/NavSlice";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

const MainMobileNav = () => {
  const isOpen = useSelector((state) => state.navbar.mainMobileNav);
  const dispatch = useDispatch();
  const router = useRouter();
  const toggleMobileNav = () => {
    dispatch(setMainMobileNavState(!isOpen));
  };

  if (isOpen) {
    return (
      <aside className="inset-0 w-full fixed h-screen  z-40 md:hidden ">
        <div className="h-full p-5  bg-white ">
          <button
            onClick={() => toggleMobileNav()}
            className="p-1 mb-5 bg-white rounded-full shadow-md border mr-2"
          >
            <MdClose className="text-black h-6 w-6 cursor-pointer" />
          </button>
          
          <div className="grid grid-cols-1 gap-y-3 overflow-y-scroll h-[calc(100vh - 80px)]">
            <div>
              <h1 className="text-lg font-semibold uppercase mb-2">ME</h1>
              <div className="grid grid-cols-2 gap-2">
                <MobileNavCard text="News Feed">
                  <MdHome className="w-6 h-6" />
                </MobileNavCard>
                <MobileNavCard text="Albums">
                  <IoIosAlbums className="w-6 h-6" />
                </MobileNavCard>
                <MobileNavCard text="Saved Posts">
                  <MdBookmarkAdd className="w-6 h-6" />
                </MobileNavCard>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-semibold uppercase mb-2">BLOG</h1>
              <div className="grid grid-cols-2 gap-2">
                <MobileNavCard text="Browse articles">
                  <CgNotes className="w-6 h-6" />
                </MobileNavCard>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-semibold uppercase mb-2">GROUPS</h1>
              <div className="grid grid-cols-2 gap-2">
                <MobileNavCard text="My Groups">
                  <MdGroups className="w-6 h-6" />
                </MobileNavCard>
                <MobileNavCard text="Joined Groups">
                  <MdGroups className="w-6 h-6" />
                </MobileNavCard>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-semibold uppercase mb-2">CHANNELS</h1>
              <div className="grid grid-cols-2 gap-2">
                <MobileNavCard text="My Channel">
                  <MdGroups className="w-6 h-6" />
                </MobileNavCard>
                <MobileNavCard text="Liked Channels">
                  <MdGroups className="w-6 h-6" />
                </MobileNavCard>
              </div>
            </div>
            <div>
              <h1 className="text-lg font-semibold uppercase mb-2">MORE</h1>
              <div className="grid grid-cols-2 gap-2">
                <MobileNavCard text="Explore">
                  <MdGroups className="w-6 h-6" />
                </MobileNavCard>
                <MobileNavCard text="Popular Posts">
                  <MdGroups className="w-6 h-6" />
                </MobileNavCard>
                <MobileNavCard text="Movies">
                  <MdGroups className="w-6 h-6" />
                </MobileNavCard>
                <MobileNavCard text="Memories">
                  <MdGroups className="w-6 h-6" />
                </MobileNavCard>
                <MobileNavCard text="Find friends">
                  <MdGroups className="w-6 h-6" />
                </MobileNavCard>
                <MobileNavCard text="Common Things">
                  <MdGroups className="w-6 h-6" />
                </MobileNavCard>
                <MobileNavCard text="Fundings">
                  <MdGroups className="w-6 h-6" />
                </MobileNavCard>
              </div>
            </div>
          </div>
        </div>
      </aside>
    );
  }

  return null;
};

export default MainMobileNav;
