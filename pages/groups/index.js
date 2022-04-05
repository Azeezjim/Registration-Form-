import SideNavLayout from "../../components/SideNavLayout";
import GroupTabs from "../../components/GroupTabs";


const Groups = () => {
    return (
        <SideNavLayout>
            <div className="max-w-5xl mx-auto xl:max-w-7xl">
                <GroupTabs /> 
            </div>
           
        </SideNavLayout>
    )
}

export default Groups
