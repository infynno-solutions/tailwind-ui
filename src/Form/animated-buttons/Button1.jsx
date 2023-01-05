import React from "react";

export const Button1 = () => {
  return (
    <>
      <div className="flex justify-center">
        <button className="rounded px-5 py-2.5 overflow-hidden group bg-cyan-500 relative hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-cyan-400 transition-all ease-out duration-300">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">BUTTON</span>
        </button>
      </div>
    </>
  );
};

export const Button2 = () => {
  return (
    <div className="flex justify-center">
      <button class="relative px-5 py-2.5 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
        <span class="absolute top-0 left-0 w-0 h-0 transition-all duration-200 border-t-2 border-gray-600 group-hover:w-full ease"></span>
        <span class="absolute bottom-0 right-0 w-0 h-0 transition-all duration-200 border-b-2 border-gray-600 group-hover:w-full ease"></span>
        <span class="absolute top-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
        <span class="absolute bottom-0 left-0 w-full h-0 transition-all duration-300 delay-200 bg-gray-600 group-hover:h-full ease"></span>
        <span class="absolute inset-0 w-full h-full duration-300 delay-300 bg-gray-900 opacity-0 group-hover:opacity-100"></span>
        <span class="relative transition-colors duration-300 delay-200 group-hover:text-white ease">
          BUTTON
        </span>
      </button>
    </div>
  );
};
export const Button3 = () => {
  return (
    <div className="flex justify-center">
      <button class="relative inline-flex items-center justify-center px-5 py-2.5  overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
        <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#4ca1af] rounded-full blur-md ease"></span>
        <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
          <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#ba5370] rounded-full blur-md"></span>
          <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#ba5370] rounded-full blur-md"></span>
        </span>
        <span class="relative text-white">BUTTON </span>
      </button>
    </div>
  );
};

export const Button4 = () => {
  return (
    <div className="flex justify-center">
      <div>
        <button class="relative inline-block px-5 py-2.5 font-medium group">
          <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-teal-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span class="absolute inset-0 w-full h-full bg-white border-2 border-teal-900 group-hover:bg-teal-900"></span>
          <span class="relative text-teal-900 group-hover:text-white">
            BUTTON
          </span>
        </button>
      </div>
    </div>
  );
};

export const Button5 = () => {
  return (
    <div className="flex justify-center">
      <button className="rounded relative inline-flex group items-center justify-center px-5 py-2.5 cursor-pointer border-b-4 border-l-2 active:border-sky-600 active:shadow-none shadow-lg bg-gradient-to-tr from-sky-600 to-sky-500 border-sky-700 text-white">
        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
        <span className="relative">BUTTON</span>
      </button>
    </div>
  );
};
export const Button6 = () => {
  return (
    <div className="flex justify-center">
      <a
        href="#_"
        class="relative inline-flex items-center justify-center p-4 px-5 py-2.5 overflow-hidden font-medium text-[#C4DFE6] transition duration-300 ease-out border-2 border-[#003B46] rounded-[10px] shadow-md group"
      >
        <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#003B46] group-hover:translate-x-0 ease">
          <svg
            class="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span class="absolute flex items-center justify-center w-full h-full text-[#003B46] transition-all duration-300 transform group-hover:translate-x-full ease">
          Button Text
        </span>
        <span class="relative invisible">Button Text</span>
      </a>
    </div>
  );
};

export const Button7 = () => {
  return (
    <div class="flex justify-center">
      <button class="font-semibold text-[#2980B9] h-14 border-2 border-solid bg-transparent rounded-xl px-5 py-2.5 outline-none relative after:absolute after:top-[7px] after:left-[7px] after:bg-[#D4E6F1] after:z-[-1] after:rounded-xl after:w-full after:h-full after:transition-all after:duration-200 hover:after:top-0 hover:after:left-0">
        BUTTON
      </button>
    </div>
  );
};

export const Button8 = () => {
  return (
    <div className="flex justify-center">
      <a
        href="#_"
        class="relative p-0.5 inline-flex items-center justify-center font-bold overflow-hidden group rounded-md"
      >
        <span class="w-full h-full bg-gradient-to-br from-[#ff8a05] via-[#ff5478] to-[#ff00c6] group-hover:from-[#ff00c6] group-hover:via-[#ff5478] group-hover:to-[#ff8a05] absolute"></span>
        <span class="relative px-6 py-3 transition-all ease-out bg-gray-900 rounded-md group-hover:bg-opacity-0 duration-400">
          <span class="relative text-white">BUTTON</span>
        </span>
      </a>
    </div>
  );
};

export const Button9 = () => {
  return (
    <div class="flex justify-center">
      <a
        href="#_"
        class="group relative inline-flex items-center justify-center overflow-hidden rounded-[10px] border-2 border-[#A47786] p-4 px-5 py-2.5 font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out"
      >
        <span class="ease absolute inset-0 flex h-full w-full -translate-y-full items-center justify-center bg-[#A47786] text-white duration-300 group-hover:translate-y-0">
          <svg
            height="25"
            width="25"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            viewBox="0 0 1024 1024"
            class="icon"
          >
            <path
              fill="white"
              d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z"
            ></path>
          </svg>
        </span>
        <span class="ease absolute flex h-full w-full transform items-center justify-center text-[#A47786] transition-all duration-300 group-hover:translate-y-full">
          Button
        </span>
        <span class="invisible relative">Button</span>
      </a>
    </div>
  );
};

export const Button10 = () => {
  return (
    <div className="flex justify-center ">
      <button class="group relative h-12 w-28 rounded-lg border border-[#bc2a8d] bg-white p-[5px] text-base text-[#bc2a8d] duration-500 hover:bg-[#bc2a8d]">
        <p class="absolute top-[11px] left-5 m-0 p-0 duration-500 group-hover:left-[8px] group-hover:text-white">
          Follow US
        </p>
        <span class="absolute top-[14px] right-2 m-0 h-4 group-hover:text-white p-0 duration-500 opacity-0 group-hover:opacity-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
          </svg>
        </span>
      </button>
    </div>
  );
};
