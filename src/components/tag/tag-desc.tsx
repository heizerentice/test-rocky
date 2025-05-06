import Svg from "../icons/svg";

type Props = {
    desc: string;
    title: string;
  };
  const TagDesc = (props: Props) => {
    return (
      <div
        className="p-[1px]"
        style={{
          background:
            "linear-gradient(96.75deg, #C9C9C9 -2.49%, #000000 51.75%, #C9C9C9 102.95%)",
        }}
      >
        <div
          className="bg-[#2f0700] py-5 px-8 space-y-6 text-white"
          style={{
            paddingLeft: "21px",
            paddingRight: "21px",
          }}
        >
            <div className="flex items-center gap-x-6">
                <Svg src="/icons/arow-down.svg" width={40} height={40}/>
                <p className="font-bold text-2xl">{props.title}</p>
            </div>
            <p className="font-light text-xl" style={{ fontFamily: "Inter" }}>{props.desc}</p>
        </div>
      </div>
    );
  };
  export default TagDesc;
  