import React, { useState, useEffect } from "react";
import Footer from "../Home/Footer";
import { useLocation, useParams, Link } from "react-router-dom";
import Header from "../Home/Header";
import { formElementsData } from "../helper/formElements";
import Codeblock from "./Codeblock";

const FormPreview = () => {
  const { module } = useParams();
  const moduleName = module.charAt(0).toUpperCase() + module.slice(1);
  const [collapse, setCollapse] = useState(null);
  const location = useLocation();
  const value = location.pathname;
  const scrollView = value.split("/")[1];

  const { buttons, animatedButtons, inputs, radioButtons, checkbox } =
    formElementsData;
  let elements, intro;
  switch (module) {
    case "buttons":
      elements = buttons.data;
      intro = buttons.intro;
      break;

    case "animatedButtons":
      elements = animatedButtons.data;
      intro = animatedButtons.intro;
      break;
    case "inputs":
      elements = inputs.data;
      intro = inputs.intro;
      break;
    case "radio":
      elements = radioButtons.data;
      intro = radioButtons.intro;
      break;
    case "checkbox":
      elements = checkbox.data;
      intro = checkbox.intro;
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
      <Header module={scrollView} />
      <div className="container mx-auto flex flex-col px-4 gap-3 h-screen text-left">
        <div className="flex flex-col gap-3 border-b border-gray-200 py-6 mb-5">
          <span className="text-xs font-extrabold text-gray-400  cursor-pointer">
            <Link to="/">Form Elements </Link>/ {moduleName}
          </span>
          <span className="text-4xl font-bold">{intro.title}</span>
          <span className="text-gray-600">{intro.description}</span>
        </div>
        {moduleName !== "AnimatedButtons" ? (
          <div>
            {elements.map((variant, index) => {
              return (
                <div>
                  <div className="flex flex-col border-b gap-4 border-gray-200 pb-4">
                    <span className="text-2xl font-semibold">
                      {variant.title}
                    </span>
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
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {elements.map((variant, index) => {
              return (
                <>
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
                </>
              );
            })}
          </div>
        )}
        <Footer />
      </div>
    </>
  );
};

export default FormPreview;
