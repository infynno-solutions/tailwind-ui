import React from "react";

const RadioButton = ({ disabled, inline }) => {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className={`${inline && "flex gap-4"}`}>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:border-4 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
            disabled={disabled}
          />
          <label
            className="form-check-label inline-block text-gray-800"
            for="flexRadioDefault1"
          >
            Default radio
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:border-4 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
            checked
          />
          <label
            className="form-check-label inline-block text-gray-800"
            for="flexRadioDefault2"
          >
            Default checked radio
          </label>
        </div>
      </div>
    </div>
  );
};

export default RadioButton;
