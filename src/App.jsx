import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import MenuCard from "./components/ui/MenuCard";
import SearchInput from "./components/ui/SearchInput";
import { FaBook } from "react-icons/fa6";

function App() {
  return (
    <>
      {/* <h2 className="font-bold text-purple-500 bg-green-400 p-4">
        IRD Foundation
      </h2> */}
      <Navbar />
      <div className="flex ">
        <div>
          <Sidebar />
        </div>
        <div className="flex justify-between bg-[#F2F4F6] h-screen ml-24 rounded-md">
          <div className="w-[340px] bg-white m-4 rounded-lg overflow-scroll">
            <div>
              {/* top menu item dynamic */}
              <div className="flex items-center w-full pb-3">
                <button className="px-12 py-4  w-[170px] rounded-md">বই</button>
                <button className="bg-[#2B9E76] px-12 py-4 w-[170px] rounded-md text-white">
                  অধ্যায়
                </button>
              </div>
              <hr />
              <div className="p-3">
                {/* Search Item */}
                <SearchInput />
                <div>
                  <MenuCard
                    id={"1"}
                    title={"ওহীর সূচনা অধ্যায়"}
                    hadisRange="১ - ৭"
                  />
                  <MenuCard id={"2"} title={"ঈমান"} hadisRange="১ - ৭" />
                  <MenuCard
                    id={"3"}
                    title={"ওহীর সূচনা অধ্যায়"}
                    hadisRange="৮ - ৫৮"
                  />
                  <MenuCard id={"4"} title={"ইল্‌ম"} hadisRange="৫৯ - ১৩৪" />
                  <MenuCard id={"5"} title={"ওজু"} hadisRange="১৩৫ - ২৪৭" />
                  <MenuCard id={"6"} title={"গোসল"} hadisRange="২৪৮ - ২৯৩" />
                  <MenuCard id={"7"} title={"হায়েজ"} hadisRange="২৯৪ - ৩৩৩" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-[830px] m-4">
            {/* top first part */}
            <div className="bg-white mb-4 rounded-md">
              <div className="breadcrumb bg-[#FAFBFB] py-2 px-4 border-b-2 border-gray-300 rounded-md">
                <p> Bukhari 1</p>
              </div>
              {/* main category title */}
              <div className="flex justify-between items-center p-8">
                <div className="flex items-center gap-4">
                  <div>
                    <span>
                      <FaBook className="text-[30px]" />
                    </span>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2 text-[20px]">
                      সহিহ বুখারী
                    </h3>
                    <p className="text-[13px]">সর্বমোট হাদিস - ৭৫৬৩</p>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-3xl">صحيح البخاري</h3>
                </div>
              </div>
            </div>
            {/* Second Part */}
            <div className="flex items-center gap-4 bg-white px-4 py-8 rounded-lg">
              <h2 className="bg-[#2B9E76] text-white p-3 rounded-lg">1</h2>
              <h2 className="font-semibold"> ওহীর সূচনা অধ্যায়</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
