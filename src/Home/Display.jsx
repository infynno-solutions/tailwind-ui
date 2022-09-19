/* eslint-disable no-lone-blocks */
import React from "react";
import pricingBg from "../assets/pricing-bg.png";
import creditCardBg from "../assets/cc_bg.png";
import Footer from "./Footer";
import Header from "./Header";
import ComponentList from "./ComponentList";
import Introduction from "./Introduction";

const Display = () => {
  const elements = [
    { name: "Buttons", components: 9 },
    { name: "Dropdowns", components: 5 },
    { name: "Checkboxes", components: 6 },
    { name: "Date/Time", components: 7 },
  ];

  const applicationUi = [
    {
      name: "Pricing Layouts",
      components: 5,
      path: "/preview/pricing",
      background: pricingBg,
    },
    {
      name: "Credit Card Layout",
      components: 3,
      path: "/preview/credit-card",
      background: creditCardBg,
    },
    {
      name: "Others",
      components: 9,
      path: "/undefined",
    },
    {
      name: "Others",
      components: 9,
      path: "/undefined",
    },
  ];
  return (
    <div className=" w-full ">
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
