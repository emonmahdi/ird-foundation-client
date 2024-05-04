import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// import DynamicContent from "../components/ui/DynamicContent";
import SideBarContent from "../components/ui/SideBarContent";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="flex ">
        <div>
          <Sidebar />
        </div>
        <div className="flex justify-between bg-[#F2F4F6] h-auto ml-24 rounded-md">
          {/* Sidebar Menu Content */}
          <SideBarContent />
          <Outlet />
          {/* Dynamic Content */}
          {/* <DynamicContent /> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
