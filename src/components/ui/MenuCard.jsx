/* eslint-disable react/prop-types */

const MenuCard = ({ id, title, hadisRange }) => {
  return (
    <div className=" p-4 hover:bg-[#EBFCF6] rounded-lg flex items-center gap-8 my-3 cursor-pointer">
      <div className="bg-[#2B9E76] text-white p-3 rounded-lg">
        <span className="">{id}</span>
      </div>
      <div>
        <h2 className="text-[15px]">{title}</h2>
        <p className="text-[12px] mt-2">হাদিসের রেঞ্জ: {hadisRange}</p>
      </div>
    </div>
  );
};

export default MenuCard;
