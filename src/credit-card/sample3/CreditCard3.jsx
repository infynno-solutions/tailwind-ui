import React, { useState } from "react";
import CreditCardBack from "./CreditCardBack";
import CreditCardFront from "./CreditCardFront";

const CreditCard3 = () => {
  const [creditCardDetails, setCreditCardDetails] = useState(defaultData);
  return (
    <div className="flex flex-col justify-center items-center gap-20 bg-[#373737] h-screen">
      <div className=" flex items-center justify-center gap-20">
        <CreditCardFront
          creditCardDetails={creditCardDetails}
          setCreditCardDetails={setCreditCardDetails}
        />
        <CreditCardBack
          creditCardDetails={creditCardDetails}
          setCreditCardDetails={setCreditCardDetails}
        />
      </div>
      <button className="w-24 border border-blue-700 rounded-lg h-9 bg-blue-600 text-white hover:shadow-xl">
        SAVE
      </button>
    </div>
  );
};

export default CreditCard3;

const defaultData = {
  number: "1234567812345678",
  ownerName: "Jack Lewis",
  expiryDate: "06/29",
  cvv: "133",
};
