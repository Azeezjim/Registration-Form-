import SideNavLayout from "../components/SideNavLayout";
import FilterSearch from "../components/explore/FilterSearch";
import Tabs from "../components/explore/Tabs"

const explore = () => {
  return (
    <SideNavLayout>
      <div className="max-w-5xl px-1 mx-auto">
        <FilterSearch />
        <Tabs/>
      </div>
    </SideNavLayout>
  );
};

export default explore;
