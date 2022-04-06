import SideNavLayout from "../../components/SideNavLayout";

const Group = () => {
  return (
    <SideNavLayout>
        <div className="w-full mx-auto relative">
        <img
            src="https://playjor.ams3.digitaloceanspaces.com/upload/photos/d-cover.jpg"
            alt=""
            srcSet=""
            className="object-cover  w-full blur-[20px] -mt-40"
          />
          <div class="tag_cover_bg_grad"></div>
            
            <div className=" max-w-[900px] mx-auto absolute inset-x-10 bottom-0">
        <div className="w-full bg-white rounded-2xl  relative">
          <img
            src="https://playjor.ams3.digitaloceanspaces.com/upload/photos/d-cover.jpg"
            alt=""
            srcSet=""
            className="object-cover w-full bg-transparent"
          />
          <div />
         </div>
      </div>
        </div>
      
    </SideNavLayout>
  );
};

export default Group;
