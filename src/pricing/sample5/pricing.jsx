import React from "react";
import successArrow from "./assets/correct.svg";
import dashIcon from "./assets/Dash.svg";
export default function Pricing() {
  const pageData = [
    {
      headerTitle: "Compare our plans and find yours",
      headerSubtitle:
        "Simple, transparent pricing that grows with you. Try any plan free for 30 days.",
      priceInfo: [
        {
          titlerow1: "Overview",
          row1: false,
          row2: "Users",
          row3: "Individual data",
          row4: false,
          titlerow5: "Reporting and analytics",
          row6: "Analytics",
          row7: false,
          row8: "Api access",
        },
        {
          mainTitle: "Basic",
          popular: true,
          price: "$10",
          infoNote:
            "Basic features for up to 10 employees with everything you need.",
          row1: true,
          row2: 10,
          row3: "20GB",
          row4: true,
          row6: "Basic",
          row7: true,
          row8: false,
        },
        {
          mainTitle: "Business",
          price: "$20",
          infoNote:
            "Advanced features and reporting, better workflows and automation.",
          row1: true,
          row2: 20,
          row3: "40GB",
          row4: true,
          row6: "Advanced",
          row7: true,
          row8: true,
        },
        {
          mainTitle: "Enterprise",
          price: "$40",
          infoNote:
            "Personalised service and enterprise security for large teams.",
          row1: true,
          row2: "Unlimited",
          row3: "Unlimited",
          row4: true,
          row6: "Advanced",
          row7: true,
          row8: true,
        },
      ],
    },
  ];

  const mobileData = [
    {
      headTitle: "Basic",
      ispopular: true,
      price: "$10",
      infoNote:
        "Basic features for up to 10 employees with everything you need.",

      field: [
        {
          name: "Basic Feature",
          val: true,
        },
        {
          name: "Users",
          val: "10 users",
        },
        {
          name: "Individual data",
          val: 20,
        },
        {
          name: "Support",
          val: true,
        },
        {
          name: "Analytics",
          val: "Basic",
        },
      ],
      field2: [
        {
          name: "Analytics",
          val: "Advanced",
        },
        {
          name: "Export reports",
          val: true,
        },
        {
          name: "Api access",
          val: false,
        },
      ],
      newArr: {
        Analytics: "Advanced",
        "Export reports": true,
        "Api access": false,
      },
    },
    {
      headTitle: "Bussiness",
      ispopular: false,
      price: "$20",
      infoNote:
        "Advanced features and reporting, better workflows and automation.",
      field: [
        {
          name: "Basic Feature",
          val: true,
        },
        {
          name: "Users",
          val: "20 users",
        },
        {
          name: "Individual data",
          val: 40,
        },
        {
          name: "Support",
          val: true,
        },
        {
          name: "Analytics",
          val: "Advanced",
        },
      ],
      field2: [
        {
          name: "Analytics",
          val: "Advanced",
        },
        {
          name: "Export reports",
          val: true,
        },
        {
          name: "Api access",
          val: true,
        },
      ],
      newArr: {
        Analytics: "Advanced",
        "Export reports": true,
        "Api access": false,
      },
    },
    {
      headTitle: "Enterprise",
      ispopular: false,
      price: "$40",
      infoNote: "Personalised service and enterprise security for large teams.",
      field: [
        {
          name: "Basic Feature",
          val: false,
        },
        {
          name: "Users",
          val: "Unlimited",
        },
        {
          name: "Individual data",
          val: "Unlimited",
        },
        {
          name: "Support",
          val: true,
        },
      ],
      field2: [
        {
          name: "Analytics",
          val: "Advanced",
        },
        {
          name: "Export reports",
          val: true,
        },
        {
          name: "Api access",
          val: true,
        },
      ],
      newArr: {
        Analytics: "Advanced",
        "Export reports": true,
        "Api access": false,
      },
    },
  ];
  return (
    <>
      <div>
        {/* header part  */}
        {pageData.map((data) => (
          <div>
            <div className="py-8 lg:py-24 flex flex-col mx-4 px-4 lg:mx-0">
              <span className="text-[#7F56D9] text-base">Pricing</span>
              <span className="font-semibold text-4xl sm:text-5xl mt-3 mb-6">
                {data.headerTitle}
              </span>
              <span className="text-xl font-light">{data.headerSubtitle}</span>
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

            <div className="max-w-[1200px] m-auto">
              <table className="w-full text-start border-spacing-5 border-separate hidden md:block mb-10">
                <tr>
                  {data.priceInfo.map((nestedData) => (
                    <td>
                      <div className="font-semibold text-xl text-[#101828]">
                        {nestedData.mainTitle}
                        {nestedData.popular && (
                          <span className="text-sm font-medium text-[#6941C6] px-2.5 py-0.5 bg-[#F9F5FF] rounded-2xl ml-2">
                            Popular
                          </span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  {data.priceInfo.map((nestedData) => (
                    <td>
                      <div>
                        <span className="font-semibold text-5xl">
                          {nestedData.price}
                        </span>
                        {nestedData.price && (
                          <span className="text-[#475467] font-normal ml-1">
                            per month
                          </span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
                <tr>
                  {data.priceInfo.map((nestedData) => (
                    <td>
                      <span className="text-[#475467] text-sm font-normal">
                        {nestedData.infoNote}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <button className="w-full bg-[#7F56D9] text-white rounded-lg py-3 font-semibold">
                      Get Started
                    </button>
                  </td>
                  <td>
                    <button className="w-full bg-[#7F56D9] text-white rounded-lg py-3 font-semibold">
                      Get Started
                    </button>
                  </td>
                  <td>
                    <button className="w-full bg-[#7F56D9] text-white rounded-lg py-3 font-semibold">
                      Get Started
                    </button>
                  </td>
                </tr>
                {/* portion after first title */}
                <tr>
                  {data.priceInfo.map((nestedData) => (
                    <td>
                      <span className="text-sm font-semibold text-[#6941C6]">
                        {nestedData.titlerow1}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr>
                  {data.priceInfo.map((nestedData) => (
                    <td>
                      {nestedData.row1 ? (
                        <img
                          src={successArrow}
                          alt="not found"
                          className="w-5 h-5 "
                        />
                      ) : (
                        <span className="font-medium text-sm text-[#101828]">
                          Basic feature
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr>
                  {data.priceInfo.map((nestedData) => (
                    <td>{nestedData.row2}</td>
                  ))}
                </tr>
                <tr>
                  {data.priceInfo.map((nestedData) => (
                    <td>{nestedData.row3}</td>
                  ))}
                </tr>
                <tr>
                  {data.priceInfo.map((nestedData) => (
                    <td>
                      {nestedData.row4 ? (
                        <img
                          src={successArrow}
                          alt="not found"
                          className="w-5 h-5 "
                        />
                      ) : (
                        <span className="font-medium text-sm text-[#101828]">
                          Support
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr>
                  <td colSpan={4}>
                    <hr />
                  </td>
                </tr>
                {/* portion after second title portion */}
                <tr>
                  {data.priceInfo.map((nestedData) => (
                    <td>
                      <span className="text-sm font-semibold text-[#6941C6]">
                        {nestedData.titlerow5}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr>
                  {data.priceInfo.map((nestedData) => (
                    <td>
                      <span>{nestedData.row6}</span>
                    </td>
                  ))}
                </tr>
                <tr>
                  {data.priceInfo.map((nestedData) => (
                    <td>
                      {nestedData.row7 ? (
                        <img
                          src={successArrow}
                          alt="not found"
                          className="w-5 h-5 "
                        />
                      ) : (
                        <span className="font-medium text-sm text-[#101828]">
                          Export reports
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
                <tr>
                  {data.priceInfo.map((nestedData) => (
                    <td>
                      {nestedData.row8 === true ? (
                        <img
                          src={successArrow}
                          alt="not found"
                          className="w-5 h-5 "
                        />
                      ) : nestedData.row8 === false ? (
                        <img src={dashIcon} alt="not found" />
                      ) : (
                        nestedData.row8
                      )}
                    </td>
                  ))}
                </tr>
              </table>
              {/* mobile view */}
              {mobileData.map((data) => (
                <div className="m-4 ">
                  <table className="w-full text-start border-separate border-spacing-4 border-black border rounded-lg mb-5 md:hidden">
                    <tr>
                      <td colSpan={2}>
                        <div className="font-semibold text-xl text-[#101828]">
                          {data.headTitle}
                          {data.ispopular && (
                            <span className="text-sm font-medium text-[#6941C6] px-2.5 py-0.5 bg-[#F9F5FF] rounded-2xl ml-2">
                              Popular
                            </span>
                          )}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <div>
                          <span className="font-semibold text-5xl">
                            {data.price}
                          </span>
                          <span className="text-[#475467] font-normal ml-1">
                            per month
                          </span>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <span className="text-[#475467] text-sm font-normal">
                          {data.infoNote}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <button className="w-full bg-[#7F56D9] text-white rounded-lg py-3 font-semibold">
                          Get Started
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan={2}>
                        <span className="text-sm font-semibold text-[#6941C6]">
                          Overview
                        </span>
                      </td>
                    </tr>
                    {data.field.map((checkField) => (
                      <tr>
                        <td>{checkField.name}</td>
                        <td>
                          {checkField.val === true ? (
                            <img
                              src={successArrow}
                              alt="not found"
                              className="w-5 h-5"
                            />
                          ) : checkField.val === false ? (
                            <img
                              src={dashIcon}
                              alt="not found"
                              className="w-5 h-5"
                            />
                          ) : (
                            checkField.val
                          )}
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan={2}>
                        <span className="text-sm font-semibold text-[#6941C6]">
                          Reporting and analytics
                        </span>
                      </td>
                    </tr>
                    {data.field2.map((checkField) => (
                      <tr>
                        <td>{checkField.name}</td>
                        <td>
                          {checkField.val === true ? (
                            <img
                              src={successArrow}
                              alt="not found"
                              className="w-5 h-5"
                            />
                          ) : checkField.val === false ? (
                            <img
                              src={dashIcon}
                              alt="not found"
                              className="w-5 h-5"
                            />
                          ) : (
                            checkField.val
                          )}
                        </td>
                      </tr>
                    ))}
                  </table>
                  {/* {console.log(Object.keys(data.newArr))}
                  {console.log(Object.values(data.newArr))} */}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
