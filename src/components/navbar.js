"use client";
import { useState } from "react";

export default function Navbar({open,setOpen}) {
 
  return (
    <div>
      {open && (
        <div className="w-[100vw] h-[100vh] bg-[#0E1031] flex flex-col items-center pt-[24px]">
          <div className="flex flex-row justify-around w-[100vw] sm:w-[70vw] items-center">
            <img
              src="https://expertbuildcare.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.9d4d352e.png&w=96&q=75"
              alt="expert buildcare"
              className="w-[68px] h-[69.676px] shrink-0 rounded-[64px]"
            />
            <p>
              <span>Expert</span>
              <br />
              <span>BuildCare</span>
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              onClick={()=>setOpen(!open)}
            >
              <path
                d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                fill="#FCFFF9"
              />
            </svg>
          </div>
         <div className="w-[70vw] flex items-start mt-[44px]">
         <div className="inline-flex flex-col items-start gap-[17px] text-[white]">
            <p className="font-inter text-[24px] font-bold">Home</p>
            <p className="font-inter text-[24px] font-bold">About US</p>
            <p className="font-inter text-[24px] font-bold">Our Services</p>
            <p className="font-inter text-[24px] font-bold">Our Products</p>
            <p className="font-inter text-[24px] font-bold">Gallery</p>
            <p className="font-inter text-[24px] font-bold">Contact us</p>
          </div>
         </div>
         <div className="inline-flex py-[23px] px-[31px] items-center gap-[45px] bg-[#6AAF2E] mt-[44px]">
            <p className="font-inter text-[white] text-[24px] font-bold">Book a Call Today</p>
         </div>
        </div>
      )}
      <nav class="relative w-screen h-[104px] shrink-0 flex">
        <div className=" absolute justify-between w-[150vw] md:w-[70vw] h-[104px] shrink-0 fill-[#6AAF2E] bg-[url('https://expertbuildcare.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FheaderBG.0f597304.png&w=640&q=75')] bg-no-repeat bg-cover">
          <div className="flex align-center gap-[21px] absolute left-[35.277px] top-[15px]">
            <div className="w-[68px] h-[69.676px] bg-[url('./assert/logo.png')]"></div>
            <p className="font-inter text-[24px] font-bold text-[#000]">
              <span>Expert</span>
              <br /> <span>BuildCare</span>
            </p>
          </div>
        </div>
        <div
          className="flex flex-col xl:hidden absolute right-10 bottom-10 cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="6"
            viewBox="0 0 41 6"
            fill="none"
            className="m-[2px]"
          >
            <path
              d="M3 3H38"
              stroke="#0E1031"
              stroke-width="5"
              stroke-linecap="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="6"
            viewBox="0 0 41 6"
            fill="none"
            className="m-[2px]"
          >
            <path
              d="M3 3H38"
              stroke="#0E1031"
              stroke-width="5"
              stroke-linecap="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="41"
            height="6"
            viewBox="0 0 41 6"
            fill="none"
            className="m-[2px]"
          >
            <path
              d="M3 3H38"
              stroke="#0E1031"
              stroke-width="5"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <div className="hidden md:flex justify-center items-center absolute right-0 w-[70vw] h-[104px] fill-[#0E1031] bg-[url('https://expertbuildcare.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnav.6a96b04a.png&w=1080&q=75')] bg-no-repeat bg-cover">
          <div className="flex items-center justify-center gap-[0px] xl:gap-[45px] absolute right-[8px] xl:right-[35px] top-[19px]">
            <ul className="flex w-[360px] xl:w-[453px] 2xl:w-[653] items-center gap-[8px] xl:gap-[23px] 2xl:gap-[23px] text-white font-bold text-[16px] 2xl:text-[20px] xl:text-[16px]">
              <li>Home</li>
              <li>About US</li>
              <li>Services</li>
              <li>Products</li>
              <li>Gallery</li>
            </ul>
            <div className="flex items-center justify-center h-[61px] px-[11px] py-[3px] xl:px-[31px] xl:py-[23px]  xl:gap-[45px] bg-[#6AAF2E]">
              <p className="text-white font-inter text-[12px]  2xl:text-[24px] xl:text-[18px] font-bold">
                Contact US
              </p>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
