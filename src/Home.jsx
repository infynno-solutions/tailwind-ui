/* eslint-disable no-lone-blocks */
import React, { useEffect } from "react";
import pricingBg from "./assets/pricing-bg.jpg";
import creditCardBg from "./assets/card-bg.png";
import carouselBg from "./assets/carousel-bg.jpg";
import buttonBg from "./assets/button-bg.jpg";
import inputBg from "./assets/input-bg.jpg";
import radioBg from "./assets/radio-bg.jpg";
import cardsBg from "./assets/bg-cards.png";
import animation from "./assets/animation.gif";
import animateButtons from "./assets/animateButtons.gif";
import checkBoxBg from "./assets/checkbox-bg.png";
import Footer from "./Home/Footer";
import Header from "./Home/Header";
import ComponentList from "./Home/ComponentList";
import Introduction from "./Home/Introduction";
import { applicationUiData } from "./helper/applicationUI";
import { useSearchParams } from "react-router-dom";
import formElementsBg from "./assets/formElementsBg.jpg";

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
      name: "Animated Buttons",
      path: "/form-elements/animatedButtons",
      background: animateButtons,
      components: 10,
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
    {
      name: "Card Layout",
      components: 1,
      path: "/application-ui/card-layout",
      background: cardsBg,
    },
    {
      name: "Animation UI",
      components: 1,
      path: "/application-ui/animation",
      background: animation,
    },
  ];
  useEffect(() => {
    if (scrollView) {
      document.getElementById(scrollView).scrollIntoView();
    }
  }, [scrollView]);
  return (
    <div className="w-full bg-white">
      <Header />
      <Introduction />
      <div className="border-t border-gray-200 py-10" id="home">
        <div className="" id="application-ui">
          <div className="container mx-auto flex flex-col md:gap-5 gap-3 text-left mb-10 md:px-16 px-4">
            <span className="text-2xl font-semibold">Application UI</span>
            <span className="text-gray-600">
              Pricing, Modals and Credit card components - everything you need
              to build beautiful responsive web applications.
            </span>
            <ComponentList components={applicationUi} />
          </div>
        </div>
        <div
          className="flex flex-col md:gap-5 gap-3 text-left mb-10 container mx-auto  md:px-16 px-4"
          id="form-elements"
        >
          <span className="text-2xl font-semibold">Form Elements</span>
          <span className="text-gray-600">
            Buttons, Inputs and Radio buttons components - everything you need
            to build beautiful responsive web applications.
          </span>
        </div>
        <div className="xl:relative w-full  xl:bg-black bg-none xl:pt-[830px] xl:h-0 ">
          <div className="container mx-auto">
            <div className="top-0 left-0 right-0 bottom-0 xl:absolute  opacity-50  ">
              <img
                src={formElementsBg}
                alt="not found"
                className="h-[830px] object-cover w-full xl:block hidden"
              />
            </div>
            <div className="xl:absolute top-0 md:px-16 px-4  container ">
              <ComponentList components={elements} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
