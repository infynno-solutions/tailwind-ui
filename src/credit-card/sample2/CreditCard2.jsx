import React, { useState } from "react";
import CreditCardBack from "./CreditCardBack";
import CreditCardFront from "./CreditCardFront";

const CreditCard2 = () => {
  const [creditCardDetails, setCreditCardDetails] = useState(defaultData);
  const [error, setError] = useState({
    number: false,
    expiryDate: false,
    cvv: false,
  });
  const handleClick = () => console.log(creditCardDetails);

  return (
    <div className="flex flex-col justify-center items-center md:gap-20 gap-14 bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 h-screen">
      <div className="flex flex-col justify-center items-center md:gap-20 gap-14 h-4/5 bg-purple-800 border border-purple-800 shadow-sm  shadow-purple-700 rounded-3xl w-3/5">
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
          className={`w-24 border border-yellow-500 rounded-lg h-9 bg-yellow-600 text-white hover:shadow-2xl font-medium
        ${(error.expiryDate || error.number || error.cvv) && "opacity-70"}`}
          disabled={error.expiryDate || error.number || error.cvv}
          onClick={handleClick}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreditCard2;

const defaultData = {
  number: "1234567812345678",
  ownerName: "Jack Lewis",
  expiryDate: "06/29",
  cvv: "133",
};
