"use client";
import Svg from "@/components/icons/svg";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div
        className="w-full h-screen py-8 px-[124px] bg-cover bg-center text-[#D9D9D9]"
        style={{ backgroundImage: "url('/images/rocky.png')" }}
      >
        <div className="space-y-7">
          <p className="font-bold text-[64px]">
            Welcome to Apps Store
          </p>
          <div
            className="rounded-[36px] p-[1px]"
            style={{
              background:
                "linear-gradient(96.75deg, #C9C9C9 -2.49%, #000000 51.75%, #C9C9C9 102.95%)",
            }}
          >
            <div className="bg-[#2f0700] rounded-[36px] p-[32px] space-y-2 relative" >
              <p className="font-bold text-[48px]">Get +20% more!</p>
              <p className="text-xl">Offer extra discount to players on Web Shop purchases.</p>
              <div className="flex items-center gap-x-2">
                {
                  [
                    "Official Store", "Secure Payments"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-x-1">
                      <Svg src="/icons/charm_shield-tick.svg" width={20} height={20}/>
                      <p className="text-xl font-semibold">{item}</p>
                    </div>
                  ))
                }
              </div>
              <button className="bg-[#FF1E02] text-white text-base py-[10px] px-3 w-[269px] rounded-lg uppercase font-semibold">View Offers</button>
            </div>
            {/* <Svg src="/icons/spell.svg" width={250} height={576} className="absolute transform rotate -(-12.97deg) right-24" /> */}
          </div>
        </div>
        <div className="pb-[124px] space-y-9">
          <p className="text-5xl font-bold text-center ">Voucher</p>
        </div>
      </div>
    </div>
  );
}
