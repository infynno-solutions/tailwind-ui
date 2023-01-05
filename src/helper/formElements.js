/* eslint-disable import/no-webpack-loader-syntax */

import {
  Button1,
  Button10,
  Button2,
  Button3,
  Button4,
  Button5,
  Button6,
  Button7,
  Button8,
  Button9,
} from "../Form/animated-buttons/Button1";
import Button from "../Form/Button";
import CheckBox from "../Form/CheckBox";
import Input from "../Form/Input";
import RadioButton from "../Form/RadioButton";

export const buttonBasic = <Button />;

export const formElementsData = {
  buttons: {
    data: [
      {
        title: "Basic Examples",
        description:
          " Use these default button styles with multiple colors to indicate an  action or link within your website.",
        src: <Button />,
        code: `
        <div className="flex items-center justify-center">
            <button className="bg-blue-600 h-9 rounded flex justify-center items-center px-6
                text-white font-medium text-xs leading-tight uppercase shadow-md  
                 hover:shadow-lg  focus:shadow-lg focus:outline-none focus:ring-0  
                 active:shadow-lg transition duration-150 ease-in-out hover:bg-blue-800"> 
              Button
            </button>
        </div>

        `,
      },
      {
        title: "Colors",
        description:
          "Choose from several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.",
        src: (
          <div className="flex gap-3 justify-center">
            <Button />
            <Button variant="success" />
            <Button variant="secondary" />
            <Button variant="alert" />
            <Button variant="warning" />
            <Button variant="dark" />
          </div>
        ),
        code: `
      <div class="flex justify-center gap-3">
      // blue fill button
        <div class="flex items-center justify-center">
          <button class="flex h-9 items-center justify-center rounded bg-blue-600 hover:bg-blue-700 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
        //green fill button
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded bg-green-600 hover:bg-green-700 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
          //gray fill button  
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded bg-gray-600 hover:bg-gray-700 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
           //red fill button   
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded bg-red-600 hover:bg-red-700 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
        //yellow fill button
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded bg-yellow-600 hover:bg-yellow-700 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
        //black fill button
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center hover:bg-white hover:text-black hover:border-2 hover:border-[black] rounded bg-black px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
      </div> `,
      },
      {
        title: "Outline",
        description:
          "Use the following button styles to show the colors only for the border of the element.",
        src: (
          <div className="flex gap-3 justify-center">
            <Button variant="outline-primary" />
            <Button variant="outline-success" />
            <Button variant="outline-secondary" />
            <Button variant="outline-alert" />
            <Button variant="outline-warning" />
            <Button variant="outline-dark" />
          </div>
        ),
        code: `
        <div class="flex justify-center gap-3">
        //blue outline button
        <div class="flex items-center justify-center">
          <button class="flex h-9 items-center justify-center rounded border-2 border-blue-600 bg-white px-6 text-xs font-medium uppercase leading-tight text-blue-600 hover:bg-gray-100 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
        //green outline button
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded border-2 border-green-600 bg-white px-6 text-xs font-medium uppercase leading-tight hover:bg-gray-100 text-green-600 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
        //gray outline button
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded border-2 border-gray-600 bg-white px-6 text-xs font-medium uppercase leading-tight hover:bg-gray-100 text-gray-600 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
        //red outline button
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded border-2 border-red-600 bg-white px-6 text-xs font-medium uppercase leading-tight hover:bg-gray-100 text-red-600 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
        //yellow outline button
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded border-2 border-yellow-600 bg-white px-6 text-xs font-medium uppercase leading-tight v text-yellow-600 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
        //black outline button
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded border-2 border-black bg-white px-6 text-xs font-medium uppercase leading-tight hover:bg-gray-100 text-black shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
      </div>
        
        `,
      },
      {
        title: "Rounded",
        description:
          "Use elements rounded corners with the .rounded-full property. ",
        src: (
          <div className="flex gap-3 justify-center">
            <Button variant="primary" rounded />
            <Button variant="success" rounded />
            <Button variant="secondary" rounded />
            <Button variant="alert" rounded />
            <Button variant="warning" rounded />
            <Button variant="dark" rounded />
          </div>
        ),
        code: `
        <div class="flex justify-center gap-3">
        //blue rounded fill button
          <div class="flex items-center justify-center">
             <button class="flex h-9 items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
           </div>
           //green rounded fill button
           <div class="flex items-center justify-center">
             <button class="success && flex h-9 items-center justify-center rounded-full border-2 bg-green-600 hover:bg-green-700 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
           </div>
           //gray rounded fill button
           <div class="flex items-center justify-center">
             <button class="success && flex h-9 items-center justify-center rounded-full border-2 bg-gray-600 hover:bg-gray-700 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
           </div>
           //red rounded fill button
           <div class="flex items-center justify-center">
             <button class="success && flex h-9 items-center justify-center rounded-full border-2 bg-red-600 hover:bg-red-700 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
           </div>
           //yellow rounded fill button
           <div class="flex items-center justify-center">
             <button class="success && flex h-9 items-center justify-center rounded-full border-2 bg-yellow-600 hover:bg-yellow-700 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
           </div>
           //black rounded fill button
           <div class="flex items-center justify-center">
             <button class="success && flex h-9 items-center justify-center rounded-full border-2 bg-black px-6 text-xs hover:bg-white hover:text-black hover:border-2 hover:border-[black] font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
           </div>
          </div>

        
        `,
      },
      {
        title: "Rounded",
        description:
          "Use elements rounded corners with the .rounded-full property. ",
        src: (
          <div className="flex gap-3 justify-center">
            <Button variant="outline-primary" rounded />
            <Button variant="outline-success" rounded />
            <Button variant="outline-secondary" rounded />
            <Button variant="outline-alert" rounded />
            <Button variant="outline-warning" rounded />
            <Button variant="outline-dark" rounded />
          </div>
        ),
        code: `
        <div class="flex justify-center gap-3">
        //blue rounded outline button
        <div class="flex items-center justify-center">
          <button class="flex h-9 items-center justify-center rounded-full border-2 border-blue-600 bg-white px-6 text-xs font-medium uppercase leading-tight text-blue-600 hover:bg-gray-100 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
        //green rounded outline button
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded-full border-2 border-green-600 bg-white px-6 text-xs font-medium uppercase hover:bg-gray-100 leading-tight text-green-600 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
        //gray rounded outline button
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded-full border-2 border-gray-600 bg-white px-6 text-xs font-medium uppercase leading-tight text-gray-600 hover:bg-gray-100 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
        //red rounded outline button
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded-full border-2 border-red-600 bg-white px-6 text-xs font-medium uppercase leading-tight text-red-600 hover:bg-gray-100 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
        //yellow rounded outline button
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded-full border-2 border-yellow-600 bg-white px-6 text-xs font-medium uppercase leading-tight hover:bg-gray-100 text-yellow-600 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
        //black rounded outline button
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded-full border-2 border-black bg-white px-6 text-xs font-medium uppercase leading-tight text-black shadow-md hover:bg-gray-100 transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
      </div>
        `,
      },
      {
        title: "Sizes",
        description:
          "Use these examples if you want to use smaller or larger buttons. ",
        src: (
          <div className="flex gap-3 justify-center h-max">
            <Button sm />
            <Button />
            <Button lg />
          </div>
        ),
        code: `
        //small button
        <button class="flex h-7 items-center justify-center rounded bg-blue-600 hover:bg-blue-800 px-5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        //regular button
        <button class="flex h-9 items-center justify-center rounded bg-blue-600 hover:bg-blue-800 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        //big button
        <button class="flex h-10 items-center justify-center rounded bg-blue-600 hover:bg-blue-800 px-8 text-lg font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        `,
      },
      {
        title: "Disabled",
        description:
          "Use the following styles to indicate a disabled button. This can be often used inside form elements to disable the submit button before all the form elements have been completed and validated.",
        src: (
          <div className="flex gap-3 justify-center h-max">
            <Button disabled />
            <Button variant="secondary" disabled />
          </div>
        ),
        code: `
        //disable blue
        <button class="flex h-9 cursor-not-allowed items-center justify-center rounded bg-blue-600 hover:bg-blue-800 px-6 text-xs font-medium uppercase leading-tight text-white opacity-60 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        //disable gray
        <button class="flex h-9 cursor-not-allowed items-center justify-center rounded bg-gray-600 hover:bg-gray-800 px-6 text-xs font-medium uppercase leading-tight text-white opacity-60 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>

        `,
      },
      {
        title: "Block buttons",
        description:
          "Use full width button to adjust it to the column width. Block buttons is more often used when creating layout for mobile devices.       ",
        src: (
          <div className="flex flex-col gap-3 justify-center h-max">
            <Button block />
            <Button variant="outline-primary" block />
          </div>
        ),
        code: `
        //full width fill button
        <button class="mx-5 h-9 w-full rounded bg-blue-600 text-xs font-medium uppercase text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-800 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        //full width outline button
        <button class="mx-5 h-9 w-full rounded border-2 border-blue-600 bg-white px-6 text-xs font-medium uppercase leading-tight text-blue-600 shadow-md transition duration-150 ease-in-out hover:bg-gray-100 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        `,
      },

      {
        title: "Buttons with hover effects",
        description: "When user want effect on hover use below button",
        src: (
          <div className="flex gap-5 justify-center h-max">
            <div>
              <button class="relative inline-flex items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                  <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                  <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                </span>
                <span class="relative text-white">BUTTON </span>
              </button>
            </div>
            <div>
              <button class="relative inline-block px-4 py-2 font-medium group">
                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-teal-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span class="absolute inset-0 w-full h-full bg-white border-2 border-teal-900 group-hover:bg-teal-900"></span>
                <span class="relative text-teal-900 group-hover:text-white">
                  BUTTON
                </span>
              </button>
            </div>
            <div>
              <button className="rounded px-5 py-2.5 overflow-hidden group bg-cyan-500 relative hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-cyan-400 transition-all ease-out duration-300">
                <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                <span className="relative">BUTTON</span>
              </button>
            </div>
            <div>
              <button class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
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
            <div>
              <button className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-pink-600 active:shadow-none shadow-lg bg-gradient-to-tr from-pink-600 to-pink-500 border-pink-700 text-white">
                <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                <span className="relative">BUTTON</span>
              </button>
            </div>
          </div>
        ),
        code: `
        //Button with pink and purple color
        <div>
        <button class="relative inline-flex items-center justify-center  p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
          <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
          <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
            <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
            <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
          </span>
          <span class="relative text-white">BUTTON </span>
        </button>
      </div>
      //button with shadow 
      <div>
        <button class="relative inline-block px-4 py-2 font-medium group">
          <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-teal-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
          <span class="absolute inset-0 w-full h-full bg-white border-2 border-teal-900 group-hover:bg-teal-900"></span>
          <span class="relative text-teal-900 group-hover:text-white">
            BUTTON
          </span>
        </button>
      </div>
      //sky button with transpertant slide
      <div>
        <button className="rounded px-5 py-2.5 overflow-hidden group bg-cyan-500 relative hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-cyan-400 transition-all ease-out duration-300">
          <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span className="relative">BUTTON</span>
        </button>
      </div>
      //button with black transition 
      <div>
        <button class="relative px-5 py-3 overflow-hidden font-medium text-gray-600 bg-gray-100 border border-gray-100 rounded-lg shadow-inner group">
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
      //button with pink color
      <div>
        <button className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-pink-600 active:shadow-none shadow-lg bg-gradient-to-tr from-pink-600 to-pink-500 border-pink-700 text-white">
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          <span className="relative">BUTTON</span>
        </button>
      </div>
        `,
      },
    ],
    intro: {
      title: " Button Components For Tailwind",
      description:
        " Responsive buttons built with Tailwind CSS. Buttons provide predefined styles for multiple button types: outline, rounded, social, floating,fixed, and more.",
    },
  },

  animatedButtons: {
    data: [
      {
        title: "Basic Examples",
        description:
          " Use these default button styles with multiple colors to indicate an  action or link within your website.",
        src: <Button3 />,
        code: `<div className="flex justify-center">
        <button class="relative inline-flex items-center justify-center px-5 py-2.5  overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
          <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-[#4ca1af] rounded-full blur-md ease"></span>
          <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
            <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-[#ba5370] rounded-full blur-md"></span>
            <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-[#ba5370] rounded-full blur-md"></span>
          </span>
          <span class="relative text-white">BUTTON </span>
        </button>
      </div>`,
      },
      {
        src: <Button4 />,
        code: `<div>
  <button class="relative inline-block px-4 py-2 font-medium group">
    <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-teal-900 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
    <span class="absolute inset-0 w-full h-full bg-white border-2 border-teal-900 group-hover:bg-teal-900"></span>
    <span class="relative text-teal-900 group-hover:text-white">
            BUTTON
     </span>
    </button>
   </div>  
        `,
      },
      {
        src: <Button1 />,
        code: `<div>
        <button class="rounded px-5 py-2.5 overflow-hidden group bg-cyan-500 relative hover:bg-gradient-to-r hover:from-cyan-500 hover:to-cyan-400 text-white hover:ring-2 hover:ring-offset-2 hover:ring-cyan-400 transition-all ease-out duration-300">
          <span class="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
          <span class="relative">BUTTON</span>
        </button>
  </div>
        `,
      },
      {
        src: <Button2 />,
        code: `<div className="flex justify-center">
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
        `,
      },
      {
        src: <Button5 />,
        code: `
        <div class="flex justify-center">
        <button class="rounded relative inline-flex group items-center justify-center px-5 py-2.5 cursor-pointer border-b-4 border-l-2 active:border-sky-600 active:shadow-none shadow-lg bg-gradient-to-tr from-sky-600 to-sky-500 border-sky-700 text-white">
          <span class="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          <span class="relative">BUTTON</span>
        </button>
      </div>
        `,
      },

      {
        src: <Button7 />,
        code: ` <div class="flex justify-center">
        <button class="font-semibold text-[#2980B9] h-14 border-2 border-solid bg-transparent rounded-xl px-5 py-2.5 outline-none relative after:absolute after:top-[7px] after:left-[7px] after:bg-[#D4E6F1] after:z-[-1] after:rounded-xl after:w-full after:h-full after:transition-all after:duration-200 hover:after:top-0 hover:after:left-0">
          BUTTON
        </button>
      </div>`,
      },
      {
        src: <Button8 />,
        code: `<div class="flex justify-center">
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
        `,
      },
      {
        src: <Button6 />,
        code: `<div class="flex justify-center">
    <a href="#_" class="group relative inline-flex items-center justify-center overflow-hidden rounded-[10px] border-2 border-[#003B46] p-4 px-5 py-2.5 font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out">
     <span class="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-[#003B46] text-white duration-300 group-hover:translate-x-0">
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
       <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
       </svg>
      </span>
      <span class="ease absolute flex h-full w-full transform items-center justify-center text-[#003B46] transition-all duration-300 group-hover:translate-x-full"> Button Text </span>
      <span class="invisible relative">Button Text</span>
    </a>
  </div>`,
      },
      {
        src: <Button9 />,
        code: `<div class="flex justify-center">
  <a href="#_" class="group relative inline-flex items-center justify-center overflow-hidden rounded-[10px] border-2 border-[#A47786] p-4 px-5 py-2.5 font-medium text-[#C4DFE6] shadow-md transition duration-300 ease-out">
    <span class="ease absolute inset-0 flex h-full w-full -translate-y-full items-center justify-center bg-[#A47786] text-white duration-300 group-hover:translate-y-0">
      <svg height="25" width="25" xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 1024 1024" class="icon">
        <path fill="white" d="M950.930286 512q0 143.433143-83.748571 257.974857t-216.283429 158.573714q-15.433143 2.852571-22.601143-4.022857t-7.168-17.115429l0-120.539429q0-55.442286-29.696-81.115429 32.548571-3.437714 58.587429-10.313143t53.686857-22.308571 46.299429-38.034286 30.281143-59.977143 11.702857-86.016q0-69.12-45.129143-117.686857 21.138286-52.004571-4.534857-116.589714-16.018286-5.12-46.299429 6.290286t-52.589714 25.161143l-21.723429 13.677714q-53.174857-14.848-109.714286-14.848t-109.714286 14.848q-9.142857-6.290286-24.283429-15.433143t-47.689143-22.016-49.152-7.68q-25.161143 64.585143-4.022857 116.589714-45.129143 48.566857-45.129143 117.686857 0 48.566857 11.702857 85.723429t29.988571 59.977143 46.006857 38.253714 53.686857 22.308571 58.587429 10.313143q-22.820571 20.553143-28.013714 58.88-11.995429 5.705143-25.746286 8.557714t-32.548571 2.852571-37.449143-12.288-31.744-35.693714q-10.825143-18.285714-27.721143-29.696t-28.306286-13.677714l-11.410286-1.682286q-11.995429 0-16.603429 2.56t-2.852571 6.582857 5.12 7.972571 7.460571 6.875429l4.022857 2.852571q12.580571 5.705143 24.868571 21.723429t17.993143 29.110857l5.705143 13.165714q7.460571 21.723429 25.161143 35.108571t38.253714 17.115429 39.716571 4.022857 31.744-1.974857l13.165714-2.267429q0 21.723429 0.292571 50.834286t0.292571 30.866286q0 10.313143-7.460571 17.115429t-22.820571 4.022857q-132.534857-44.032-216.283429-158.573714t-83.748571-257.974857q0-119.442286 58.88-220.306286t159.744-159.744 220.306286-58.88 220.306286 58.88 159.744 159.744 58.88 220.306286z"></path>
      </svg>
    </span>
    <span class="ease absolute flex h-full w-full transform items-center justify-center text-[#A47786] transition-all duration-300 group-hover:translate-y-full"> Button </span>
    <span class="invisible relative">Button</span>
  </a>
</div>

        `,
      },
      {
        src: <Button10 />,
        code: `<div class="flex justify-center">
  <button class="group relative h-12 w-28 rounded-lg border border-[#bc2a8d] bg-white p-[5px] text-base text-[#bc2a8d] duration-500 hover:bg-[#bc2a8d]">
    <p class="absolute top-[11px] left-5 m-0 p-0 duration-500 group-hover:left-[8px] group-hover:text-white">Follow US</p>
    <span class="absolute top-[14px] right-2 m-0 h-4 p-0 opacity-0 duration-500 group-hover:text-white group-hover:opacity-100">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>
      </svg>
    </span>
  </button>
</div>

        `,
      },
    ],
    intro: {
      title: "Animated button",
      description: "Button with different different hover effects",
    },
  },

  inputs: {
    data: [
      {
        title: "Basic Examples",
        description:
          "Form components help you to define the type of widget that is required to enter data and automatically adds a property to the resource endpoint to interact with the form component.",
        src: <Input />,
        code: `<div class="flex items-center justify-center text-left">
            <div class="mb-3 xl:w-96">
              <label for="formInput1" class="form-label mb-2 inline-block text-gray-700"> Label </label>
                <input class="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding py-1.5 px-2 text-base font-normal text-gray-700 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" placeholder="Basic Input" />
            </div>
        </div>
        `,
      },
      {
        title: "Sizing",
        description:
          "Use the following utility classes to create three different sizing options (large, base, and small) for form input elements.",
        src: (
          <div className="flex flex-col gap-3 justify-center">
            <Input sm />
            <Input />
            <Input lg />
          </div>
        ),
        code: ` <div class="flex items-center justify-center text-left">
        //small input
        <div class="mb-3 xl:w-96">
          <label for="formInput1" class="form-label mb-2 inline-block text-sm text-gray-700"> Label </label>
          <input class="form-control m-0 block h-8 w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding py-1.5 px-2 text-sm font-normal text-gray-700 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" placeholder="Basic Input" />
        </div>
      </div>
        //regular input     
      <div class="flex items-center justify-center text-left">
        <div class="mb-3 xl:w-96">
          <label for="formInput1" class="form-label mb-2 inline-block text-gray-700"> Label </label>
          <input class="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding py-1.5 px-2 text-base font-normal text-gray-700 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" placeholder="Basic Input" />
        </div>
      </div>
          //big input    
      <div class="flex items-center justify-center text-left">
        <div class="">
          <label for="formInput1" class="form-label h mb-2 inline-block text-lg text-gray-700"> Label </label>
          <input class="form-control m-0 block h-12 w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding py-1.5 px-2 text-lg font-normal text-gray-700 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" placeholder="Basic Input" />
        </div>
      </div>`,
      },
      {
        title: "Disabled",
        description:
          "Add the disabled boolean attribute on an input to give it a grayed out appearance and remove pointer events and make it unusable and un-clickable.",
        src: (
          <div className="flex gap-3 justify-center">
            <Input disabled />
          </div>
        ),
        code: `<div class="flex items-center justify-center text-left">
        <div class="mb-3 xl:w-96">
          <label for="formInput1" class="form-label mb-2 inline-block text-gray-700"> Label </label>
          <input class="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-gray-100 bg-clip-padding py-1.5 px-2 text-base font-normal text-gray-700 opacity-80 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" placeholder="Basic Input" disabled />
        </div>
      </div>
      `,
      },
      {
        title: "Read only",
        description:
          "Use the following example to make the input readonly, so that you cannot edit the input.",
        src: (
          <div className="flex gap-3 justify-center">
            <Input readOnly />
          </div>
        ),
        code: `<div class="flex items-center justify-center text-left">
        <div class="mb-3 xl:w-96">
          <label for="formInput1" class="form-label mb-2 inline-block text-gray-700"> Label </label>
          <input class="form-control bg-slate-100 m-0 block w-full rounded border border-solid border-gray-300 bg-clip-padding py-1.5 px-2 text-base font-normal text-gray-700 opacity-80 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" placeholder="Basic Input" disabled />
        </div>
      </div>
      `,
      },
      {
        title: "Text input",
        description:
          "Input types let you specified what data users should provide and help you validate it.",
        src: (
          <div className="flex gap-3 justify-center">
            <Input />
          </div>
        ),
        code: `<div class="flex items-center justify-center text-left">
        <div class="mb-3 xl:w-96">
          <label for="formInput1" class="form-label mb-2 inline-block text-gray-700"> Label </label>
            <input class="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding py-1.5 px-2 text-base font-normal text-gray-700 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" placeholder="Basic Input" />
        </div>
    </div>`,
      },
      {
        title: "Email",
        description:
          "The input type='email' defines a field for an e-mail address. The input value is automatically validated to ensure it is a properly formatted e-mail address.",
        src: (
          <div className="flex gap-3 justify-center h-max">
            <Input type="email" />
          </div>
        ),
        code: `<div class="flex items-center justify-center text-left">
        <div class="mb-3 xl:w-96">
          <label for="formInput1" class="form-label mb-2 inline-block text-gray-700"> Label </label>
            <input class="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding py-1.5 px-2 text-base font-normal text-gray-700 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" placeholder="Basic Input" type="email" />
        </div>
    </div>
        `,
      },
      {
        title: "Password",
        description:
          "The input type='password' defines a password field thus hiding characters as sensitive information.",
        src: (
          <div className="flex gap-3 justify-center h-max">
            <Input type="password" />
          </div>
        ),
        code: `<div class="flex items-center justify-center text-left">
        <div class="mb-3 xl:w-96">
          <label for="formInput1" class="form-label mb-2 inline-block text-gray-700"> Label </label>
          <input type="password" class="form-control bg-slate-100 m-0 block w-full rounded border border-solid border-gray-300 bg-clip-padding py-1.5 px-2 text-base font-normal text-gray-700 opacity-80 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" placeholder="Basic Input" />
        </div>
      </div>
      
        `,
      },
      {
        title: "Numbers",
        description: "The input type='password' defines entering the number",
        src: (
          <div className="flex gap-3 justify-center h-max">
            <Input type="number" />
          </div>
        ),
        code: `<div class="flex items-center justify-center text-left">
        <div class="mb-3 xl:w-96">
          <label for="formInput1" class="form-label mb-2 inline-block text-gray-700"> Label </label>
          <input class="form-control bg-slate-100 m-0 block w-full rounded border border-solid border-gray-300 bg-clip-padding py-1.5 px-2 text-base font-normal text-gray-700 opacity-80 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" placeholder="Basic Input" type="number" />
        </div>
      </div>
      
      //use css if you want to remove arrow from right
      //   input[type="number"]::-webkit-inner-spin-button,
      //   input[type="number"]::-webkit-outer-spin-button {
      //  -webkit-appearance: none;
      // -moz-appearance: none;
      //  appearance: none;
      //  margin: 0;
}

        `,
      },
    ],
    intro: {
      title: "Tailwind Inputs Component.",
      description:
        "Responsive inputs built with Tailwind CSS. Get data from the users in password inputs, text areas, email fields, and many more types of data. Free download",
    },
  },

  radioButtons: {
    data: [
      {
        title: "Basic Examples",
        description:
          "Radio buttons are most commonly used when you have a group of mutually exclusive choices and only one choice from that group is allowed.",
        src: (
          <RadioButton
            labelvalue1="mydata1"
            labelvalue2="mylable1"
            labelvalue3="myname1"
          />
        ),
        code: `<div class="align-center flex justify-center py-5">
        <div>
          <div class="form-check">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-blue-600 focus:outline-none" type="radio" name="radioname" id="radioidone" />
            <label class="form-check-label inline-block text-gray-800" for="radioidone"> Default radio </label>
          </div>
          <div class="form-check">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-blue-600 focus:outline-none disabled:border-blue-400" type="radio" name="radioname" id="radioidtwo" />
            <label class="form-check-label inline-block text-gray-800" for="radioidtwo"> Default checked radio </label>
          </div>
        </div>
      </div>`,
      },
      {
        title: "Disabled",
        description:
          "This Radio buttons are most commonly used to indicate disabled.",
        src: (
          <RadioButton
            disabled
            labelvalue1="mydata2"
            labelvalue2="mylable2"
            labelvalue3="myname2"
          />
        ),
        code: `<div class="align-center flex justify-center py-5">
        <div>
          <div class="form-check">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-blue-600 focus:outline-none" type="radio" name="radioname" id="radioidone" disabled />
            <label class="form-check-label inline-block text-gray-400 cursor-not-allowed" for="radioidone"> Default radio </label>
          </div>
          <div class="form-check">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-blue-600 focus:outline-none disabled:border-blue-400" type="radio" name="radioname" id="radioidtwo" checked disabled />
            <label class="form-check-label inline-block text-gray-400 cursor-not-allowed" for="radioidtwo"> Default checked radio </label>
          </div>
        </div>
      </div>`,
      },
      {
        title: "Inline ",
        description:
          "Group radios in the same horizontal row by adding .form-check-inline to any .form-check",
        src: (
          <RadioButton
            inline
            labelvalue1="mydata3"
            labelvalue2="mylable3"
            labelvalue3="myname3"
          />
        ),
        code: `<div class="align-center flex justify-center py-5">
        <div class="flex gap-4">
          <div class="form-check">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-blue-600 focus:outline-none" type="radio" name="radioname" id="radioidone" />
            <label class="form-check-label inline-block text-gray-800" for="radioidone"> Default radio </label>
          </div>
          <div class="form-check">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-blue-600 focus:outline-none disabled:border-blue-400" type="radio" name="radioname" id="radioidtwo"  />
            <label class="form-check-label inline-block text-gray-800" for="radioidtwo"> Default checked radio </label>
          </div>
        </div>
      </div>`,
      },
      {
        title: "Default Checked",
        description:
          "Make any radio button default checked by passing checked as Props",
        src: (
          <RadioButton
            checked
            labelvalue1="mydata4"
            labelvalue2="mylable4"
            labelvalue3="myname4"
          />
        ),
        code: `<div class="align-center flex justify-center py-5">
        <div>
          <div class="form-check">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-blue-600 focus:outline-none" type="radio" name="radioname" id="radioidone" />
            <label class="form-check-label inline-block text-gray-800" for="radioidone"> Default radio </label>
          </div>
          <div class="form-check">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-blue-600 focus:outline-none disabled:border-blue-400" type="radio" name="radioname" id="radioidtwo" checked />
            <label class="form-check-label inline-block text-gray-800" for="radioidtwo"> Default checked radio </label>
          </div>
        </div>
      </div>      
      `,
      },
    ],
    intro: {
      title: " Tailwind Radio Component  ",
      description:
        "Responsive radios built with Tailwind CSS. Limits the user to one selection, from a list of preset options. Free for commercial use, no registration required.",
    },
  },

  checkbox: {
    data: [
      {
        title: "Basic Examples",
        description:
          "Checkboxes are most often used for selecting multiple values from several options, or present a list containing sub-selections. They are most often found in surveys and forms.",
        src: <CheckBox checkboxId1="checkbox1" checkboxId2="checkbox2" />,
        code: `<div class="flex justify-center">
        <div>
          <div class="form-check">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault"> Default checkbox </label>
          </div>
          <div class="form-check">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none" type="checkbox" value="" id="flexCheckChecked" checked onClick="!this.checked=this.checked;" />
            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked"> Checked checkbox </label>
          </div>
        </div>
      </div>
      `,
      },
      {
        title: "Disabled",
        description:
          "Use the disabled attribute so the associated label will be automatically styled to match with a lighter color to help indicate the input state.",
        src: (
          <CheckBox disabled checkboxId1="checkbox3" checkboxId2="checkbox4" />
        ),
        code: `<div class="flex justify-center">
        <div>
          <div class="form-check">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none" type="checkbox" value="" id="checkbox1" disabled />
            <label class="form-check-label inline-block cursor-not-allowed text-gray-400" for="checkbox1"> Default checkbox </label>
          </div>
          <div class="form-check">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none disabled:bg-blue-400" type="checkbox" value="" id="checkbox2" checked onClick="!this.checked=this.checked;" disabled />
            <label class="form-check-label inline-block cursor-not-allowed text-gray-400" for="checkbox2"> Checked checkbox </label>
          </div>
        </div>
      </div>
      `,
      },

      {
        title: "Colorfull Checkbox",
        description:
          "Use the colorfull checkbox when you want checkbox color custome and appropriate to your work , must remember you change color by passing assent-color-[#..]",
        src: (
          <div className="flex justify-center gap-10">
            <CheckBox
              checkboxId1="checkbox5"
              checkboxId2="checkbox6"
              variant="alert"
            />
            <CheckBox
              checkboxId1="checkbox7"
              checkboxId2="checkbox8"
              variant="success"
            />
            <CheckBox
              checkboxId1="checkbox9"
              checkboxId2="checkbox10"
              variant="secondary"
            />
            <CheckBox
              checkboxId1="checkbox11"
              checkboxId2="checkbox12"
              variant="yellow"
            />
            <CheckBox
              checkboxId1="checkbox13"
              checkboxId2="checkbox14"
              variant="pink"
            />
          </div>
        ),

        code: ` <div class="flex justify-center gap-10">
        <div>
          <div class="form-check">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:accent-rose-600 focus:outline-none" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault"> Default checkbox </label>
          </div>
          <div class="form-check">
            <input class="form-check-input checked:bg--600 float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:accent-rose-600 focus:outline-none" type="checkbox" value="" id="flexCheckChecked" checked onClick="!this.checked=this.checked;" />
            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked"> Checked checkbox </label>
          </div>
        </div>
      
        <div>
          <div class="form-check">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:accent-green-600 focus:outline-none" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault"> Default checkbox </label>
          </div>
          <div class="form-check">
            <input class="form-check-input checked:bg--600 float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:accent-green-600 focus:outline-none" type="checkbox" value="" id="flexCheckChecked" checked onClick="!this.checked=this.checked;" />
            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked"> Checked checkbox </label>
          </div>
        </div>
      
        <div>
          <div class="form-check">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:accent-gray-600 focus:outline-none" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault"> Default checkbox </label>
          </div>
          <div class="form-check">
            <input class="form-check-input checked:bg--600 float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:accent-gray-600 focus:outline-none" type="checkbox" value="" id="flexCheckChecked" checked onClick="!this.checked=this.checked;" />
            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked"> Checked checkbox </label>
          </div>
        </div>
      
        <div>
          <div class="form-check">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:accent-yellow-600 focus:outline-none" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault"> Default checkbox </label>
          </div>
          <div class="form-check">
            <input class="form-check-input checked:bg--600 float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:accent-yellow-600 focus:outline-none" type="checkbox" value="" id="flexCheckChecked" checked onClick="!this.checked=this.checked;" />
            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked"> Checked checkbox </label>
          </div>
        </div>
        <div>
          <div class="form-check">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:accent-fuchsia-600 focus:outline-none" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault"> Default checkbox </label>
          </div>
          <div class="form-check">
            <input class="form-check-input checked:bg--600 float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:accent-fuchsia-600 focus:outline-none" type="checkbox" value="" id="flexCheckChecked" checked onClick="!this.checked=this.checked;" />
            <label class="form-check-label inline-block text-gray-800" for="flexCheckChecked"> Checked checkbox </label>
          </div>
        </div>
      </div>
        `,
      },

      {
        title: "Inline Checkbox",
        description:
          "Use the group of maltiple checkbox which are align horizontaly",
        src: (
          <div className="flex justify-center gap-10">
            <CheckBox inline />
          </div>
        ),

        code: `<div class="flex justify-center">
        <div class="flex gap-10">
          <div class="form-check">
            <input class="form-check-input mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault"> 1 </label>
          </div>
          <div class="form-check">
            <input class="form-check-input mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault"> 2 </label>
          </div>
      
          <div class="form-check">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault"> 3 </label>
          </div>
          <div class="form-check">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer rounded-sm border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-blue-600 checked:bg-blue-600 focus:outline-none" type="checkbox" value="" id="flexCheckDefault" onClick="!this.checked=this.checked;" checked />
            <label class="form-check-label inline-block text-gray-800" for="flexCheckDefault"> None </label>
          </div>
        </div>
      </div>
      `,
      },
    ],
    intro: {
      title: " Tailwind Checkbox Component",
      description:
        "Responsive checkbox built with Tailwind CSS. Limits the user to one selection, from a list of preset options. Free for commercial use, no registration required.",
    },
  },
};
