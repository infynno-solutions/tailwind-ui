/* eslint-disable no-lone-blocks */
import React, { useEffect } from "react";
import pricingBg from "./assets/pricing-bg.png";
import creditCardBg from "./assets/cc_bg.png";
import carouselBg from "./assets/bg-carousel.png";
import buttonBg from "./assets/btn-bg.png";
import inputBg from "./assets/input-bg.png";
import radioBg from "./assets/radioBg.png";
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
    },
    {
      name: "Inputs",
      path: "/form-elements/inputs",
      background: inputBg,
    },
    {
      name: "Radio Buttons",
      path: "/form-elements/radio",
      background: radioBg,
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
    <div className=" w-full bg-slate-100">
      <Header />
      <Introduction />
      <div
        className="bg-white border-t border-gray-200 md:px-16 px-10 py-10"
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
