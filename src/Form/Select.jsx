import classNames from "classnames";
import React from "react";

const Select = ({ lg, sm, disabled }) => {
  return (
    <div class="flex justify-center items-center h-screen">
      <div class="mb-3 xl:w-96">
        <select
          className={classNames(
            "form-select form-control appearance-none block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none",
            lg && "text-lg h-12",
            sm && "text-sm h-8"
          )}
          aria-label="Default select example"
          disabled={disabled}
        >
          <option selected>Open this select menu</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  );
};

export default Select;
