import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import Sample1 from "../credit-card/sample1/CreditCard";
import Sample2 from "../credit-card/sample2/CreditCard";
import Sample3 from "../credit-card/sample3/CreditCard";

const CreditCardMain = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="bg-cc-bg-img h-auto px-20 py-10">
      <Tab.Group vertical defaultIndex={0}>
        <div className="flex justify-center gap-0 ">
          <Tab.List className="flex justify-center gap-3 h-14 w-max bg-black bg-opacity-70 backdrop-blur-sm text-white p-2 rounded-lg duration-300">
            <Tab
              className={`sm:w-36 w-24 rounded-lg 
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
              className={`sm:w-36 w-24 rounded-lg 
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
              className={`sm:w-36 w-24 rounded-lg
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
  );
};

export default CreditCardMain;
