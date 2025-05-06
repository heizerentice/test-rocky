import Svg from "../icons/svg";

type Props = {
    svg: string;
    title: string;
  };
  const TagDirect = (props: Props) => {
    return (
      <div
        className="rounded-2xl p-[1px] w-full lg:w-1/4"
        style={{
          background:
            "linear-gradient(155.5deg, #C9C9C9 -0.69%, #000000 47.92%, #C9C9C9 100.69%)",
        }}
      >
        <div
          className="rounded-2xl bg-[#2f0700] pb-4 space-y-2 text-xl"
          style={{
            paddingLeft: "21px",
            paddingRight: "21px",
          }}
        >
            <Svg src={props.svg} width={228} height={228} className="mx-auto"/>
            <p className="text-center font-bold text-xl leading-10">{props.title}</p>
            <div className="bg-[#3d1a1a] p-3 flex items-center justify-between text-base font-semibold">
                <div className="flex items-center" style={{ columnGap: "10px" }}>
                    <Svg src="/icons/svg5.svg" width={20} height={20}/>
                    <span>Gem</span>
                </div>
                <p>20</p>
            </div>
            <div className="flex gap-x-2 items-center">
                <p className="w-7/8 py-[10px] text-center bg-[#FF1E02] font-semibold text-base text-white">$9.99</p>
                <div className="w-1/8 bg-[#FF1E02] py-3 flex items-center justify-center">
                    <Svg src="/icons/global.svg" width={20} height={20}/>
                </div>
            </div>
        </div>
      </div>
    );
  };
  export default TagDirect;
  