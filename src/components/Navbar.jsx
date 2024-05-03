import { FiLayers } from "react-icons/fi";
import { IoMdSettings } from "react-icons/io";
import SearchInput from "./ui/SearchInput";
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="py-4 px-8 sm:px-20 shadow-lg flex justify-between items-center">
      <div className="flex items-center gap-4 w-[50%]">
        <div>
          <h2 className="border-2 border-[#2B9E76] p-3 rounded-lg text-[#2B9E76] cursor-pointer">
            {" "}
            <FiLayers />
          </h2>
        </div>
        <div>
          <h2 className="font-bold text-xl mb-1 hidden lg:block">
            <a href="">হাদিস সমূহ</a>
          </h2>
          <h2 className="font-bold text-xl mb-1 block lg:hidden">
            <a href="">আল হাদিস</a>
          </h2>
          <p className="text-[13px] hidden lg:block">
            হাদিস পড়ুন শিখুন এবং জানুন
          </p>
        </div>
      </div>
      <div className="w-[50%] text-end">
        <div className="flex items-center justify-end">
          <span className="hidden lg:block">
            <SearchInput />
          </span>
          <span className="bg-[#7e8180] p-3 rounded-lg text-white ml-8 block lg:hidden cursor-pointer">
            <IoSearchOutline />
          </span>
          <span className="bg-[#34AB82] p-3 rounded-lg text-white ml-8 cursor-pointer">
            <IoMdSettings />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
