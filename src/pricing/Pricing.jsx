import React from "react";

const Pricing = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-32 py-[72px]">
      {/* heading section  */}
      <div className="flex flex-col w-[566px] h-[234px]">
        <span className="font-medium text-[40px]">Powerful features for</span>
        <span className="text-[#1D4ED8] font-medium text-[40px]">
          powerful creators.
        </span>
        <span className="text-xl mt-4">Chose a plan that's right for you</span>
        <div className="text-base mt-16">
          <span>Pay monthly </span>
          <span>Pay yearly</span>
        </div>
      </div>

      {/* pricing section  */}
      <div className="flex gap-6 w-[1184px] h-[721px]">
        <div className="h-full w-[378px]"></div>
        <div className="flex flex-col h-full w-[378px] bg-[#1D4ED8] rounded-xl text-white py-6 px-10">
          <div className="flex flex-col h-[249px] text-left">
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
            <button className="w-full h-11 bg-white text-[#1D4ED8] rounded">
              Get Started Now
            </button>
          </div>
        </div>
        <div className="h-full w-[378px]"></div>
      </div>
    </div>
  );
};

export default Pricing;
