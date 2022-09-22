import React from "react";
import { FaHtml5, FaReact, FaVuejs } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Introduction = () => {
  return (
    <div className=" h-[78%] flex justify-center text-center md:px-28 sm:px-12 px-6 py-16  bg-gradient-to-tr from-blue-300 to-blue-200">
      <div className="flex flex-col justify-center gap-8 md:w-1/2 w-full">
        <div>
          <div className="text-5xl font-bold">
            Beautiful UI components, crafted with Tailwind CSS.
          </div>
          <div
            className="text-blue-900 font-semibold mt-5 text-right cursor-pointer"
            onClick={() => (window.location.href = "https://infynno.com/")}
          >
            By the Infynno Solutions
          </div>
        </div>
        <div className="flex justify-center items-center gap-1 w-full ">
          <FaHtml5 />
          <span className="mr-5">HTML</span>
          <FaReact />
          <span className="mr-3">React</span>
          <FaVuejs />
          <span className="mr-3">Vue</span>
        </div>
        <div className="">
          <p>
            Over 200+ professionally designed, fully responsive, expertly
            crafted component examples you can drop into your Tailwind projects
            and customize to your heart’s content.
          </p>
        </div>
        <div className="flex gap-5 justify-center w-full">
          <button className="flex h-12 rounded-lg items-center px-4 gap-2 hover:shadow-md bg-blue-700 text-white">
            Preview
            <FiArrowRight />
          </button>
          <button className="flex h-12 rounded-lg bg-white items-center border border-blue-400 px-4 gap-2 hover:shadow-md">
            Documentation
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
