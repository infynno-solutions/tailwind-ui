/* eslint-disable import/no-webpack-loader-syntax */

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
