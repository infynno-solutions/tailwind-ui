import React from "react";

const CreditCardBack = (props) => {
  const { creditCardDetails, error } = props || {};
  return (
    <div className="flex flex-col">
      {error.cvv && (
        <span className="text-xs text-red-600 h-9">
          Please enter valid cvv number
        </span>
      )}
      <div className="flex flex-col justify-between bg-white h-[186px] w-[277px] rounded-[10px] pt-[18px] pb-2 italic text-[4px] shadow-xl transition duration-400 hover:scale-110 sample2">
        <div>
          <div className="bg-black h-[34px] w-full" />
          <div className="flex justify-between">
            <div className="flex flex-col w-[190px] mt-2">
              <div className="flex justify-between ml-1">
                <span>Authorized Signature</span>
                <span>Not valid unless signed</span>
              </div>
              <div className="bg-[#E5E5E5] h-[22px] w-[190px] text-right">
                <span className="text-[10px]">
                  <input
                    className="bg-transparent focus:outline-none focus:border border-black rounded-md text-right italic w-7 pl-1"
                    type="text"
                    maxLength="3"
                    value={creditCardDetails?.cvv}
                    onChange={(e) => {
                      const { value } = e?.target;
                      value.length < 3
                        ? props.setError({ ...error, cvv: true })
                        : props.setError({ ...error, cvv: false });
                      props.setCreditCardDetails({
                        ...creditCardDetails,
                        cvv: e?.target?.value,
                      });
                    }}
                  />
                </span>
              </div>
              <div className="text-left ml-1 mt-2">
                <p>
                  Lorem Ipsum Indoctum accusamus comprehensam Nullam id dolor id
                  nibh ultricies vehicula ut id elit. Donec sed odio dui. Fusce
                  dapibus, tellus ac cursus etiam porta sem malesuada magna
                  mollis euismod. commodo, Faccibus mollis interdum. Morbi leo
                  risus, porta ac, vestibulum at eros.Feugiat accumsan
                  Suspendisse eget Duis faucibus tempus pede pede augue pede.
                  Dapibus mollis dignissim suscipit porta justo nisl amet Nunc
                  quis semper. Indoctum accusamus comprehensam .
                </p>
              </div>
            </div>
            <div className="vertical-text w-3"> CIA 000012 CSM-1234--4321</div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <span>
            +234089876543, +234803456789, +234089876543, +234089876543{" "}
          </span>
          <span> www.bankofruqmania.com</span>
        </div>
      </div>
    </div>
  );
};

export default CreditCardBack;
