/* eslint-disable no-lone-blocks */
import React, { useEffect } from "react";
import pricingBg from "./assets/pricing-bg.jpg";
import creditCardBg from "./assets/card-bg.png";
import carouselBg from "./assets/carousel-bg.jpg";
import buttonBg from "./assets/button-bg.jpg";
import inputBg from "./assets/input-bg.jpg";
import radioBg from "./assets/radio-bg.jpg";
import checkBoxBg from "./assets/checkbox-bg.png";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import ComponentList from "./Home/ComponentList";
import Introduction from "./Home/Introduction";
import { applicationUiData } from "./helper/applicationUI";
import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [test] = useSearchParams();
  const scrollView = test.get("tailwind");

  const elements = [
    {
      name: "Buttons",
      path: "/form-elements/buttons",
      background: buttonBg,
      components: 8,
    },
    {
      name: "Inputs",
      path: "/form-elements/inputs",
      background: inputBg,
      components: 8,
    },
    {
      name: "Checkbox",
      path: "/form-elements/checkbox",
      background: checkBoxBg,
      components: 4,
    },
    {
      name: "Radio Buttons",
      path: "/form-elements/radio",
      background: radioBg,
      components: 4,
    },
  ];

  const applicationUi = [
    {
      name: "Pricing Layouts",
      components: applicationUiData.pricing.data.length,
      path: "/application-ui/pricing",
      background: pricingBg,
    },
    {
      name: "Credit Card Layout",
      components: 3,
      path: "/application-ui/credit-card",
      background: creditCardBg,
    },
    {
      name: "Carousel",
      components: 2,
      path: "/application-ui/carousel",
      background: carouselBg,
    },
  ];
  useEffect(() => {
    if (scrollView) {
      document.getElementById(scrollView).scrollIntoView();
    }
  }, [scrollView]);
  return (
    <div className=" w-full bg-white">
      <Header />
      <Introduction />
      <div
        className="container mx-auto border-t border-gray-200 md:px-16 px-4 py-10"
        id="home"
      >
        <div
          className="flex flex-col md:gap-5 gap-3 text-left mb-10"
          id="application-ui"
        >
          <span className="text-xl font-semibold">Application UI</span>
          <span className="text-gray-600">
            Pricing, Modals and Credit card components - everything you need to
            build beautiful responsive web applications.
          </span>
        </div>
        <ComponentList components={applicationUi} />
        <div
          className="flex flex-col md:gap-5 gap-3 text-left mb-10 "
          id="form-elements"
        >
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

export default Home;
