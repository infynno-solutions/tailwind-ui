import React, { useState } from "react";
import Codeblock from "./preview-template/Codeblock";
import {
  AiOutlineMobile,
  AiOutlineTablet,
  AiOutlineDesktop,
} from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";

const PreviewTemplate = ({ path, name }) => {
  const [boxView, setBoxView] = useState("preview");
  const [width, setWidth] = useState("100%");

  return (
    <div className="h-screen p-10 flex justify-center px-4 text-sm">
      <div className="bg-gray-200 w-4/5 h-full border rounded-md">
        <div className="bg-white flex justify-between items-center px-3 h-[8%] border-b">
          <span className="font-semibold">
            {name ? name : "Demo Component"}
          </span>
          <div className="flex gap-5">
            {boxView === "preview" && (
              <div className="flex gap-2 items-center">
                <AiOutlineMobile
                  className={`border h-6 w-6 rounded-md p-1 cursor-pointer shadow-md ${
                    width === "425px" && "bg-teal-500 text-white"
                  }`}
                  onClick={() => setWidth("425px")}
                />
                <AiOutlineTablet
                  className={`border h-6 w-6 rounded-md p-1 cursor-pointer shadow-md ${
                    width === "768px" && "bg-teal-500 text-white"
                  }`}
                  onClick={() => setWidth("768px")}
                />
                <AiOutlineDesktop
                  className={`border h-6 w-6 rounded-md p-1 cursor-pointer shadow-md ${
                    width === "100%" && "bg-teal-500 text-white"
                  }`}
                  onClick={() => setWidth("100%")}
                />
              </div>
            )}
            <div className="flex items-center text-xs">
              <span
                className={`py-1 px-2 rounded-xl cursor-pointer ${
                  boxView === "preview" && "bg-teal-500 text-white"
                }`}
                onClick={() => setBoxView("preview")}
              >
                Preview
              </span>
              <span
                className={`py-1 px-2 m-2 rounded-xl cursor-pointer ${
                  boxView !== "preview" && "bg-teal-500 text-white"
                }`}
                onClick={() => setBoxView("code")}
              >
                Code
              </span>
              <BiLinkExternal
                className="cursor-pointer text-gray-500 text-sm ml-4"
                onClick={() =>
                  window.open(`http://localhost:3000${path}`, "_blank")
                }
              />
            </div>
          </div>
        </div>
        {boxView === "preview" ? (
          <div className="flex justify-center items-center h-[92%] w-full">
            <iframe
              title="Preview"
              width={width}
              className="h-full bg-white"
              src={`http://localhost:3000${path}`}
            ></iframe>
          </div>
        ) : (
          <div>
            <Codeblock />
          </div>
        )}
      </div>
    </div>
  );
};

export default PreviewTemplate;
