import React, { useEffect, useState } from "react";
import Codeblock from "./Codeblock";
import {
  AiOutlineMobile,
  AiOutlineTablet,
  AiOutlineDesktop,
} from "react-icons/ai";
import { BiLinkExternal } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import Footer from "./Footer";
import Header from "../Home/Header";

const PreviewTemplate = () => {
  const { module } = useParams();
  const moduleName = module.charAt(0).toUpperCase() + module.slice(1);
  const [moduleData, setModuleData] = useState([
    {
      view: "preview",
      width: "100%",
      path: `${module}/sample1`,
      name: `${moduleName} Sample 1`,
    },
    {
      view: "preview",
      width: "100%",
      path: `${module}/sample2`,
      name: `${moduleName} Sample 2`,
    },
    {
      view: "preview",
      width: "100%",
      path: `${module}/sample3`,
      name: `${moduleName} Sample 3`,
    },
  ]);

  const changeWidth = (index, width) => {
    const d = [...moduleData];
    d[index].width = width;
    setModuleData([...d]);
  };

  const changeView = (index, view) => {
    const d = [...moduleData];
    d[index].view = view;
    setModuleData([...d]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [module]);

  return (
    <>
      <Header />
      <div className="h-max bg-slate-100 px-10">
        <div className="flex flex-col text-3xl font-bold text-left px-5 py-7 border-b border-gray-200">
          <span className="text-xs text-gray-400 mb-2 cursor-pointer">
            <Link to="/">Application UI </Link>/ {moduleName}
          </span>

          <span>{moduleName} Components</span>
        </div>
        {moduleData.map((data, index) => (
          <div
            className="py-16 flex justify-center items-center px-4 text-sm rounded-lg"
            key={index}
          >
            <div className="bg-gray-200 w-full border ">
              <div className="bg-white flex justify-between items-center px-3 h-12 border-b">
                <span className="font-semibold">{data.name}</span>
                <div className="flex gap-5">
                  {data.view === "preview" && (
                    <div className="flex gap-2 items-center">
                      <AiOutlineMobile
                        className={`border h-6 w-6 rounded-md p-1 cursor-pointer shadow-md ${
                          data.width === "425px" &&
                          "bg-blue-400 border text-white"
                        }`}
                        onClick={() => changeWidth(index, "425px")}
                      />
                      <AiOutlineTablet
                        className={`border h-6 w-6 rounded-md p-1 cursor-pointer shadow-md ${
                          data.width === "768px" &&
                          "bg-blue-400 border text-white"
                        }`}
                        onClick={() => changeWidth(index, "768px")}
                      />
                      <AiOutlineDesktop
                        className={`border h-6 w-6 rounded-md p-1 cursor-pointer shadow-md ${
                          data.width === "100%" &&
                          "bg-blue-400 border text-white"
                        }`}
                        onClick={() => changeWidth(index, "100%")}
                      />
                    </div>
                  )}
                  <div className="flex items-center text-xs">
                    <span
                      className={`py-1 px-2 rounded-xl cursor-pointer ${
                        data.view === "preview" &&
                        "bg-blue-400 border text-white"
                      }`}
                      onClick={() => changeView(index, "preview")}
                    >
                      Preview
                    </span>
                    <span
                      className={`py-1 px-2 m-2 rounded-xl cursor-pointer ${
                        data.view !== "preview" &&
                        "bg-blue-400 border text-white"
                      }`}
                      onClick={() => changeView(index, "code")}
                    >
                      Code
                    </span>
                    <BiLinkExternal
                      className="cursor-pointer text-gray-500 text-sm ml-4"
                      onClick={() =>
                        window.open(
                          `http://localhost:3000${data.path}`,
                          "_blank"
                        )
                      }
                    />
                  </div>
                </div>
              </div>
              {data.view === "preview" ? (
                <div className="flex justify-center items-center w-full">
                  <iframe
                    title="Preview"
                    width={data.width}
                    className="h-[80vh] bg-white"
                    src={`http://localhost:3000${data.path}`}
                  ></iframe>
                </div>
              ) : (
                <div className=" h-max w-full">
                  <Codeblock />
                </div>
              )}
            </div>
          </div>
        ))}
        <Footer />
      </div>
    </>
  );
};

export default PreviewTemplate;
