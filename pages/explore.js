import SideNavLayout from "../components/SideNavLayout";
import FilterSearch from "../components/FilterSearch";

const explore = () => {
  return (
    <SideNavLayout>
      <div className="max-w-4xl mx-auto">
        <FilterSearch />
      </div>
    </SideNavLayout>
  );
};

export default explore;
