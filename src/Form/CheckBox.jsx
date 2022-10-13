import React from "react";
import classNames from "classnames";

const CheckBox = ({ disabled, checkboxId1, checkboxId2, variant, inline }) => {
  return (
    <>
      <div class="flex justify-center">
        {!inline ? (
          <div>
            <div class="form-check">
              <input
                className={classNames(
                  variant === "alert" && " accent-rose-700",
                  variant === "success" && " accent-green-700",
                  variant === "secondary" && " accent-gray-700",
                  variant === "yellow" && " accent-yellow-700",
                  variant === "pink" && " accent-fuchsia-700",
                  "form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                )}
                type="checkbox"
                value=""
                id={checkboxId1}
                disabled={disabled}
              />
              <label
                className={classNames(
                  "form-check-label inline-block text-gray-800",
                  disabled && "text-gray-400 cursor-not-allowed"
                )}
                for={checkboxId1}
              >
                Default checkbox
              </label>
            </div>
            <div class="form-check">
              <input
                className={classNames(
                  variant === "alert" && " accent-rose-700",
                  variant === "success" && " accent-green-700",
                  variant === "secondary" && " accent-gray-700",
                  variant === "yellow" && " accent-yellow-700",
                  variant === "pink" && " accent-fuchsia-700",

                  "form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 disabled:bg-blue-400 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                )}
                type="checkbox"
                value=""
                id={checkboxId2}
                checked
                onClick="!this.checked=this.checked;"
                disabled={disabled}
              />
              <label
                className={classNames(
                  "form-check-label inline-block text-gray-800",
                  disabled && "text-gray-400 cursor-not-allowed"
                )}
                for={checkboxId2}
              >
                Checked checkbox
              </label>
            </div>
          </div>
        ) : (
          <>
            <div className="flex gap-10">
              <div class="form-check">
                <input
                  class="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault"
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexCheckDefault"
                >
                  1
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault1"
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexCheckDefault1"
                >
                  2
                </label>
              </div>

              <div class="form-check">
                <input
                  class="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault2"
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexCheckDefault2"
                >
                  3
                </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                  type="checkbox"
                  value=""
                  id="flexCheckDefault3"
                  onClick="!this.checked=this.checked;"
                  checked
                />
                <label
                  class="form-check-label inline-block text-gray-800"
                  for="flexCheckDefault3"
                >
                  None
                </label>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
export default CheckBox;
