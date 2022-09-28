import React from "react";
import { FaHtml5, FaReact } from "react-icons/fa";

const Introduction = () => {
  return (
    <div className=" h-[78%] flex justify-center text-center md:px-28 sm:px-12 px-6 py-16  bg-gradient-to-tr from-blue-300 to-blue-200">
      <div className="flex flex-col justify-center gap-8 md:w-1/2 w-full">
        <div>
          <div className="text-5xl font-bold">
            Beautiful UI components, crafted with Tailwind CSS.
          </div>
          <div className="text-blue-900 font-semibold mt-5 text-center">
            <a href="https://infynno.com/" target="_blank" rel="noreferrer">
              By the Infynno Solutions
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center gap-1 w-full ">
          <FaHtml5 />
          <span className="mr-5">
            <a
              href="https://infynno.com/service/web-development/"
              target="_blank"
              rel="noreferrer"
            >
              HTML
            </a>
          </span>
          <FaReact />
          <span className="mr-3">
            <a
              href="https://infynno.com/service/reactjs-development/"
              target="_blank"
              rel="noreferrer"
            >
              React
            </a>
          </span>
        </div>
        <div className="">
          <p>
            Examples of beautifully produced, completely responsive, and
            professionally designed components that you can add to your Tailwind
            projects and modify as you like.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
