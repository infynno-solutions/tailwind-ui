import React from "react";
import MasterCardLogo from "./assets/mc_symbol.svg";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { cc_format } from "../utils/helper";
import moment from "moment/moment";

const CreditCardFront = (props) => {
  const { creditCardDetails, error } = props || {};

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[186px] w-[277px] rounded-[10px] px-[26px] py-[18px] shadow-lg">
        <div className="flex justify-between leading-[14px] items-center">
          <span className="text-[13px] font-medium">Credit Card</span>
          <img
            src={MasterCardLogo}
            className="h-[32px] w-12"
            alt="master-card-logo"
          />
        </div>
        <div className="flex">
          <span className="flex items-center text-base top-3">
            <AiOutlineCaretLeft className="text-xl mt-[2px]" />
            <input
              className="bg-transparent focus:outline-none focus:border border-black rounded-md px-1"
              type="text"
              value={cc_format(creditCardDetails?.number)}
              onChange={(e) => {
                const { value } = e?.target;
                let finalValue = value.replaceAll(" ", "");
                isNaN(finalValue)
                  ? props.setError({ ...error, number: true })
                  : finalValue.length < 16
                  ? props.setError({ ...error, number: true })
                  : props.setError({ ...error, number: false });

                props.setCreditCardDetails({
                  ...creditCardDetails,
                  number: value,
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
              maxLength="21"
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
              className="bg-transparent focus:outline-none focus:border border-black rounded-md px-1 w-11"
              type="text"
              value={creditCardDetails?.expiryDate}
              maxLength="5"
              onChange={(e) => {
                const { value } = e?.target;
                value.match(/^(0[1-9]|1[0-2])\/(([0-9]{4}|[0-9]{2})$)/)
                  ? value.slice(-2) < moment().format("YY")
                    ? props.setError({ ...error, expiryDate: true })
                    : value.slice(-2) === moment().format("YY") &&
                      value.slice(0, 2) <= moment().format("MM")
                    ? props.setError({ ...error, expiryDate: true })
                    : props.setError({ ...error, expiryDate: false })
                  : props.setError({ ...error, expiryDate: true });
                props.setCreditCardDetails({
                  ...creditCardDetails,
                  expiryDate: value,
                });
              }}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreditCardFront;
