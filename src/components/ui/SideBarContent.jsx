import { Link } from "react-router-dom";
import MenuCard from "./MenuCard";
import SearchInput from "./SearchInput";

const SideBarContent = () => {
  return (
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
            <Link to="/ohi">
              <MenuCard
                id={"1"}
                title={"ওহীর সূচনা অধ্যায়"}
                hadisRange="১ - ৭"
              />
            </Link>
            <Link to="/iman">
              <MenuCard id={"2"} title={"ঈমান"} hadisRange="১ - ৭" />
            </Link>
            <Link to="/ilm">
              <MenuCard id={"3"} title={"ইল্‌ম"} hadisRange="৫৯ - ১৩৪" />
            </Link>
            <Link to="/oju">
              <MenuCard id={"4"} title={"ওজু"} hadisRange="১৩৫ - ২৪৭" />
            </Link>
            <Link to="/gosol">
              <MenuCard id={"5"} title={"গোসল"} hadisRange="২৪৮ - ২৯৩" />
            </Link>
            <Link to="/hayej">
              <MenuCard id={"6"} title={"হায়েজ"} hadisRange="২৯৪ - ৩৩৩" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBarContent;
