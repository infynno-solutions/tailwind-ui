import React, { useState, useEffect } from "react";
import Footer from "../Home/Footer";
import { useParams } from "react-router-dom";
import Header from "../Home/Header";
import { formElementsData } from "../helper/formElements";
import Codeblock from "./Codeblock";

const FormPreview = () => {
  const { module } = useParams();
  const [collapse, setCollapse] = useState(null);
  const { buttons, inputs, radioButtons } = formElementsData;
  let elements, intro;
  switch (module) {
    case "buttons":
      elements = buttons.data;
      intro = buttons.intro;
      break;
    case "inputs":
      elements = inputs.data;
      intro = inputs.intro;
      break;
    case "radio":
      elements = radioButtons.data;
      intro = radioButtons.intro;
      break;
    default:
      elements = [];
      intro = null;
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [module]);

  return (
    <>
      <Header />
      <div className="flex flex-col gap-3 h-screen py-12 px-24 text-left">
        <div className="flex flex-col gap-3 border-b border-gray-200 py-6 mb-5">
          <span className="text-4xl font-bold">{intro.title}</span>
          <span className="text-gray-600">{intro.description}</span>
        </div>

        {elements.map((variant, index) => {
          return (
            <div>
              <div className="flex flex-col border-b gap-4 border-gray-200 pb-4">
                <span className="text-2xl font-semibold">{variant.title}</span>
                <span>{variant.description}</span>
              </div>
              <div className="border border-gray-200 h-max">
                <div className="p-7">{variant.src}</div>
                <div className="flex justify-center border-t border-gray-200 p-7">
                  {collapse === index ? (
                    <div
                      className="text-blue-600 cursor-pointer"
                      onClick={() => setCollapse(null)}
                    >
                      HIDE CODE
                    </div>
                  ) : (
                    <div
                      className="text-blue-600 cursor-pointer"
                      onClick={() => setCollapse(index)}
                    >
                      SHOW CODE
                    </div>
                  )}
                </div>
                <div>
                  {collapse === index && <Codeblock code={variant.code} />}
                </div>
              </div>
            </div>
          );
        })}
        <Footer />
      </div>
    </>
  );
};

export default FormPreview;
