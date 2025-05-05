"use client";
import Svg from "../icons/svg"

const itemsNavbar = [
    {
        icon: '/icons/direct.svg',
        title: 'Direct Top up'  
    },
    {
        icon: '/icons/voucher.svg',
        title: 'Voucher'  
    },
    {
        icon: '/icons/support.svg',
        title: 'Support'  
    }
]
const Navbar = () => {
    return (
        <div className="w-full py-6 px-8 bg-[#0C0A09] flex justify-between items-center">
            <div className="flex items-center gap-3">
                <Svg src="/icons/store_logo_nav1 2.svg" width={152} height={44}/>
                <div className="flex items-center gap-3">
                    {
                        itemsNavbar.map((item, index) => (
                            <div key={index} className="flex items-center gap-[10px] py-[10px] px-3">
                                <Svg src={item.icon} width={20} height={20}/>
                                <p className="text-white text-base font-semibold">{item.title}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="relative">
                    <input type="text" placeholder="Fortnight: Sabrina" className="bg-white text-[#CDCDCD] py-[10px] px-3 rounded-lg w-[324px] outline-none"/>
                    <Svg src="/icons/search.svg" width={20} height={20} className="absolute right-2 top-1/2 transform -translate-y-1/2"/>
                </div>
                <button className="bg-[#FF1E02] text-white text-base py-[10px] px-3 rounded-lg font-semibold">Log in</button>
                <Svg src="/icons/flag.svg" width={32} height={24}/>
            </div>
        </div>
    )
}

export default Navbar