type Props = {
  img: string;
  title: string;
  description: string;
  price: number;
  after_discount: number;
};
const TagVoucher = (props: Props) => {
  return (
    <div
      className="rounded-2xl p-[1px] w-full lg:w-1/3"
      style={{
        background:
          "linear-gradient(155.5deg, #C9C9C9 -0.69%, #000000 47.92%, #C9C9C9 100.69%)",
      }}
    >
      <div
        className="rounded-2xl bg-[#2f0700] py-4 space-y-2 text-xl"
        style={{
          paddingLeft: "21px",
          paddingRight: "21px",
        }}
      >
        <img src={props.img} className="object-cover w-full h-[228px]" alt={props.title}/>
        <p className="font-bold leading-10">{props.title}</p>
        <p className="font-light" style={{ fontFamily: "Inter" }}>{props.description}</p>
        <div
          className="border p-[1px]"
          style={{
            borderImageSource:
              "linear-gradient(93.37deg, #666666 0%, rgba(46, 46, 46, 0.868462) 23.99%, rgba(0, 0, 0, 0.76) 53.82%, rgba(46, 46, 46, 0.868462) 88.44%, #666666 99.68%)",
              borderImageSlice: 1,
          }}
        >
          <button className="bg-[#FF1E02] w-full text-white text-base font-semibold py-[10px] px-3 flex items-center justify-center gap-x-2">
            <span className="text-[#D2CACA] line-through tracking-[-0.2px]">{`$${props.price}`}</span>
            <span>{`$${props.after_discount}`}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default TagVoucher;
