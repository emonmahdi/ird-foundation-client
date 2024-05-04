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
  );
};

export default SideBarContent;
