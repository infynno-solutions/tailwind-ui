import React, { useState } from "react";
import WhiteIcon from "./assets/white.svg";
import whiteRight from "./assets/right-white.svg";
import blackRight from "./assets/right-black.svg";
import leftIcon from "./assets/left.svg";
import leftWhite from "./assets/left-white.svg";
import rightIcon from "./assets/right.svg";
import rightWhiteIcon from "./assets/right-white-icon.svg";
import blackIcon from "./assets/black-middle.svg";
import banner from "./assets/banner.jpg";
export default function Pricing() {
  const [icon, setIcon] = useState("2");
  const staticValue = [
    " Edit up to 1,000 hours of podcast audio files.",
    "Set your own landing page",
    "24/7 support",
    "Advanced analytics",
  ];

  return (
    <>
      <div className="relative bg-white">
        <img
          src={banner}
          alt="not found"
          className="h-screen w-full opacity-50 hidden lg:inline-block"
        />

        <container className="flex flex-col top-0 w-full absolute lg:flex-row justify-center items-center lg:h-screen gap-6 lg:px-5 xl:px-0 py-8 lg:py-0">
          <div
            className="w-[360px] md:w-[384px] h-[572px] p-6 bg-white  group rounded-[20px] lg:hover:-translate-y-6 ease-in duration-300 hover:bg-[#0B0641] hover:text-white border xl:border-none border-[#0B0641]"
            onMouseOver={() => setIcon("1")}
            onMouseOut={() => setIcon("")}
          >
            <div className="flex flex-row gap-5 items-center">
              <img src={icon === "1" ? leftWhite : leftIcon} alt="not found" />
              <span className="text-3xl font-bold">Guardian</span>
            </div>
            <span className="flex mt-4 text-[#A9A9AA] text-[22px]">
              What You&apos;ll Get
            </span>
            {staticValue.map((data) => (
              <div className="flex flex-row gap-[10px] items-start mt-6 text-left text-lg">
                <div className="pt-1 shrink-0">
                  <img
                    src={icon === "1" ? whiteRight : blackRight}
                    alt="not found"
                    className="w-5 h-5 "
                  />
                </div>
                <span className="">{data}</span>
              </div>
            ))}
            <div className="border border-dashed border-[#A9A9AA] tracking-widest my-[18px]" />
            <div className="relative  h-[150px]">
              <div className="bottom-0  left-0 w-full absolute">
                <div className="flex justify-start items-baseline">
                  <span className="text-[32px] font-bold ">Free Forever</span>
                  {/* <span className="">/month</span> */}
                </div>
                <button className="w-full px-4 py-3 bg-[#FFF5FA] text-[#FF1D89] group-hover:text-white group-hover:bg-[#FF1D89] rounded-xl mt-6 font-semibold text-[22px]">
                  Choose
                </button>
              </div>
            </div>
          </div>
          {/* middle portion with hover effect */}
          <div
            className={`
              " w-[360px] md:w-[384px] h-[572px] p-6 bg-white group rounded-[20px] ease-in duration-300 border-[#0B0641] border xl:border-none "
              ${icon === "2" && "text-white bg-[#0B0641] lg:-translate-y-6 "}
          `}
            onMouseOver={() => setIcon("2")}
            onMouseOut={() => setIcon("")}
          >
            <div className="flex flex-row gap-5 items-center">
              <img src={icon === "2" ? WhiteIcon : blackIcon} alt="not found" />
              <span className="text-3xl font-bold">Mage</span>
            </div>
            <span className="flex mt-4 text-[#A9A9AA] text-[22px]">
              What You&apos;ll Get
            </span>
            {staticValue.map((data) => (
              <div className="flex flex-row gap-[10px] items-start  mt-6 text-left text-lg">
                <div className="pt-1 shrink-0">
                  <img
                    src={icon === "2" ? whiteRight : blackRight}
                    alt="not found"
                    className="w-5 h-5 "
                  />
                </div>
                <span className="">{data}</span>
              </div>
            ))}
            <div className="border border-dashed border-[#A9A9AA] tracking-widest my-[18px]" />
            <div className="relative  h-[150px]">
              <div className="bottom-0  left-0 w-full absolute">
                <div className="flex justify-start items-baseline">
                  <span className="text-[32px] font-bold ">$450</span>
                  <span className="">/month</span>
                </div>
                <button
                  className={`"px-4 py-3 rounded-xl mt-6 " ${
                    icon === "2"
                      ? "text-[#ffffff] bg-[#FF1D89]"
                      : "bg-[#FFF5FA] text-[#FF1D89]"
                  } w-full font-semibold text-[22px]`}
                >
                  Choose
                </button>
              </div>
            </div>
          </div>
          {/* right side portion */}
          <div
            className="w-[360px] md:w-[384px] h-[572px] p-6 bg-white  group rounded-[20px] lg:hover:-translate-y-6 ease-in duration-300 hover:bg-[#0B0641] hover:text-white border xl:border-none border-[#0B0641]"
            onMouseOver={() => setIcon("3")}
            onMouseOut={() => setIcon("")}
          >
            <div className="flex flex-row gap-5 items-center">
              <img
                src={icon === "3" ? rightWhiteIcon : rightIcon}
                alt="not found"
              />
              <span className="text-3xl font-bold">Phantom</span>
            </div>
            <span className="flex mt-4 text-[#A9A9AA] text-[22px]">
              What You&apos;ll Get
            </span>
            {staticValue.map((data) => (
              <div className="flex flex-row gap-[10px] items-start  mt-6 text-left text-lg">
                <div className="pt-1 shrink-0">
                  <img
                    src={icon === "3" ? whiteRight : blackRight}
                    alt="not found"
                    className="w-5 h-5 "
                  />
                </div>
                <span className="">{data}</span>
              </div>
            ))}
            <div className="border border-dashed border-[#A9A9AA] tracking-widest my-[18px]" />
            <div className="relative  h-[150px]">
              <div className="bottom-0  left-0 w-full absolute">
                <div className="flex justify-start items-baseline">
                  <span className="text-[32px] font-bold ">$600</span>
                  <span className="">/month</span>
                </div>
                <button className="w-full px-4 py-3 bg-[#FFF5FA] text-[#FF1D89] group-hover:text-white group-hover:bg-[#FF1D89] rounded-xl mt-6 font-semibold text-[22px]">
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
