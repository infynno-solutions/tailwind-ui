import React from "react";
import offerSvg from "./assets/offer.svg";
import rightIcon from "./assets/right-icon.svg";
import wrongIcon from "./assets/wrong-icon.svg";
const Pricing = () => {
  let trueData = [
    "20,000+ of PNG & SVG graphics",
    "Access to 100 million stock images",
    "Upload custom icons and fonts",
    "Unlimited Sharing",
    "Unlimited Projects",
  ];
  let falseData = [
    "Instant Access to our design system",
    "Create teams to collaborate on designs",
  ];
  return (
    <container className="flex flex-col justify-center items-center  py-[72px]">
      {/* heading section  */}
      <div className="flex flex-col w-auto px-6">
        <span className="font-medium text-[30px] md:text-[40px]">
          Powerful features for
        </span>
        <span className="font-medium text-transparent text-[34px] md:text-[40px] bg-clip-text bg-gradient-to-r from-[#1D4ED8] to-[#55CBFB] ">
          powerful creators.
        </span>
        <span className="text-xl mt-4">Chose a plan that's right for you</span>
        <div className="text-base mt-8 md:mt-16 gap-4 flex items-center justify-center pl-5">
          <span>Pay monthly </span>
          <div className="items-center flex">
            <label
              for="small-toggle"
              class="inline-flex relative cursor-pointer  "
            >
              <input
                type="checkbox"
                value=""
                id="small-toggle"
                class="sr-only peer"
              />
              <div class="w-9  h-5 flex-1 align-middle bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
          </div>
          <span>Pay yearly</span>
        </div>
      </div>
      <div className="w-[350px] md:w-[590px] flex justify-end pt-2 md:pt-0">
        <img
          src={offerSvg}
          alt="not found"
          className="w-14 md:w-20 h-20 mt-[-30px]"
        />
        <span className="text-sm md:text-lg text-[#1D4ED8] font-medium pr-2 pt-2">
          Save 25%
        </span>
      </div>
      {/* pricing section  */}
      <div className="flex flex-col lg:flex-row gap-6 h-full">
        {/* w-[1184px] */}
        <div className="h-full  w-[378px] lg:w-auto xl:w-[378px] ">
          <div className="flex flex-col h-full  rounded-xl py-6 px-10 border border-gray-500 lg:border-none">
            <div className="flex flex-col text-left">
              <div className="flex flex-col gap-3">
                <span className="text-[22px]">Freebie</span>
                <span>
                  Ideal for individuals who need quick access to basic features.
                </span>
              </div>
              <div className="flex items-center gap-3 my-4">
                <span className="text-[56px] font-semibold">$0</span>
                <span className="font-thin">/ Month</span>
              </div>
              <button className="w-full text-[#1D4ED8] border-[#1D4ED8] border-[1px]  rounded py-2.5">
                Get Started Now
              </button>
              <div className="mt-10 space-y-3">
                {trueData.map((data) => (
                  <div className="flex items-center gap-4 ">
                    <img
                      src={rightIcon}
                      alt="Icon Not Found"
                      className="w-8 h-8"
                    />
                    <span className="font-medium text-base">{data}</span>
                  </div>
                ))}
                {falseData.map((data) => (
                  <div className="flex items-center gap-4 ">
                    <img
                      src={wrongIcon}
                      alt="Icon Not Found"
                      className="w-8 h-8"
                    />
                    <span className="font-medium text-base">{data}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-full  w-[378px] lg:w-auto xl:w-[378px] bg-[#1D4ED8] rounded-xl text-white py-6 px-10">
          <div className="flex flex-col text-left">
            <div className="flex flex-col gap-3">
              <span className="text-[22px]">Professional</span>
              <span>
                Ideal for individuals who need quick access to basic features.
              </span>
            </div>
            <div className="flex items-center gap-3 my-4">
              <span className="text-[56px] font-semibold">$25</span>
              <span className="font-thin">/ Month</span>
            </div>
            <button className="w-full  bg-white text-[#1D4ED8] rounded py-2.5">
              Get Started Now
            </button>
            <div className="mt-10 space-y-3">
              {trueData.map((data) => (
                <div className="flex items-center gap-4 ">
                  <img
                    src={rightIcon}
                    alt="Icon Not Found"
                    className="w-8 h-8"
                  />
                  <span className="font-medium text-base">{data}</span>
                </div>
              ))}
              {falseData.map((data) => (
                <div className="flex items-center gap-4 ">
                  <img
                    src={wrongIcon}
                    alt="Icon Not Found"
                    className="w-8 h-8"
                  />
                  <span className="font-medium text-base">{data}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-full w-[378px] lg:w-auto xl:w-[378px]">
          <div className="flex flex-col h-full rounded-xl py-6 px-10 border border-gray-500 lg:border-none">
            <div className="flex flex-col text-left">
              <div className="flex flex-col gap-3">
                <span className="text-[22px]">Enterprise</span>
                <span>
                  Ideal for individuals who need quick access to basic features.
                </span>
              </div>
              <div className="flex items-center gap-3 my-4">
                <span className="text-[56px] font-semibold">$100</span>
                <span className="font-thin">/ Month</span>
              </div>
              <button className="w-full text-[#1D4ED8] border-[#1D4ED8] border-[1px]  rounded py-2.5">
                Get Started Now
              </button>
              <div className="mt-10 space-y-3">
                {trueData.map((data) => (
                  <div className="flex items-center gap-4 ">
                    <img
                      src={rightIcon}
                      alt="Icon Not Found"
                      className="w-8 h-8"
                    />
                    <span className="font-medium text-base">{data}</span>
                  </div>
                ))}
                {falseData.map((data) => (
                  <div className="flex items-center gap-4 ">
                    <img
                      src={wrongIcon}
                      alt="Icon Not Found"
                      className="w-8 h-8"
                    />
                    <span className="font-medium text-base">{data}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </container>
  );
};

export default Pricing;
