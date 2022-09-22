import classNames from "classnames";
import React from "react";

const Input = ({ sm, lg, disabled, readOnly, type }) => {
  return (
    <div class="flex justify-center text-left items-center">
      <div class="mb-3 xl:w-96">
        <label
          for="formInput1"
          className={classNames(
            "form-label inline-block mb-2 text-gray-700",
            lg && "text-lg",
            sm && "text-sm"
          )}
        >
          Label
        </label>
        <input
          disabled={disabled || readOnly}
          type={type ?? "text"}
          className={classNames(
            "form-control block w-full first-letter:px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none px-2",
            lg && "text-lg h-12",
            sm && "text-sm h-8",
            disabled && "bg-gray-100 opacity-80",
            readOnly && "bg-slate-100"
          )}
          id="formInput1"
          placeholder="Basic Input"
        />
      </div>
    </div>
  );
};

export default Input;
