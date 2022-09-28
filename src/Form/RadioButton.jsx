import React from "react";

const RadioButton = ({
  disabled,
  inline,
  checked,
  labelvalue1,
  labelvalue2,
  labelvalue3,
}) => {
  return (
    <div className="flex justify-center items-center py-5">
      <div className={`${inline && "flex gap-4"}`}>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:border-4 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name={labelvalue3}
            id={labelvalue1}
            disabled={disabled}
          />
          <label
            className={`form-check-label inline-block  ${
              disabled ? "text-gray-400" : "text-gray-800"
            }`}
            for={labelvalue2}
          >
            Default radio
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:border-4 checked:border-blue-600 disabled:border-blue-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name={labelvalue3}
            id={labelvalue1}
            disabled={disabled}
            checked
          />
          <label
            className={`form-check-label inline-block  ${
              disabled ? "text-gray-400" : "text-gray-800"
            }`}
            for={labelvalue2}
          >
            Default checked radio
          </label>
        </div>
      </div>
    </div>
  );
};

export default RadioButton;
