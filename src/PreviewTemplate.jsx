import React, { useState } from "react";
import CreditCard from "./credit-card/sample1/CreditCard";
import Codeblock from "./preview-template/Codeblock";
import {
  AiOutlineMobile,
  AiOutlineTablet,
  AiOutlineDesktop,
} from "react-icons/ai";

const PreviewTemplate = () => {
  const [boxView, setBoxView] = useState("preview");
  const [width, setWidth] = useState("100%");
  return (
    <div className="h-screen p-10 flex justify-center">
      <div className="bg-red-500 w-4/5 h-full border">
        <div className="bg-white flex justify-between px-3 h-max">
          <span>Name of template</span>
          <div className="flex">
            <div className="flex gap-2">
              <AiOutlineMobile onClick={() => setWidth("500px")} />
              <AiOutlineTablet onClick={() => setWidth("22")} />
              <AiOutlineDesktop onClick={() => setWidth("100%")} />
            </div>
            <div>
              <span
                className="bg-teal-200 m-2"
                onClick={() => setBoxView("preview")}
              >
                Preview
              </span>

              <span
                className="bg-teal-200 m-2"
                onClick={() => setBoxView("code")}
              >
                Code
              </span>
            </div>
          </div>
        </div>
        {boxView === "preview" ? (
          <div className="flex justify-center items-center h-[661px] w-[990px]">
            <iframe
              title="Preview"
              width={width}
              className="h-full"
              src="http://localhost:3000/credit-card/sample1"
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
