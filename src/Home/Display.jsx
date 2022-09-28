/* eslint-disable no-lone-blocks */
import React from "react";
import pricingBg from "../assets/pricing-bg.png";
import creditCardBg from "../assets/cc_bg.png";
import buttonBg from "../assets/btn-bg.png";
import inputBg from "../assets/input-bg.png";
import radioBg from "../assets/radioBg.png";
import Footer from "./Footer";
import Header from "./Header";
import ComponentList from "./ComponentList";
import Introduction from "./Introduction";
import { applicationUiData } from "../helper/applicationUI";

const Display = () => {
  const elements = [
    {
      name: "Buttons",
      path: "/form-preview/buttons",
      background: buttonBg,
    },
    {
      name: "Inputs",
      path: "/form-preview/inputs",
      background: inputBg,
    },
    {
      name: "Radio Buttons",
      path: "/form-preview/radio",
      background: radioBg,
    },
  ];

  const applicationUi = [
    {
      name: "Pricing Layouts",
      components: applicationUiData.pricing.data.length,
      path: "/preview/pricing",
      background: pricingBg,
    },
    {
      name: "Credit Card Layout",
      components: 3,
      path: "/preview/credit-card",
      background: creditCardBg,
    },
  ];
  return (
    <div className=" w-full bg-slate-100">
      <Header />
      <Introduction />
      <div
        id="components"
        className="bg-white border-t border-gray-200 md:px-16 px-10 py-20"
      >
        <div className="flex flex-col md:gap-5 gap-3 text-left mb-10 ">
          <span className="text-xl font-semibold">Application UI</span>
          <span className="text-gray-600">
            Pricing, Modals and Credit card components - everything you need to
            build beautiful responsive web applications.
          </span>
        </div>
        <ComponentList components={applicationUi} />
        <div className="flex flex-col md:gap-5 gap-3 text-left mb-10 ">
          <span className="text-xl font-semibold">Form Elements</span>
          <span className="text-gray-600">
            Buttons, Inputs and Radio buttons components - everything you need
            to build beautiful responsive web applications.
          </span>
        </div>
        <ComponentList components={elements} />
      </div>

      <Footer />
    </div>
  );
};

export default Display;

{
  /* DETAIL INTRO  */
}
{
  /* <div className="flex sm:flex-row flex-col gap-7 text-left px-12 md:px-28 py-14">
        <div className="flex gap-8">
          <ImStack className="h-20 w-20 text-blue-600" />
          <div className="flex flex-col gap-2">
            <span className="font-semibold"> Many Components </span>
            <span>
              Beautifully designed, expertly crafted components that follow all
              accessibility best practices and are easy to customize.
            </span>
          </div>
        </div>
        <div className="flex gap-8">
          <FaRegFileCode className="h-16 w-16 text-blue-600" />
          <div className="flex flex-col gap-2">
            <span className="font-semibold"> React, Vue and HTML </span>
            <span>
              Beautifully designed, expertly crafted components that follow all
              accessibility best practices and are easy to customize.
            </span>
          </div>
        </div>
        <div className="flex gap-8">
          <FaRegFileCode className="h-16 w-16 text-blue-600" />
          <div className="flex flex-col gap-2">
            <span className="font-semibold"> Fully Responsive design </span>
            <span>
              Beautifully designed, expertly crafted components that follow all
              accessibility best practices and are easy to customize.
            </span>
          </div>
        </div>
      </div> */
}
