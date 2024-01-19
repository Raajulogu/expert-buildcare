"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

let data = [
  {
    body: "With Sarwinplast HD MR Gypsum Plaster",
    img: "https://expertbuildcare.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FheroIMG1.f6eba08d.png&w=640&q=75",
  },
  {
    body: " Gypsum Plastering & Waterproofing Excellence",
    img: "https://expertbuildcare.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FheroIMG2.78a86353.png&w=750&q=75",
  },
  {
    body: "The Sarwin Plast Promise",
    img: "https://expertbuildcare.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FheroIMG3.dffa62c0.png&w=640&q=75",
  },
];

export default function Header() {
  let [num, setNum] = useState(0);
  const performTask = () => {
    if(num==2){
        setNum(0)
      }
      else{
        setNum(num+1)
      }
  
};
setTimeout(performTask, 2000);
  return (
    <div className="w-screen h-[1200px] xl:h-[600px] shrink-0 bg-[url('./assert/header-back-image.png')] bg-no-repeat bg-cover">
      <div className="relative shrink-0 w-screen h-[1200px] xl:h-[600px] bg-[url('https://expertbuildcare.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FheroBGfade.ed07b34f.png&w=1920&q=75')] bg-cover bg-no-repeat">
        <div className=" flex flex-col justify-center items-center gap-[25px]">
          <Slide Ind={num} />
          <div className="hidden xl:flex absolute bottom-10 flex w-[799.017px] justify-center items-center gap-[12px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <circle cx="6" cy="5.94153" r="5.5" fill={num==0 ?"#6AAF2E":"#CAEDAC"} />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <circle cx="6" cy="5.94153" r="5.5" fill={num==1 ?"#6AAF2E":"#CAEDAC"} />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <circle cx="6" cy="5.94153" r="5.5" fill={num==2 ?"#6AAF2E":"#CAEDAC"} />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Slide({ Ind }) {
  let [img, setImg] = useState("");
  useEffect(() => {
    setImg(data[Ind].img);
  }, [Ind]);
  return (
    <div className="w-screen flex flex-col xl:flex-row justify-between items-center px-[85px] h-[auto] gap-[40px] xl:gap-[0px]">
      <div className="inline-flex flex-col h-[550px] justify-center items-center gap-24px shrink-0">
        <p className="w-511 font-inter text-[64px] font-bold text-white">
          {Ind == 0 ? (
            <span>
              <span className="">Building a</span>
              <br />
              <span className="text-[#6AAF2E]">Sustainable</span>
              <br />
              <span>Future</span>
            </span>
          ) : Ind == 1 ? (
            <span>
              <span className="">Transforming</span>
              <br />
              <span>
                Spaces <span className="text-[#6AAF2E]">Enhancing</span>
              </span>
              <br />
              <span className="text-[#6AAF2E]">Life</span>
            </span>
          ) : (
            <span>
              <span className="">
                Precision <span className="text-[#6AAF2E]">Plastering</span>
              </span>
              <br />
              <span>Unwavering</span>
              <br />
              <span className="text-[#6AAF2E]">Protection</span>
            </span>
          )}
        </p>
        <p className="text-white font-inter text-32px font-bold">
          {data[Ind].body}
        </p>
        <div className="relative flex items-start gap-[23px] content-start flex-wrap">
          <div className="flex h-[90px]  xl:py-[23px] px-[31px] items-center bg-[#6AAF2E] gap-[45px]">
            <p className="text-white font-inter text-24px font-bold">
              <span>Book A Call</span>
              <br />
              <span>Today</span>
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="51"
              viewBox="0 0 50 51"
              fill="none"
            >
              <path
                d="M25 8.83333L22.0625 11.7708L33.6875 23.4167H8.33334V27.5833H33.6875L22.0625 39.2292L25 42.1667L41.6667 25.5L25 8.83333Z"
                fill="#CAEDAC"
              />
            </svg>
          </div>
          <div className="flex h-[90px] py-[23px] px-[31px] items-center gap-[45px] bg-[#0E1031] hover:bg-[#6AAF2E] duration-[1s] border-t-[5px] border-[#6AAF2E] ">
            <p className="text-white font-inter text-[24px] font-bold">
              <span>Download</span>
              <br />
              <span>Brochure</span>
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="51"
              viewBox="0 0 50 51"
              fill="none"
            >
              <path
                d="M37.5 31.75V38H12.5V31.75H8.33333V38C8.33333 40.2917 10.2083 42.1667 12.5 42.1667H37.5C39.7917 42.1667 41.6667 40.2917 41.6667 38V31.75H37.5ZM35.4167 23.4167L32.4792 20.4792L27.0833 25.8542V8.83333H22.9167V25.8542L17.5208 20.4792L14.5833 23.4167L25 33.8333L35.4167 23.4167Z"
                fill="#CAEDAC"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute xl:right-0 bottom-0  flex w-[567px] justify-center items-center gap-[43px]">
        <img
          src={img}
          alt=""
          height="700"
          width="750"
          class=" shrink-0"
        />
      </div>
    </div>
  );
}

