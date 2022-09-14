import React, { useState } from "react";
import CreditCardBack from "./CreditCardBack";
import CreditCardFront from "./CreditCardFront";

const CreditCard = ({ showCaseView }) => {
  const [creditCardDetails, setCreditCardDetails] = useState(defaultData);
  const [error, setError] = useState({
    number: false,
    expiryDate: false,
    cvv: false,
  });

  return (
    <div
      className={`flex flex-col justify-center items-center bg-transparent ${
        showCaseView
          ? "py-16"
          : "h-screen bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900 backdrop-blur-sm"
      }`}
    >
      <div
        className={`flex flex-col justify-center items-center md:gap-20 bg-black bg-opacity-60 gap-14 h-4/5 shadow-sm rounded-3xl w-max px-24 ${
          showCaseView && "py-20 "
        }`}
      >
        <div className="flex md:flex-row flex-col items-center justify-center md:gap-20 gap-12">
          <CreditCardFront
            creditCardDetails={creditCardDetails}
            setCreditCardDetails={setCreditCardDetails}
            error={error}
            setError={setError}
          />
          <CreditCardBack
            creditCardDetails={creditCardDetails}
            setCreditCardDetails={setCreditCardDetails}
            error={error}
            setError={setError}
          />
        </div>

        <button
          className={`w-24 rounded-lg h-9 bg-[#FF1D89] text-white hover:shadow-2xl font-medium hover:bg-white hover:text-[#0B0641]
        ${(error.expiryDate || error.number || error.cvv) && "opacity-70"}`}
          disabled={error.expiryDate || error.number || error.cvv}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreditCard;

const defaultData = {
  number: "1234567812345678",
  ownerName: "Infynno Solutions",
  expiryDate: "06/29",
  cvv: "133",
};
