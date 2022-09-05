import React from "react";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { cc_format } from "../utils/helper";
import { SiVisa } from "react-icons/si";

const CreditCardFront = (props) => {
  const { creditCardDetails } = props || {};

  return (
    <>
      <div className="flex flex-col justify-between bg-test-img bg-cover h-[186px] w-[277px] rounded-[10px] px-[26px] py-[18px] shadow-lg">
        <div className="flex justify-between leading-[14px] items-center">
          <span className="text-[13px] font-medium">American Express</span>
          <SiVisa className="h-[32px] w-12" />
        </div>
        <div className="flex">
          <span className="flex items-center text-base top-3">
            <AiOutlineCaretLeft className="text-xl" />
            <input
              className="bg-transparent focus:outline-none focus:border border-black rounded-md px-1"
              type="text"
              value={cc_format(creditCardDetails?.number)}
              onChange={(e) => {
                props.setCreditCardDetails({
                  ...creditCardDetails,
                  number: e?.target?.value,
                });
              }}
            />
          </span>
        </div>
        <div className="flex justify-between text-[13px] font-medium text-gradient-to-r from-black to-gray-200">
          <span>
            <input
              className="bg-transparent focus:outline-none focus:border border-black rounded-md px-1"
              type="text"
              value={creditCardDetails?.ownerName}
              maxLength="22"
              onChange={(e) =>
                props.setCreditCardDetails({
                  ...creditCardDetails,
                  ownerName: e?.target?.value,
                })
              }
            />
          </span>
          <span>
            <input
              className="bg-transparent focus:outline-none focus:border border-black rounded-md px-1 w-12"
              type="text"
              value={creditCardDetails?.expiryDate}
              maxLength="5"
              onChange={(e) => {
                props.setCreditCardDetails({
                  ...creditCardDetails,
                  expiryDate: e?.target?.value,
                });
              }}
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default CreditCardFront;
