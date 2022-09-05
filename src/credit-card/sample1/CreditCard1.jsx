import React, { useState } from "react";
import CreditCardBack from "./CreditCardBack";
import CreditCardFront from "./CreditCardFront";

const CreditCard1 = () => {
  const [creditCardDetails, setCreditCardDetails] = useState(defaultData);
  const [error, setError] = useState(false);

  const handleClick = () => console.log(creditCardDetails);
  return (
    <div className="flex flex-col justify-center items-center gap-20 bg-[#373737] h-screen">
      <div className="flex items-center justify-center gap-20">
        <CreditCardFront
          creditCardDetails={creditCardDetails}
          setCreditCardDetails={setCreditCardDetails}
          setError={setError}
        />
        <CreditCardBack
          creditCardDetails={creditCardDetails}
          setCreditCardDetails={setCreditCardDetails}
        />
      </div>
      {error ? (
        <span className="text-xs text-red-600">
          Please enter valid expiry date
        </span>
      ) : (
        <button
          className="w-24 border border-blue-700 rounded-sm h-9 bg-blue-600 text-white hover:shadow-xl"
          onClick={handleClick}
        >
          SAVE
        </button>
      )}
    </div>
  );
};

export default CreditCard1;

const defaultData = {
  number: "1234567812345678",
  ownerName: "Jack Lewis",
  expiryDate: "06/29",
  cvv: "133",
};
