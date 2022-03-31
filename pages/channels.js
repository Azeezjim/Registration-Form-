import SideNavLayout from "../components/SideNavLayout";
import ChannelTabs from "../components/ChannelTabs";
import ChannelCard from "../components/ChannelCard";

const channels = () => {
  return (
    <SideNavLayout>
      <div className="max-w-[950px] px-1 mx-auto">
        <div className="p-5 my-3 lg:my-6  bg-white rounded-xl shadow-lg  outline-none">
          <h1 className="text-3xl font-semibold my-5">Channels</h1>
          <ChannelTabs />
        </div>
        <div className="p-5 my-3 lg:my-6  bg-white rounded-xl shadow-lg  outline-none">
          <div className="grid cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4">
            {[...Array(10)].map((_, index) => (
              <ChannelCard key={index} main={true}/>
            ))}
          </div>
        </div>
      </div>
    </SideNavLayout>
  );
};

export default channels;
