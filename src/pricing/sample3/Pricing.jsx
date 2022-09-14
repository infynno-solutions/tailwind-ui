import React from "react";
import banner from "./assets/banner2.jpg";
import leftIcon from "./assets/left.svg";
import blackRight from "./assets/right-black.svg";
import whiteArrow from "./assets/white-arrow.svg";
import bannerGirl from "./assets/bannergirl.svg";

export default function Pricing() {
  const staticValue = [
    " Edit up to 1,000 hours of podcast audio files.",
    "Set your own landing page",
    "24/7 support",
    "Advanced analytics",
  ];
  return (
    <>
      <div className=" relative bg-white">
        <img
          src={banner}
          alt="not found"
          className="w-full h-screen object-cover hidden lg:inline-block opacity-50"
        />
        <container className="absolute top-0 flex-col lg:flex-row flex justify-center items-center w-full lg:h-screen gap-6 lg:px-5 xl:px-0 py-8 lg:py-0">
          {/* first portion */}
          <div className="flex flex-col flex-wrap w-[360px] md:w-[384px] h-[572px] p-6 bg-[#2E6434]  group rounded-[20px] relative overflow-hidden ">
            <div className="text-start text-white">
              <span className="font-light text-[32px]">Save More</span>
              <br />
              <span className="font-bold text-[32px]">With Goodplans</span>
              <br />
              <span className="text-[19px] ">
                Choose a plan and get onboard in minutes. Then get $100 credits
                for your next payment.
              </span>
              <img src={whiteArrow} alt="not found" className="mt-[20px]" />
            </div>
            <div className="absolute bottom-0 ">
              <img src={bannerGirl} alt="not found" />
            </div>
          </div>
          {/* middle portion  */}
          <div className="flex flex-col flex-wrap w-[360px] md:w-[384px] h-[572px] p-6 bg-white  group rounded-[20px] border xl:border-none border-[#0B0641]">
            <div className="flex flex-row gap-5 items-center">
              <img src={leftIcon} alt="not found" />
              <span className="text-3xl font-bold">Day Pass</span>
            </div>
            <span className="flex mt-4 text-[#A9A9AA] text-[22px]">
              What You&apos;ll Get
            </span>
            {staticValue.map((data) => (
              <div className="flex flex-row gap-[10px] items-start  mt-6 text-left text-lg">
                <div className="pt-1 shrink-0">
                  <img src={blackRight} alt="not found" className="w-5 h-5 " />
                </div>
                <span className="">{data}</span>
              </div>
            ))}
            <div className="border border-dashed border-[#A9A9AA] tracking-widest my-[18px]" />
            <div className="flex flex-col justify-between grow">
              <div className="flex items-baseline">
                <span className="text-[32px] font-bold ">$20</span>
                <span className="">/day</span>
              </div>
              <div className="flex align-bottom">
                <button className="w-full rounded-xl font-semibold text-[22px] px-4 py-3 bg-[#2E6434] text-white">
                  Choose
                </button>
              </div>
            </div>
          </div>
          {/* last portion */}
          <div className="flex flex-col flex-wrap w-[360px] md:w-[384px] h-[572px] p-6 bg-white  group rounded-[20px] border xl:border-none border-[#0B0641]">
            <div className="flex flex-row gap-5 items-center">
              <img src={leftIcon} alt="not found" />
              <span className="text-3xl font-bold">Day Pass</span>
            </div>
            <span className="flex mt-4 text-[#A9A9AA] text-[22px]">
              What You&apos;ll Get
            </span>
            {staticValue.map((data) => (
              <div className="flex flex-row gap-[10px] items-start  mt-6 text-left text-lg">
                <div className="pt-1 shrink-0">
                  <img src={blackRight} alt="not found" className="w-5 h-5 " />
                </div>
                <span className="">{data}</span>
              </div>
            ))}
            <div className="border border-dashed border-[#A9A9AA] tracking-widest my-[18px]" />
            <div className="flex flex-col justify-between grow">
              <div className="flex items-baseline">
                <span className="text-[32px] font-bold ">$20</span>
                <span className="">/day</span>
              </div>
              <div className="flex align-bottom">
                <button className="w-full rounded-xl font-semibold text-[22px] px-4 py-3 bg-[#2E6434] text-white">
                  Choose
                </button>
              </div>
            </div>
          </div>
        </container>
      </div>
    </>
  );
}
