/* eslint-disable react/no-unescaped-entities */
import { FaBook } from "react-icons/fa";
import playImg from "../assets/play.png";
import copyImg from "../assets/copy.png";
import detailsImg from "../assets/details.png";
import valpImg from "../assets/valp.png";
import shareImg from "../assets/share.png";
import warningImg from "../assets/warning.png";
import allahLogoImg from "../assets/allah-logo.png";
import { FiLayers } from "react-icons/fi";
// import { FiLayers } from "react-icons/fi";

const Ohi = () => {
  return (
    <div className="w-[833px] m-4">
      {/* top first part */}
      <div className="bg-white mb-4 rounded-md">
        <div className="breadcrumb bg-[#FAFBFB] py-2 px-4 border-b-2 border-gray-300 rounded-md">
          <div className="flex items-center gap-3">
            <div>
              <FiLayers />
            </div>
            <div>
              <p>Bukhari &gt; 1 &gt;</p>
            </div>
          </div>
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
      {/* Third part */}
      <div className="bg-white px-4 py-8 rounded-lg my-4">
        <h2>১/১. অধ্যায়ঃ</h2>
        <h3>
          আল্লাহ্‌র রসূল (সাল্লাল্লাহু 'আলাইহি ওয়া সাল্লাম)- এর প্রতি কীভাবে
          ওয়াহী [১] শুরু হয়েছিল।
        </h3>
        <p>
          এ মর্মে আল্লাহ তা’আলার বাণীঃ “নিশ্চয়ই আমি আপনার প্রতি সেরূপ ওয়াহী
          প্রেরণ করেছি যেরূপ নূহ ও তাঁর পরবর্তী নবীদের প্রতি ওয়াহী প্রেরণ
          করেছিলাম”। (সূরা আন-নিসা ৪/১৬৩)
        </p>
      </div>
      {/* Four Part */}
      <div className="bg-white px-4 py-8 rounded-lg my-4">
        <div className="flex gap-4 items-center">
          <img src={allahLogoImg} alt="" />
          <h2 className="font-bold text-xl"> ১</h2>
        </div>
        <p className="my-4">
          حَدَّثَنَا الْحُمَيْدِيُّ عَبْدُ اللَّهِ بْنُ الزُّبَيْرِ، قَالَ
          حَدَّثَنَا سُفْيَانُ، قَالَ حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ
          الأَنْصَارِيُّ، قَالَ أَخْبَرَنِي مُحَمَّدُ بْنُ إِبْرَاهِيمَ
          التَّيْمِيُّ، أَنَّهُ سَمِعَ عَلْقَمَةَ بْنَ وَقَّاصٍ اللَّيْثِيَّ،
          يَقُولُ سَمِعْتُ عُمَرَ بْنَ الْخَطَّابِ ـ رضى الله عنه ـ عَلَى
          الْمِنْبَرِ قَالَ سَمِعْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم يَقُولُ
          ‏ "‏ إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ امْرِئٍ
          مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا يُصِيبُهَا أَوْ
          إِلَى امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا هَاجَرَ إِلَيْهِ
        </p>
        <div>
          <h3 className="font-bold">
            ‘আলক্বামাহ ইব্‌নু ওয়াক্কাস আল-লায়সী (রহঃ) থেকে বর্ণিত:
          </h3>
          <p className="my-3">
            আমি ‘উমর ইব্‌নুল খাত্তাব (রাঃ)-কে মিম্বারের উপর দাঁড়িয়ে বলতে শুনেছিঃ
            আমি আল্লাহর রসূল (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম)-কে বলতে শুনেছিঃ
            কাজ (এর প্রাপ্য হবে) নিয়ত অনুযায়ী। আর মানুষ তার নিয়ত অনুযায়ী প্রতিফল
            পাবে। তাই যার হিজরত হবে ইহকাল লাভের অথবা কোন মহিলাকে বিবাহ করার
            উদ্দেশ্যে- তবে তার হিজরত সে উদ্দেশ্যেই হবে, যে জন্যে, সে হিজরত
            করেছে। (৫৪, ২৫২৯, ৩৮৯৮, ৫০৭০, ৬৬৮৯, ৬৯৫৩; মুসলিম ২৩/৪৫ হাঃ ১৯০৭,
            আহমাদ ১৬৮) ( আধুনিক প্রকাশনী- ১, ইসলামিক ফাউন্ডেশন ১)
          </p>
        </div>
        <div className="shared-options flex justify-between items-center mt-4">
          <div>
            <img
              src={playImg}
              className="cursor-pointer"
              alt="share icon image"
            />
          </div>
          <div className="flex gap-8">
            <img
              src={copyImg}
              className="cursor-pointer"
              alt="share icon image"
            />
            <img
              src={detailsImg}
              className="cursor-pointer"
              alt="share icon image"
            />
            <img
              src={valpImg}
              className="cursor-pointer"
              alt="share icon image"
            />
            <img
              src={shareImg}
              className="cursor-pointer"
              alt="share icon image"
            />
            <img
              src={warningImg}
              className="cursor-pointer"
              alt="share icon image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ohi;
