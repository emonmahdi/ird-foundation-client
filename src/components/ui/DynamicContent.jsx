import { FaBook } from "react-icons/fa";

const DynamicContent = () => {
  return (
    <div className="w-[833px] m-4">
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
              <h3 className="font-semibold mb-2 text-[20px]">সহিহ বুখারী</h3>
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
  );
};

export default DynamicContent;
