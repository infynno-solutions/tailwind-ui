import React, { useState } from "react";
import CreditCardBack from "./CreditCardBack";
import CreditCardFront from "./CreditCardFront";

const CreditCard = () => {
  const [creditCardDetails, setCreditCardDetails] = useState({
    number: "1234 5678 1234 5678",
    ownerName: "Jack Lewis",
    expiryDate: "06/29",
    cvv: "133",
  });
  return (
    <div className=" flex items-center justify-center gap-20 bg-[#373737] h-screen">
      <CreditCardFront
        creditCardDetails={creditCardDetails}
        setCreditCardDetails={setCreditCardDetails}
      />
      <CreditCardBack
        creditCardDetails={creditCardDetails}
        setCreditCardDetails={setCreditCardDetails}
      />
    </div>
  );
};

export default CreditCard;
