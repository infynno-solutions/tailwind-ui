import React from "react";

const DatePicker = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="datepicker relative form-floating mb-3 xl:w-96 text-left ">
        <label for="floatingInput" className="text-gray-700">
          Select a date
        </label>
        <input
          type="date"
          className="mt-1 form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none "
          placeholder="Select a date"
        />
      </div>
    </div>
  );
};

export default DatePicker;
