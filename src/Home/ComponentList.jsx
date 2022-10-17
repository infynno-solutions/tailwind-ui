import React from "react";
import { Link } from "react-router-dom";

const ComponentList = ({ components }) => {
  return (
    <div className="border-t border-gray-200 py-14 text-left md:gap-0 gap-5">
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-4 m-auto">
        {components.map((comp) => {
          return (
            <Link to={`${comp?.path}`}>
              <div
                className="flex flex-col gap-1 group hover:bg-teal-50 p-2 rounded-lg cursor-pointer shadow-md hover:shadow-none"
                title={comp.name}
              >
                {comp.background ? (
                  <img
                    src={comp?.background}
                    className="w-full h-[280px] bg-blue-100 rounded-lg opacity-75 hover:opacity-100 duration-100 border border-gray-200"
                    alt="component name"
                  />
                ) : (
                  <div className="w-full h-[280px] bg-blue-100 rounded-lg"></div>
                )}
                <span className=" font-medium text-base">{comp.name}</span>

                <span className="text-sm text-gray-600">
                  {comp.components
                    ? `${comp.components} components`
                    : "Form Elements"}
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
