import SideNavLayout from "../components/SideNavLayout";
import ChatUi from "../components/ChatUi";

const messages = () => {
  return (
    <SideNavLayout>
      <div className="grid grid-cols-3">
        <div className="w-full bg-black">ore</div>

        <ChatUi className="cols-span-2 w-full" />
      </div>
    </SideNavLayout>
  );
};

export default messages;
