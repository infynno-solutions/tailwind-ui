import React from "react";
import rightTick from "./assets/right-black.svg";

export default function Pricing() {
  const pricingData = [
    {
      mainTitle: "Basic plan",
      subTitle: "Our most popular plan for small teams.",
      price: 10,
      ispopular: false,
      getInPlan: [
        "Access to basic features",
        "Attend events",
        "Basic reporting + analytics",
        "Automatic updates",
        "Up to 10 individual users",
        "Backup your account",
        "20GB individual data",
        "Audit log and notes",
        "Basic chat support",
        "Feature requests",
      ],
    },
    {
      mainTitle: "Bussiness plan",
      subTitle: "Advanced features and reporting.",
      price: 20,
      ispopular: true,
      getInPlan: [
        "Access to basic features",
        "Attend events",
        "Basic reporting + analytics",
        "Automatic updates",
        "Up to 10 individual users",
        "Backup your account",
        "20GB individual data",
        "Audit log and notes",
        "Basic chat support",
        "Feature requests",
      ],
    },
  ];

  return (
    <>
      {/* main div */}
      <div>
        {/* header part  */}
        <div className="py-8 lg:py-24 flex flex-col mx-4 px-4 lg:mx-0">
          <span className="text-[#7F56D9] text-base">Pricing</span>
          <span className="font-semibold text-4xl sm:text-5xl mt-3 mb-6">
            Plans that fit your scale
          </span>
          <span className="text-xl font-light">
            Simple, transparent pricing that grows with you. Try any plan free
            for 30 days.
          </span>
          {/* billing type div */}
          <div className="px-2 h-[56px] bg-[#F2F4F7] m-auto mt-10 space-x-2 flex justify-center items-center rounded-lg">
            <button className="py-2.5 px-1.5 sm:px-3.5 drop-shadow-md hover:bg-white text-[#667085]  hover:text-black  rounded-md">
              Monthly billing
            </button>
            <button className="py-2.5 px-1.5 sm:px-3.5 border border-[#94a3b8] drop-shadow-md hover:bg-white text-[#667085] hover:border-none hover:text-black rounded-md">
              Annual billing
            </button>
            <span className="py-0.5 px-1 sm:px-2.5 text-sm text-[#344054] bg-[#cbd5e1] rounded-2xl  ">
              Save 20%
            </span>
          </div>
        </div>
        {/* types of pricing */}
        <div className="mx-4 xl:mx-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 place-content-center justify-center max-w-[1200px] items-center m-auto  gap-8 mb-10 ">
            {/* portion */}
            {pricingData.map((data) => (
              <div className="p-6 lg:p-8 relative border rounded-lg">
                <div className="grid grid-flow-row md:grid-flow-col text-start lg:gap-4 xl:gap-8 gap-4 ">
                  <div className="flex flex-col">
                    <div className="flex flex-row flex-wrap">
                      <span className="font-semibold text-2xl text-[#101828] ">
                        {data.mainTitle}
                      </span>
                      <div>
                        {data.ispopular && (
                          <span className="text-sm font-medium text-[#6941C6] px-2.5 py-0.5 bg-[#F9F5FF] rounded-2xl ml-2">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="text-[#475467] text-base">
                      {data.subTitle}
                    </span>
                  </div>
                  <div className="text-[#101828]">
                    <span className="font-bold text-4xl leading-none">$</span>
                    <span className="font-bold text-6xl lg:text-4xl xl:text-6xl">
                      {data.price}
                    </span>
                    <span className="text-base font-normal text-[#475467] ml-0.5">
                      per month
                    </span>
                  </div>
                </div>
                <hr className="my-8" />
                <div className="">
                  <div className="flex flex-col items-start">
                    <span className="uppercase font-semibold text-base">
                      Features
                    </span>
                    <span>
                      Everything in our{" "}
                      <span className="font-medium">Free plan</span> plus....
                    </span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 text-start mt-6 gap-4">
                    {data.getInPlan.map((data) => (
                      <div className="flex flex-row gap-4">
                        <img
                          src={rightTick}
                          alt="not found"
                          className="w-6 h-6"
                        />
                        <span className="font-light">{data}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <hr className="mt-8 mb-20" />
                <div className="absolute inset-x-0 bottom-0 mx-6 lg:mx-8 mb-8">
                  <button className="bg-[#7F56D9] text-white rounded-lg font-bold text-base w-full py-3">
                    Get started
                  </button>
                </div>
              </div>
            ))}
          </div>
          {/* last free trial portion */}
          <div className="max-w-[1200px] m-auto bg-[#F9FAFB] mb-16 px-6 lg:px-0 py-10 lg:py-0">
            <div className="flex flex-col lg:flex-row justify-between lg:p-16 text-left">
              <div className="flex flex-col  gap-4">
                <span className="font-semibold text-2xl lg:text-3xl text-[#101828]">
                  Start your 30-day free trial
                </span>
                <span className="font-normal text-xl text-[#475467]">
                  Join over 4,000+ startups already growing with Untitled.
                </span>
              </div>
              <div className="flex lg:flex-row flex-col justify-center items-center gap-3 mt-8 lg:mt-0">
                <button className="px-5 py-3 text-[#344054] font-semibold border rounded-lg bg-white w-full lg:w-auto">
                  Learn more
                </button>
                <button className="px-5 py-3 font-semibold rounded-lg bg-[#7F56D9] text-white w-full lg:w-auto">
                  Get started
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
