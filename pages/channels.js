import SideNavLayout from "../components/SideNavLayout";
import ChannelTabs from "../components/ChannelTabs";


const channels = () => {
    return (
        <SideNavLayout>
        <div className="max-w-[950px] px-1 mx-auto">
            <div className="p-5 my-3 lg:my-6  bg-white rounded-xl shadow-lg  outline-none">
                <h1 className="text-3xl font-semibold my-5">Channels</h1>
                <ChannelTabs />
            </div>
          
        </div>
      </SideNavLayout>
    )
}

export default channels
