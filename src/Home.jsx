import { Link } from "react-router-dom";
import { Tab } from "@headlessui/react";
import Sample1 from "./credit-card/sample1/CreditCard";
import Sample2 from "./credit-card/sample2/CreditCard";
import Sample3 from "./credit-card/sample3/CreditCard";
import React, { useState } from "react";

const Home = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <>
      <div className="p-10 h-screen">
        <h2>HOME</h2>
        <div className="flex flex-col text-left">
          See Credit card samples by clicking below links
          <Link className="text-blue-800" to="/credit-card/sample1">
            - Sample 1
          </Link>
          <Link className="text-blue-800" to="/credit-card/sample2">
            - Sample 2
          </Link>
          <Link className="text-blue-800" to="/credit-card/sample3">
            - Sample 3
          </Link>
        </div>
      </div>
      <div className="bg-cc-bg-img h-screen px-20 py-10">
        <Tab.Group vertical defaultIndex={0}>
          <div className="flex justify-center gap-0 ">
            <Tab.List className="flex justify-center gap-3 h-14 w-max bg-black bg-opacity-70 backdrop-blur-sm text-white p-2 rounded-lg duration-300">
              <Tab
                className={`w-36 rounded-lg 
              ${
                activeTab === "tab1"
                  ? "bg-white text-[#0B0641]"
                  : "hover:bg-[#ffffff79]  hover:text-white"
              }`}
                onClick={() => setActiveTab("tab1")}
              >
                Sample 1
              </Tab>
              <Tab
                className={`w-36 rounded-lg 
              ${
                activeTab === "tab2"
                  ? "bg-white text-[#0B0641]"
                  : "hover:bg-[#ffffff79] hover:text-white"
              }`}
                onClick={() => setActiveTab("tab2")}
              >
                Sample 2
              </Tab>
              <Tab
                className={`w-36 rounded-lg
              ${
                activeTab === "tab3"
                  ? "bg-white text-[#0B0641]"
                  : "hover:bg-[#ffffff79] hover:text-white"
              }`}
                onClick={() => setActiveTab("tab3")}
              >
                Sample 3
              </Tab>
            </Tab.List>
          </div>
          <Tab.Panels className="w-full h-4/5 duration-300">
            <Tab.Panel>
              <Sample1 showCaseView={true} />
            </Tab.Panel>
            <Tab.Panel>
              <Sample2 showCaseView={true} />
            </Tab.Panel>
            <Tab.Panel>
              <Sample3 showCaseView={true} />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

export default Home;
