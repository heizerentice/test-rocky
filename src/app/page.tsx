"use client";
import Svg from "@/components/icons/svg";
import Navbar from "@/components/navbar/navbar";
import TagDesc from "@/components/tag/tag-desc";
import TagDirect from "@/components/tag/tag-direct";
import TagVoucher from "@/components/tag/tag-voucher";
import Link from "next/link";

const descItems = [
  {
    title: "How does purchasing on Apps Store benefit your players?",
    desc: "In Apps Store, players can purchase game items at lower prices, find some special offers, and claim free rewards. Moreover, there’s a variety of payment options available, allowing your players to choose the most convenient one for their purchases.",
  },
  {
    title: "Is it safe to purchase on Apps Store?",
    desc: "Web Store which refers to the highest level of compliance with the Payment Card Industry Data Security Standard. Therefore, all payments made on Web Shop are completely secure.",
  },
  {
    title: "What payment methods does Apps Store support?",
    desc: "Web Store which refers to the highest level of compliance with the Payment Card Industry Data Security Standard. Therefore, all payments made on Web Shop are completely secure.",
  },
  {
    title: "Who can help your players with purchase issues?",
    desc: "Who can help your players with purchase issues?",
  },
];

export default function Home() {
  return (
    <div>
      <Navbar />
      <div
        className="w-full h-screen overflow-auto no-scrollbar"
        style={{
          backgroundImage: "url('/images/rocky.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="min-h-screen px-10 md:px-[124px] text-[#D9D9D9] flex flex-col justify-center gap-y-7">
          <p className="font-bold text-[64px]">Welcome to Apps Store</p>
          <div
            className="rounded-[36px] p-[1px] relative"
            style={{
              background:
                "linear-gradient(96.75deg, #C9C9C9 -2.49%, #000000 51.75%, #C9C9C9 102.95%)",
            }}
          >
            <div className="bg-[#2f0700] rounded-[36px] p-[32px] space-y-2">
              <p className="font-bold text-[48px]">Get +20% more!</p>
              <p className="text-xl">
                Offer extra discount to players on Web Shop purchases.
              </p>
              <div className="flex items-center gap-x-2">
                {["Official Store", "Secure Payments"].map((item, index) => (
                  <div key={index} className="flex items-center gap-x-1">
                    <Svg
                      src="/icons/charm_shield-tick.svg"
                      width={20}
                      height={20}
                    />
                    <p className="text-xl font-semibold whitespace-nowrap">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
              <button className="bg-[#FF1E02] text-white text-base py-[10px] px-3 w-[269px] rounded-lg uppercase font-semibold">
                View Offers
              </button>
            </div>
            <Svg
              src="/icons/spell.svg"
              width={250}
              height={576}
              className="hidden lg:block absolute transform rotate -(-12.97deg) right-1/5 -bottom-32"
            />
          </div>
        </div>

        <div className="min-h-screen px-10 md:px-[124px] text-[#D9D9D9] flex flex-col justify-center gap-y-9">
          <p className="text-5xl font-bold text-center">Voucher</p>
          <div
            className="rounded-2xl p-[1px] w-fit mx-auto"
            style={{
              background:
                "linear-gradient(91.32deg, #666666 -1.11%, #000000 49.45%, #666666 99.88%)",
            }}
          >
            <div
              className="rounded-2xl pt-5 pb-4 px-5 space-y-2 w-fit flex items-center gap-x-2"
              style={{
                background:
                  "linear-gradient(90deg, #C71A04 0%, #FF1E02 29.81%, #C71A04 63.46%, #FF1E02 100%)",
              }}
            >
              <p className="bg-[#FFFFFF] text-black font-bold text-xs py-1 rounded-2xl px-4">
                +200%
              </p>
              <p className="text-white font-bold text-base pb-1">
                Triple the value of the first purchase!
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center w-full justify-center lg:gap-x-6 gap-y-4">
            <TagVoucher
              img="/images/mario.jpg"
              title="VNG Games Sales"
              description="Using Apps Store coin to buy VNG with half price"
              price={24}
              after_discount={12.44}
            />
            <TagVoucher
              img="/images/pokemon-violet.jpg"
              title="Pokemon Scarlet/Violet"
              description="Receive Koraidon/Miraidon when buying by Apps Store"
              price={24}
              after_discount={12.44}
            />
            <TagVoucher
              img="/images/sleep-pokemon.jpg"
              title="Sleep Pokemon"
              description="Using Apps Store coin to buy VNG with half price"
              price={24}
              after_discount={12.44}
            />
          </div>
        </div>

        <div className="min-h-screen px-10 md:px-[124px] text-[#D9D9D9] flex flex-col justify-center gap-y-9 py-32 lg:py-0">
          <p className="text-5xl font-bold text-center">Direct Top up</p>
          <div
            className="rounded-2xl p-[1px] w-fit mx-auto"
            style={{
              background:
                "linear-gradient(91.32deg, #666666 -1.11%, #000000 49.45%, #666666 99.88%)",
            }}
          >
            <div
              className="rounded-2xl pt-5 pb-4 px-5 space-y-2 w-fit flex items-center gap-x-2"
              style={{
                background:
                  "linear-gradient(90deg, #C71A04 0%, #FF1E02 29.81%, #C71A04 63.46%, #FF1E02 100%)",
              }}
            >
              <p className="bg-[#FFFFFF] text-black font-bold text-xs py-1 rounded-2xl px-4">
                +200%
              </p>
              <p className="text-white font-bold text-base pb-1">
                Triple the value of the first purchase!
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center w-full justify-center lg:gap-x-6 gap-y-4">
            <TagDirect svg="/icons/svg1.svg" title="Small Pack" />
            <TagDirect svg="/icons/svg2.svg" title="Medium Pack" />
            <TagDirect svg="/icons/svg3.svg" title="Giant Pack" />
            <TagDirect svg="/icons/svg4.svg" title="Enormous Pack" />
          </div>
        </div>

        <div className="min-h-screen px-10 md:px-[124px] flex flex-col justify-center gap-y-3">
          {descItems.map((item, index) => (
            <TagDesc key={index} title={item.title} desc={item.desc} />
          ))}
        </div>

        <div className="min-h-screen px-10 md:px-[124px] text-[#D9D9D9] flex flex-col justify-center">
          <div
            className="rounded-[36px] p-[1px] w-full"
            style={{
              background:
                "linear-gradient(96.75deg, #C9C9C9 -2.49%, #000000 51.75%, #C9C9C9 102.95%)",
            }}
          >
            <div
              className="rounded-[36px] py-8 px-12 space-y-2 text-xl flex items-center justify-between"
              style={{
                background: "linear-gradient(90deg, #422B98 0%, #6E48FE 100%)",
              }}
            >
              <div className="space-y-[26px] flex flex-col">
                <p className="text-xl font-bold leading-10 text-white">
                  Redeem code
                </p>
                <div className="text-[40px] font-bold leading-14 text-[#D9D9D9]">
                  <p>Grant discounts and in-game</p>
                  <p>bonuses to your players</p>
                </div>
                <input
                  type="text"
                  placeholder="Enter promo code"
                  className="md:w-[324px] w-full border border-[#CDCDCD] bg-[#F6F6F69E] py-[10px] px-3 text-base font-semibold text-[#727272] outline-none"
                />
                <button className="md:w-[324px] w-full bg-[#FF1E02] text-white text-base py-[10px] px-3 font-semibold">
                  Redeem Code
                </button>
              </div>
              <Svg
                src="/icons/gift.svg"
                width={447}
                height={308}
                className="hidden md:block"
              />
            </div>
          </div>
        </div>

        <div className="px-10 md:px-[124px] pt-8 pb-20 bg-black w-full">
          <div className="text-white flex lg:flex-row flex-col gap-y-4 mb-2 md:mb-0 ">
            <div className="flex justify-between flex-1">
              <div className="flex flex-col gap-y-2 text-xl leading-6 w-1/2">
                <p className="uppercase text-2xl font-bold leading-8">Order</p>
                <p>Return & Refund Policy</p>
                <p>Cancellation/ Order Change</p>
                <p>DMCA</p>
              </div>
              <div className="flex flex-col gap-y-2 text-xl leading-6 w-1/2">
                <p className="uppercase text-2xl font-bold leading-8">
                  Resource
                </p>
                <p>Privacy Policy</p>
                <p>Payment Methods</p>
                <p>Terms of Services</p>
                <p>About Us</p>
                <p>FAQs</p>
              </div>
            </div>
            <div className="flex justify-between flex-1">
              <div className="flex flex-col gap-y-2 text-xl leading-6 w-1/2">
                <p className="uppercase text-2xl font-bold leading-8">
                  Customers
                </p>
                <p>Case Studies</p>
                <p>Store Examples</p>
              </div>
              <div className="flex flex-col gap-y-6 text-base leading-6 w-1/2">
                <button className="uppercase py-[10px] px-3 bg-[#FF1E02] w-fit font-semibold">
                  Contact Us
                </button>
                <div className="flex flex-col gap-y-2">
                  <p>X</p>
                  <p>Facebook</p>
                  <p>Linkedln</p>
                  <p>YouTube</p>
                  <p>Pinterest</p>
                  <p>Instagram</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-row flex-col gap-y-2 items-center justify-between">
            <Svg src="/icons/store_logo_nav1 2.svg" width={268} height={78} />
            <p className="flex gap-x-2 text-[#616161] text-base align-bottom whitespace-nowrap">
              © 2025 HABBY PTE. LTD. All Rights Reserved.
              <span>|</span>
              <Link href="/" className="underline"> Privacy Policy</Link>
              <span>|</span>
              <Link href="/" className="underline">Cookies Setting</Link>
            </p>
            <p className="text-white text-base">
              <span>|</span>
              <Link href="/" className="underline">
                Vôi Bọt nè
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
