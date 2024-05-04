/* eslint-disable react/no-unescaped-entities */
import { FiLayers } from "react-icons/fi";
import { FaBook } from "react-icons/fa";
import playImg from "../assets/play.png";
import copyImg from "../assets/copy.png";
import detailsImg from "../assets/details.png";
import valpImg from "../assets/valp.png";
import shareImg from "../assets/share.png";
import warningImg from "../assets/warning.png";
import allahLogoImg from "../assets/allah-logo.png";

const Gosol = () => {
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
              <p>Bukhari &gt; 5 &gt;</p>
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
        <h2 className="bg-[#2B9E76] text-white p-3 rounded-lg">৫</h2>
        <h2 className="font-semibold"> গোসল</h2>
      </div>
      {/* Third part */}
      <div className="bg-white px-4 py-8 rounded-lg my-4">
        <h2>৫/১. অধ্যায়ঃ</h2>
        <h3 className="mb-4">গোসলের পূর্বে উযূ করা।</h3>
        <hr />
      </div>
      {/* Four Part */}
      <div className="bg-white px-4 py-8 rounded-lg my-4">
        <div className="flex gap-4 items-center">
          <img src={allahLogoImg} alt="" />
          <h2 className="font-bold text-xl"> ২৪৮</h2>
        </div>
        <p className="my-4">
          حَدَّثَنَا عَبْدُ اللَّهِ بْنُ يُوسُفَ، قَالَ أَخْبَرَنَا مَالِكٌ،
          عَنْ هِشَامٍ، عَنْ أَبِيهِ، عَنْ عَائِشَةَ، زَوْجِ النَّبِيِّ صلى الله
          عليه وسلم أَنَّ النَّبِيَّ صلى الله عليه وسلم كَانَ إِذَا اغْتَسَلَ
          مِنَ الْجَنَابَةِ بَدَأَ فَغَسَلَ يَدَيْهِ، ثُمَّ يَتَوَضَّأُ كَمَا
          يَتَوَضَّأُ لِلصَّلاَةِ، ثُمَّ يُدْخِلُ أَصَابِعَهُ فِي الْمَاءِ،
          فَيُخَلِّلُ بِهَا أُصُولَ شَعَرِهِ ثُمَّ يَصُبُّ عَلَى رَأْسِهِ
          ثَلاَثَ غُرَفٍ بِيَدَيْهِ، ثُمَّ يُفِيضُ الْمَاءَ عَلَى جِلْدِهِ
          كُلِّهِ‏.‏
        </p>
        <div>
          <h3 className="font-bold">‘আয়িশা (রাঃ) থেকে বর্ণিত:</h3>
          <p className="my-3">
            নবী (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম) যখন জানাবাতের গোসল করতেন, তখন
            প্রথমে তাঁর হাত দু'টো ধুয়ে নিতেন। অতঃপর সালাতের উযূর মত উযূ করতেন।
            অতঃপর তাঁর আঙ্গুলগুলো পানিতে ডুবিয়ে নিয়ে চুলের গোড়া খিলাল করতেন।
            অতঃপর তাঁর উভয় হাতের তিন আঁজলা পানি মাথায় ঢালতেন। তারপর তাঁর সারা
            দেহের উপর পানি ঢেলে দিতেন। (২৬২, ২৭২; মুসলিম ৩/৯, হাঃ ৩১৬, আহমাদ
            ২৫৭০৪) (আধুনিক প্রকাশনীঃ ২৪১, ইসলামী ফাউন্ডেশনঃ ২৪৬)
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

export default Gosol;
