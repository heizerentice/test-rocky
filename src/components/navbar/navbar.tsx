import { useState } from "react";
import Svg from "../icons/svg";

const itemsNavbar = [
  {
    icon: "/icons/direct.svg",
    title: "Direct Top up",
  },
  {
    icon: "/icons/voucher.svg",
    title: "Voucher",
  },
  {
    icon: "/icons/support.svg",
    title: "Support",
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full py-4 px-6 bg-[#0C0A09] flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center gap-4">
        <Svg src="/icons/store_logo_nav1 2.svg" width={120} height={36} />
        <div className="hidden lg:flex items-center gap-4">
          {itemsNavbar.map((item, index) => (
            <div key={index} className="flex items-center gap-2 py-2 px-2">
              <Svg src={item.icon} width={20} height={20} />
              <p className="text-white text-sm font-medium">{item.title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Fortnight: Sabrina"
            className="bg-white text-[#727272] py-2 px-3 rounded-lg w-[240px] text-sm outline-none"
          />
          <Svg
            src="/icons/search.svg"
            width={18}
            height={18}
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
          />
        </div>
        <button className="bg-[#FF1E02] text-white text-sm py-2 px-4 rounded-lg font-semibold">
          Log in
        </button>
        <Svg src="/icons/flag.svg" width={28} height={20} />
      </div>

      <div className="lg:hidden flex items-center gap-3 cursor-pointer">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="cursor-pointer">
          <Svg src="/icons/menu.svg" width={28} height={28} color="white"/>
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-[#1a1a1a] px-6 py-4 flex flex-col gap-4 z-40 lg:hidden">
          {itemsNavbar.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <Svg src={item.icon} width={18} height={18} />
              <p className="text-white text-sm font-medium">{item.title}</p>
            </div>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Fortnight: Sabrina"
                className="bg-white text-[#727272] py-2 px-3 rounded-lg w-full text-sm outline-none"
              />
              <Svg
                src="/icons/search.svg"
                width={18}
                height={18}
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              />
            </div>
            <button className="bg-[#FF1E02] text-white text-sm py-2 px-4 rounded-lg font-semibold">
              Log in
            </button>
            <Svg src="/icons/flag.svg" width={28} height={20} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
