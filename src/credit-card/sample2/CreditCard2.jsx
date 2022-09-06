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
  return (
    <div className="flex flex-col justify-center items-center md:gap-20 gap-14 bg-[#373737] h-screen">
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
      {error.expiryDate || error.number || error.cvv ? (
        <span className="text-xs text-red-600">
          {error.expiryDate
            ? "Please enter valid expiry date"
            : error.number
            ? "Please enter valid card number"
            : "Please enter valid cvv"}
        </span>
      ) : (
        <button className="w-24 border border-blue-700 rounded-sm h-9 bg-blue-600 text-white hover:shadow-xl">
          SAVE
        </button>
      )}
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
