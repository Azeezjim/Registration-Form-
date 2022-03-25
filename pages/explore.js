import SideNavLayout from "../components/SideNavLayout";
import FilterSearch from "../components/FilterSearch";

const explore = () => {
  return (
    <SideNavLayout>
      <div className="max-w-5xl px-5 mx-auto">
        <FilterSearch />
      </div>
    </SideNavLayout>
  );
};

export default explore;
