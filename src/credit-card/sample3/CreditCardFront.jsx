import React from "react";
import chip from "./assets/chip.png";
import { ReactComponent as LeftCaret } from "./assets/left-caret.svg";
import { cc_format } from "../sample3/utils/helper";
import logo from "./assets/bank-logo.svg";
import MasterCardLogo from "./assets/mc-symbol.svg";

const CreditCardFront = (props) => {
  const { creditCardDetails, error } = props || {};
  let currentYear = new Date().getFullYear().toString();
  var currentMonth = ("0" + (new Date().getMonth() + 1)).slice(-2);

  return (
    <div className="flex flex-col">
      {(error.expiryDate || error.number) && (
        <div className="text-xs text-red-600 h-9">
          {error.expiryDate
            ? "Please enter valid expiry date"
            : "Please enter valid card number"}
        </div>
      )}
      <div className="grid grid-cols-4 justify-between bg-[#210D09ED] text-white h-[186px] w-[277px] rounded-[10px] px-[14px] py-[6px] shadow-xl transition duration-400 hover:scale-110 sample3">
        <div className="flex gap-2 col-span-3 flex-col text-left mt-2">
          <div className="text-xs font-bold text-[#FFFCFC]">
            BANK OF RUQMANIA
          </div>
          <img src={chip} className="w-9 h-9 mt-2 ml-2" alt="chip-img" />
          <div className="flex mt-4">
            <div className="flex items-center text-base top-3">
              <LeftCaret className="text-xl mt-[2px] mr-1" />
              <input
                class="bg-transparent focus:outline-none focus:border w-[184px] border-black rounded-md pr-1"
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
                class="bg-transparent focus:outline-none focus:border border-black rounded-md px-1 w-12"
                type="text"
                value={creditCardDetails?.expiryDate}
                maxLength="5"
                onChange={(e) => {
                  const { value } = e?.target;
                  value.match(/^(0[1-9]|1[0-2])\/(([0-9]{4}|[0-9]{2})$)/)
                    ? value.slice(-2) < currentYear.slice(-2)
                      ? props.setError({ ...error, expiryDate: true })
                      : value.slice(-2) === currentYear.slice(-2) &&
                        value.slice(0, 2) <= currentMonth
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
          <div className="text-[8px] ml-6">DES RUQMANIA</div>
        </div>

        <div className="flex flex-col justify-between items-end">
          <img src={logo} className="w-12 h-9" alt="logo" />
          <img src={MasterCardLogo} className="w-12 h-9" alt="master-card" />
        </div>
      </div>
    </div>
  );
};

export default CreditCardFront;
