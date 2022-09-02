import React from "react";
import MasterCardLogo from "../assets/mc_symbol.svg";

const CreditCardFront = (props) => {
  const { creditCardDetails } = props || {};
  return (
    <>
      <div className="flex flex-col justify-between bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-[186px] w-[277px] rounded-[10px] px-[26px] py-[18px]">
        <div className="flex justify-between leading-[14px]">
          <span className="text-[13px] font-medium">Credit Card</span>
          <img
            src={MasterCardLogo}
            className="h-[32px] w-12"
            alt="master-card-logo"
          />
        </div>
        <div className="flex">
          <span className="text-base top-3">
            <input
              className="bg-transparent focus:outline-none focus:border rounded-md px-1"
              type="number"
              value={creditCardDetails?.number}
              onChange={(e) =>
                props.setCreditCardDetails({
                  ...creditCardDetails,
                  number: e.target.value,
                })
              }
            />
          </span>
        </div>
        <div className="flex justify-between text-[13px] font-medium">
          <span>{creditCardDetails.ownerName}</span>
          <span>{creditCardDetails.expiryDate}</span>
        </div>
      </div>
    </>
  );
};

export default CreditCardFront;
