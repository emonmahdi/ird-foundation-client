import { GoHome } from "react-icons/go";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdBook } from "react-icons/io";
import { MdGridView } from "react-icons/md";
import { IoPaperPlaneOutline } from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="bg-white">
      <div className="w-[100px] fixed h-screen shadow">
        <ul className="mx-6 text-center">
          <li className="mt-[40px] p-3 cursor-pointer text-center text-xl hover:bg-gray-300 hover:rounded-lg hover:text-green-500 hover:font-bold">
            <GoHome />
          </li>
          <li className="mt-[40px] p-3 cursor-pointer text-center text-xl hover:bg-gray-300 hover:rounded-lg hover:text-green-500">
            <IoMdBook />
          </li>
          <li className="mt-[40px] p-3 cursor-pointer text-center text-xl hover:bg-gray-300 hover:rounded-lg hover:text-green-500">
            <FaRegBookmark />
          </li>
          <li className="mt-[40px] p-3 cursor-pointer text-center text-xl hover:bg-gray-300 hover:rounded-lg hover:text-green-500">
            <MdGridView />
          </li>
          <li className="mt-[40px] p-3 cursor-pointer text-center text-xl hover:bg-gray-300 hover:rounded-lg hover:text-green-500">
            <IoPaperPlaneOutline />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
