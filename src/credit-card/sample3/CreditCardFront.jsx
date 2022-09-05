import React from "react";
import chip from "./assets/chip.png";
import { AiOutlineCaretLeft } from "react-icons/ai";
import { cc_format } from "../utils/helper";
import logo from "./assets/bank-logo.svg";
import MasterCardLogo from "./assets/mc-symbol.svg";

const CreditCardFront = (props) => {
  const { creditCardDetails } = props || {};

  return (
    <>
      <div className="grid grid-cols-4 justify-between bg-[#210D09ED] text-white h-[186px] w-[277px] rounded-[10px] px-[14px] py-[6px] shadow-lg">
        <div className="flex gap-2 col-span-3 flex-col text-left mt-2">
          <div className="text-xs font-bold text-[#FFFCFC]">
            BANK OF RUQMANIA
          </div>
          <img src={chip} className="w-9 h-9 mt-2 ml-2" alt="chip-img" />
          <div className="flex mt-4">
            <AiOutlineCaretLeft className="text-xl mt-[2px]" />
            <div className="flex items-center text-base top-3">
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
            </div>
          </div>
          <div className="flex items-center justify-end text-[11px]">
            <span className="text-[5px]">
              VALID <br />
              THRU
            </span>
            <span>
              {" "}
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
          <div className="text-[8px] ml-6">DES RUQMANIA</div>
        </div>

        <div className="flex flex-col justify-between items-end">
          <img src={logo} className="w-12 h-9" alt="logo" />
          <img src={MasterCardLogo} className="w-12 h-9" alt="master-card" />
        </div>
      </div>
    </>
  );
};

export default CreditCardFront;
