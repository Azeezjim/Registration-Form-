import LiveCard from "../components/LiveCard";
import SideNavLayout from "../components/SideNavLayout";
import Button from "../components/Button";
import Table from "react-tailwind-table";
import { useMemo } from "react";

const getData = () => [
  {
    name: "Jane Cooper",
    email: "jane.cooper@example.com",
    title: "Regional Paradigm Technician",
    department: "Optimization",
    status: "Active",
    role: "Admin",
    imgUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cody Fisher",
    email: "cody.fisher@example.com",
    title: "Product Directives Officer",
    department: "Intranet",
    status: "Active",
    role: "Owner",
    imgUrl:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Esther Howard",
    email: "esther.howard@example.com",
    title: "Forward Response Developer",
    department: "Directives",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Jenny Wilson",
    email: "jenny.wilson@example.com",
    title: "Central Security Manager",
    department: "Program",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1498551172505-8ee7ad69f235?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Kristin Watson",
    email: "kristin.watson@example.com",
    title: "Lean Implementation Liaison",
    department: "Mobility",
    status: "Active",
    role: "Admin",
    imgUrl:
      "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
  {
    name: "Cameron Williamson",
    email: "cameron.williamson@example.com",
    title: "Internal Applications Engineer",
    department: "Security",
    status: "Active",
    role: "Member",
    imgUrl:
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  },
];

const live = () => {
  // const columns = useMemo(
  //   () => [
  //     {
  //       Header: "Name",
  //       accessor: "name",
  //     },
  //     {
  //       Header: "Title",
  //       accessor: "title",
  //     },
  //     {
  //       Header: "Status",
  //       accessor: "status",
  //     },
  //     {
  //       Header: "Role",
  //       accessor: "role",
  //     },
  //   ],
  //   []
  // );

  // const data = useMemo(() => getData(), []);
  return (
    <SideNavLayout>
      <div className="max-w-4xl mx-auto my-8 bg-white p-5">
        <div className="flex overflow-x-scroll space-x-4 py-1 scrollbar-thin scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400 scroll-smooth scrollbar-track-white ">
          {[...Array(10)].map((_, index) => (
            <LiveCard key={index} />
          ))}
        </div>
        <div className="bg-white p-5">
          <div className="row-container w-full space-x-2">
            <Button
              text="Go Live"
              active={true}
              textClass="text-xl font-semibold"
              extraClasses="w-40 h-12"
            />
            <Button
              text="Live History"
              extraClasses="w-40 h-12 !bg-[#FFC7C6]"
              textClass="text-textPlayRed text-xl font-semibold"
            />
          </div>
          {/* <div>
            <Table columns={columns} data={data} />
          </div> */}
        </div>
      </div>
    </SideNavLayout>
  );
};

export default live;
