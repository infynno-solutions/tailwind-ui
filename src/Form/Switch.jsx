import React from "react";

const Switch = () => {
  return (
    <div class="flex justify-center items-center h-screen">
      <div class="form-check form-switch">
        <label
          for="red-toggle"
          class="inline-flex relative items-center mr-5 cursor-pointer"
        >
          <input
            type="checkbox"
            value=""
            id="red-toggle"
            class="sr-only peer"
          />
          <div class="w-11 h-6 bg-gray-400 rounded-full  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-blue-600"></div>
          <span class="ml-3 text-sm font-medium text-gray-900">Switch</span>
        </label>
      </div>
    </div>
  );
};

export default Switch;
