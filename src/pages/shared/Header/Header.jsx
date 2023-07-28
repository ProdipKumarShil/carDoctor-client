
const Header = ({top, center, bottom}) => {
  return (
    <div className="text-center space-y-[20px] my-12">
      <p className="text-xl font-bold text-[#FF3811]">{top}</p>
      <p className="text-[45px] font-bold text-black">{center}</p>
      <p className="w-1/2 mx-auto text-[16px] text-[#737373]">{bottom}</p>
    </div>
  );
};

export default Header;