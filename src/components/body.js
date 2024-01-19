import data from "./data";

export default function Body() {
  return (
    <div className="w-screen h-[1800px] text-[black] flex-[1 0 0] px-[25px] xl:px-[75px] py-[25px] overflow-hidden">
      <div className=" flex flex-col items-start gap-[42px] self-stretch">
        <div>
          <p className="w-[71px] h-[15px] bg-[#6AAF2E]"></p>
          <h1 className=" font-inter text-[45px] font-bold">OUR SERVICES</h1>
        </div>
        <p className="flex flex-col self-stretch font-inter text-[16px] font-normal">
          <span>
            In addition to our remarkable collection, Sarwinplast is proud to
            offer expert build care services, specializing in{" "}
            <span className="font-bold">
              gypsum plaster and waterproofing solutions.
            </span>
          </span>
          <br />
          <span>
            Our team of skilled professionals ensures that your projects are
            built to withstand the test of time, with utmost attention to detail
            and quality.
          </span>
        </p>
        <div className="flex w-[1708px] h-[auto] items-start gap-[13px] self-stretch overflow-x-auto">
          {data.map((val, ind) => (
            <Services key={ind} data={val} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Services({ data }) {
  return (
    <div className="flex w-[350px] p-[12px] flex-col items-center justify-around gap-[8px] shrink-0 self-stretch radius-[8px] bg-[#FFF]">
      <img src={data.img} alt="" className="h-[250px] self-stretch" />

      <h6 className="font-inter text-[24px] font-bold flex-[1 0 0]">
        {data.title}
      </h6>

      <p className="flex-[1 0 0] self-stretch font-inter  text-[16px]">
        {data.body}
      </p>

      <div className="cursor-pointer flex h-[55px] px-[31px] py-[23px] items-center gap-[45px] border-[1px] border-[#6AAF2E] bg-[white]">
        <div className="font-inter font-bold text-[24px] text-[#6AAF2E]">
          Know more
        </div>
      </div>
    </div>
  );
}
