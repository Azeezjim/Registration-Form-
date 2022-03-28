import SideNavLayout from "../components/SideNavLayout";
import FilterSearch from "../components/FilterSearch";
import Tabs from "../components/Tabs"

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
