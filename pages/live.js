import LiveCard from "../components/LiveCard";
import SideNavLayout from "../components/SideNavLayout";

const live = () => {
  return (
    <SideNavLayout>
      <div className="max-w-4xl mx-auto bg-white p-5">
        <div className="flex overflow-x-scroll space-x-4 py-3 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scroll-smooth scrollbar-track-white ">
          {[...Array(10)].map((_, index) => (
            <LiveCard key={index} />
          ))}
        </div>
        {/* <div class="absolute bg-gray-700 hover:bg-gray-600 transition-colors ease-in-out duration-200 p-2 rounded-full right-0 top-1/2 transform -translate-y-1/2 translate-x-1/2 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 text-gray-200"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </div> */}
      </div>
    </SideNavLayout>
  );
};

export default live;
