import React from "react";
import { FaHtml5, FaReact } from "react-icons/fa";
import banner from "../assets/bg-home.jpg";

const Introduction = () => {
  return (
    <div className="relative pt-[410px] h-0 bg-black">
      <div className="absolute  top-0 left-0 right-0 bottom-0 opacity-40">
        <img
          src={banner}
          alt="banner not found"
          className="w-full object-cover h-[410px]"
        />
      </div>
      <div className="absolute top-0 text-center lg:px-0 xl:px-28 px-6 h-full w-full flex justify-center items-center">
        <div className="flex flex-col justify-center gap-8 md:w-1/2 h-full ">
          <div>
            <div className="lg:leading-[60px] lg:text-5xl text-3xl font-bold text-white">
              Beautiful UI components, crafted with Tailwind CSS.
            </div>
            <div className="text-[#3b82f6] font-semibold mt-5 text-center">
              <a href="https:infynno.com/" target="_blank" rel="noreferrer">
                - By the Infynno Solutions
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center gap-1 w-full ">
            <FaHtml5 color="#dc2626" />
            <span className="mr-5 text-[#e4e4e7]">
              <a
                href="https:infynno.com/service/web-development/"
                target="_blank"
                rel="noreferrer"
              >
                HTML
              </a>
            </span>
            <FaReact color="#0ea5e9" />
            <span className="mr-3 text-[#e4e4e7]">
              <a
                href="https:infynno.com/service/reactjs-development/"
                target="_blank"
                rel="noreferrer"
              >
                React
              </a>
            </span>
          </div>
          <div className="text-white leading-6 text-lg">
            <p>
              Examples of beautifully produced, completely responsive, and
              professionally designed components that you can add to your
              Tailwind projects and modify as you like.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
