import React from "react";
import successArrow from "./assets/correct.svg";
import dashIcon from "./assets/Dash.svg";
const pricingData = [
  {
    mainTitle: "",
    price: "",
    infoNote: "",
    "Basic Feature": "Basic Feature",
    Users: "Users",
    "Individual data": "Individual data",
    Support: "Support",
    Analytics: "Analytics",
    "Export Reports": "Export Reports",
    titleRow1: "Overview",
    titleRow5: "Reporting And Analytics",
    "Api Access": "Api Access",
  },
  {
    mainTitle: "Basic",
    popular: true,
    price: "$10",
    infoNote: "Basic features for up to 10 employees with everything you need.",
    "Basic Feature": true,
    Users: 10,
    "Individual data": "20GB",
    Support: true,
    Analytics: "Basic",
    "Export Reports": true,
    "Api Access": false,
  },
  {
    mainTitle: "Business",
    price: "$20",
    infoNote:
      "Advanced features and reporting, better workflows and automation.",
    "Basic Feature": true,
    Users: 20,
    "Individual data": "40GB",
    Support: true,
    Analytics: "Advanced",
    "Export Reports": true,
    "Api Access": true,
  },
  {
    mainTitle: "Enterprise",
    price: "$30",
    infoNote: "Personalised service and enterprise security for large teams.",
    "Basic Feature": true,
    Users: "Unlimited",
    "Individual data": "Unlimited",
    Support: true,
    Analytics: "Advanced",
    "Export Reports": true,
    "Api Access": true,
  },
];
export default function Pricing() {
  return (
    <>
      <div>
        <div>
          <div className="py-8 lg:py-24 flex flex-col mx-4 px-4 lg:mx-0">
            <span className="text-[#60a5fa] text-base">Pricing</span>
            <span className="font-semibold text-4xl sm:text-5xl mt-3 mb-6">
              Compare our plans and find yours
            </span>
            <span className="text-xl font-light">
              Simple, transparent pricing that grows with you. Try any plan free
              for 30 days.
            </span>
            {/* billing type div */}
            <div className="px-2 h-[56px] bg-[#F2F4F7] m-auto mt-10 space-x-2 flex justify-center items-center rounded-lg">
              <button className="py-2.5 px-1.5 sm:px-3.5 drop-shadow-md hover:bg-white text-[#667085]  hover:text-black  rounded-md">
                Monthly billing
              </button>
              <button className="py-2.5 px-1.5 sm:px-3.5 border border-[#94a3b8] drop-shadow-md hover:bg-white text-[#667085] hover:border-none hover:text-black rounded-md">
                Annual billing
              </button>
            </div>
          </div>

          <div className="lg:max-w-[1200px] max-w-[450px] m-auto">
            <table className="w-full text-start border-spacing-5 border-separate mb-10">
              <div className="flex flex-col lg:flex-row justify-between ">
                {pricingData.map((data, index) => (
                  <>
                    <div
                      className={
                        index === 0
                          ? "hidden lg:block"
                          : "border-2 lg:border-none mb-10 lg:mb-0 rounded-lg"
                      }
                    >
                      <tr>
                        <td>
                          <div className="font-semibold text-xl text-[#101828] h-7">
                            {data.mainTitle}
                            {data.popular && (
                              <span className="text-sm font-medium text-[#60a5fa] px-2.5 py-0.5 bg-[#F9F5FF] rounded-2xl ml-2">
                                Popular
                              </span>
                            )}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="h-[50px]">
                          <div>
                            <span className="font-semibold text-5xl">
                              {data.price}
                            </span>
                            {data.price && (
                              <span className="text-[#475467] font-normal ml-1">
                                per month
                              </span>
                            )}
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="h-[50px] lg:h-[70px] xl:h-[50px]">
                          <span className="text-[#475467] text-sm font-normal">
                            {data.infoNote}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        {index === 0 ? (
                          <td className="h-[50px]"></td>
                        ) : (
                          <td>
                            <button className="w-full bg-[#60a5fa] text-white rounded-lg py-3 font-semibold">
                              Get Started
                            </button>
                          </td>
                        )}
                      </tr>
                      {/* portion after first title */}
                      <tr>
                        <td
                          className="h-5 text-sm font-semibold text-[#60a5fa]"
                          colSpan={2}
                        >
                          {data.titleRow1}
                          <span className="lg:hidden">
                            {pricingData[0]["titleRow1"]}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className={
                            index === 0
                              ? ""
                              : "h-7 flex justify-between lg:justify-center flex-row-reverse"
                          }
                        >
                          <span className="text-sm font-semibold text-[#60a5fa]">
                            {data["Basic Feature"] === true ? (
                              <>
                                <img
                                  src={successArrow}
                                  alt="not found"
                                  className="w-5 h-5 mt-1 mx-auto"
                                />
                              </>
                            ) : (
                              <span className="font-medium text-sm text-[#101828] ">
                                Basic Feature
                              </span>
                            )}
                          </span>
                          <span className="lg:hidden">
                            {pricingData[0]["Basic Feature"]}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className={
                            index === 0
                              ? "h-5"
                              : "h-6 text-center flex justify-between lg:justify-center flex-row-reverse"
                          }
                        >
                          <span className="font-medium text-sm text-[#101828]">
                            {data.Users}
                          </span>
                          <span className="lg:hidden">
                            {pricingData[0]["Users"]}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className={
                            index === 0
                              ? "h-5"
                              : "h-7 text-center flex justify-between lg:justify-center flex-row-reverse"
                          }
                        >
                          <span className="font-medium text-sm text-[#101828]">
                            {data["Individual data"]}
                          </span>
                          <span className="lg:hidden">
                            {pricingData[0]["Individual data"]}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className={
                            index === 0
                              ? "h-7"
                              : "h-7 flex justify-between lg:justify-center flex-row-reverse"
                          }
                        >
                          {data.Support === true ? (
                            <img
                              src={successArrow}
                              alt="not found"
                              className="w-5 h-5 mt-1"
                            />
                          ) : (
                            <span className="font-medium text-sm text-[#101828]">
                              Support
                            </span>
                          )}
                          <span className="lg:hidden">
                            {pricingData[0]["Support"]}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <hr />
                        </td>
                      </tr>
                      {/* portion after second title */}
                      <tr>
                        <td className="h-5 text-sm font-semibold text-[#60a5fa] whitespace-nowrap">
                          {data.titleRow5}
                          <span className="lg:hidden">
                            {pricingData[0]["titleRow5"]}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className={
                            index === 0
                              ? "h-5"
                              : "h-7 text-center flex justify-between lg:justify-center flex-row-reverse"
                          }
                        >
                          <span>{data.Analytics}</span>
                          <span className="lg:hidden">
                            {pricingData[0]["Analytics"]}
                          </span>
                        </td>
                      </tr>

                      <tr>
                        <td
                          className={
                            index === 0
                              ? "h-5"
                              : "h-7 text-center flex justify-between lg:justify-center flex-row-reverse"
                          }
                        >
                          {data["Export Reports"] === true ? (
                            <img
                              src={successArrow}
                              alt="not found"
                              className="w-5 h-5 mt-1"
                            />
                          ) : (
                            <span className="font-medium text-sm text-[#101828]">
                              Export reports
                            </span>
                          )}
                          <span className="lg:hidden">
                            {pricingData[0]["Export Reports"]}
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td
                          className={
                            index === 0
                              ? "h-5"
                              : "h-7 text-center flex justify-between lg:justify-center flex-row-reverse"
                          }
                        >
                          {data["Api Access"] === true ? (
                            <img
                              src={successArrow}
                              alt="not found"
                              className="w-5 h-5 mt-1"
                            />
                          ) : data["Api Access"] === false ? (
                            <img
                              src={dashIcon}
                              alt="not found"
                              className="w-5 h-5 mt-1"
                            />
                          ) : (
                            data["Api Access"]
                          )}
                          <span className="lg:hidden">
                            {pricingData[0]["Api Access"]}
                          </span>
                        </td>
                      </tr>
                    </div>
                  </>
                ))}
              </div>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
