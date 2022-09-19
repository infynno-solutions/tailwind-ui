import React from "react";
import { Link } from "react-router-dom";

const ComponentList = ({ components }) => {
  return (
    <div className="flex md:flex-row flex-col border-t border-gray-200 py-14 text-left md:gap-0 gap-5 ">
      <div className="flex gap-4 flex-wrap">
        {components.map((comp) => {
          return (
            <Link to={`${comp?.path}`}>
              <div className="flex flex-col gap-1 group hover:bg-teal-50 p-2 rounded-lg cursor-pointer">
                {comp.background ? (
                  <img
                    src={comp?.background}
                    className="w-[430px] h-[280px] bg-blue-100 rounded-lg opacity-75 hover:opacity-100 duration-100"
                    alt="component name"
                  />
                ) : (
                  <div className="w-[430px] h-[280px] bg-blue-100 rounded-lg"></div>
                )}
                <span className=" font-medium text-base">{comp.name}</span>
                <span className="text-sm text-gray-600">
                  {comp.components} components
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ComponentList;
