/* eslint-disable import/no-webpack-loader-syntax */

import Button from "../Form/Button";
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
                 active:shadow-lg transition duration-150 ease-in-out"> 
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
        <div class="flex items-center justify-center">
          <button class="flex h-9 items-center justify-center rounded bg-blue-600 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded bg-green-600 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
              
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded bg-gray-600 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
              
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded bg-red-600 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded bg-yellow-600 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded bg-black px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
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
        <div class="flex items-center justify-center">
          <button class="flex h-9 items-center justify-center rounded border-2 border-blue-600 bg-white px-6 text-xs font-medium uppercase leading-tight text-blue-600 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded border-2 border-green-600 bg-white px-6 text-xs font-medium uppercase leading-tight text-green-600 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
            
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded border-2 border-gray-600 bg-white px-6 text-xs font-medium uppercase leading-tight text-gray-600 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
            
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded border-2 border-red-600 bg-white px-6 text-xs font-medium uppercase leading-tight text-red-600 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded border-2 border-yellow-600 bg-white px-6 text-xs font-medium uppercase leading-tight text-yellow-600 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded border-2 border-black bg-white px-6 text-xs font-medium uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
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
          <div class="flex items-center justify-center">
             <button class="flex h-9 items-center justify-center rounded-full bg-blue-600 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
           </div>
           <div class="flex items-center justify-center">
             <button class="success && flex h-9 items-center justify-center rounded-full border-2 bg-green-600 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
           </div>

           <div class="flex items-center justify-center">
             <button class="success && flex h-9 items-center justify-center rounded-full border-2 bg-gray-600 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
           </div>

           <div class="flex items-center justify-center">
             <button class="success && flex h-9 items-center justify-center rounded-full border-2 bg-red-600 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
           </div>
           <div class="flex items-center justify-center">
             <button class="success && flex h-9 items-center justify-center rounded-full border-2 bg-yellow-600 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
           </div>
           <div class="flex items-center justify-center">
             <button class="success && flex h-9 items-center justify-center rounded-full border-2 bg-black px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
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
        <div class="flex items-center justify-center">
          <button class="flex h-9 items-center justify-center rounded-full border-2 border-blue-600 bg-white px-6 text-xs font-medium uppercase leading-tight text-blue-600 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded-full border-2 border-green-600 bg-white px-6 text-xs font-medium uppercase leading-tight text-green-600 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>

        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded-full border-2 border-gray-600 bg-white px-6 text-xs font-medium uppercase leading-tight text-gray-600 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>

        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded-full border-2 border-red-600 bg-white px-6 text-xs font-medium uppercase leading-tight text-red-600 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded-full border-2 border-yellow-600 bg-white px-6 text-xs font-medium uppercase leading-tight text-yellow-600 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        </div>
        <div class="flex items-center justify-center">
          <button class="success && flex h-9 items-center justify-center rounded-full border-2 border-black bg-white px-6 text-xs font-medium uppercase leading-tight text-black shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
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
        <button class="flex h-7 items-center justify-center rounded bg-blue-600 px-5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>

        <button class="flex h-9 items-center justify-center rounded bg-blue-600 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>

        <button class="flex h-10 items-center justify-center rounded bg-blue-600 px-8 text-lg font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
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
        <button class="flex h-9 cursor-not-allowed items-center justify-center rounded bg-blue-600 px-6 text-xs font-medium uppercase leading-tight text-white opacity-60 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        <button class="flex h-9 cursor-not-allowed items-center justify-center rounded bg-gray-600 px-6 text-xs font-medium uppercase leading-tight text-white opacity-60 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>

        `,
      },
      {
        title: "Block buttons",
        description:
          "Use full width button to adjust it to the column width. Block buttons is more often used when creating layout for mobile devices.       ",
        src: (
          <div className="flex flex-col gap-3 justify-center h-max w-full">
            <Button block />
            <Button variant="outline-primary" block />
          </div>
        ),
        code: `
        <button class="mx-5 flex h-9 w-full items-center justify-center rounded bg-blue-600 px-6 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>
        <button class="mx-5 flex h-9 w-full items-center justify-center rounded border-2 border-blue-600 bg-white px-6 text-xs font-medium uppercase leading-tight text-blue-600 shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">Button</button>

        `,
      },
    ],
    intro: {
      title: " Button Components for Tailwind",
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
        <div class="mb-3 xl:w-96">
          <label for="formInput1" class="form-label mb-2 inline-block text-sm text-gray-700"> Label </label>
          <input class="form-control m-0 block h-8 w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding py-1.5 px-2 text-sm font-normal text-gray-700 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" placeholder="Basic Input" />
        </div>
      </div>
              
      <div class="flex items-center justify-center text-left">
        <div class="mb-3 xl:w-96">
          <label for="formInput1" class="form-label mb-2 inline-block text-gray-700"> Label </label>
          <input class="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding py-1.5 px-2 text-base font-normal text-gray-700 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" placeholder="Basic Input" />
        </div>
      </div>
              
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
            <input class="form-control m-0 block w-full rounded border border-solid border-gray-300 bg-white bg-clip-padding py-1.5 px-2 text-base font-normal text-gray-700 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" placeholder="Basic Input" />
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
            <Input type="email" />
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
          <input class="form-control bg-slate-100 m-0 block w-full rounded border border-solid border-gray-300 bg-clip-padding py-1.5 px-2 text-base font-normal text-gray-700 opacity-80 transition ease-in-out first-letter:px-3 focus:border-blue-600 focus:bg-white focus:text-gray-700 focus:outline-none" placeholder="Basic Input" disabled />
        </div>
      </div>
      
        `,
      },
    ],
    intro: {
      title: "Tailwind Inputs component.",
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
            labelvalue2="mydata2"
            labelvalue3="radio1"
          />
        ),
        code: `
        <div class="flex justify-center items-center py-5">
           <div>
             <div class="form-check form-check-inline">
               <input
                 class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:border-4 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                 type="radio"
                 name="radio1" 
               />
               <label
                 class="form-check-label inline-block text-gray-800",
                 for='lable1'
               >
                 Default radio
               </label>
             </div>
             <div class="form-check form-check-inline">
               <input
                 class="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:border-4 checked:border-blue-600 disabled:border-blue-300 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
                 type="radio"
                 name="radio1"
                 checked
               />
               <label
                 class="form-check-label inline-block text-gray-800",
                 for='lable2'
               >
                 Default checked radio
               </label>
             </div>
           </div>
         </div>
        `,
      },
      {
        title: "Disabled",
        description:
          "This Radio buttons are most commonly used to indicate disabled.",
        src: (
          <RadioButton
            disabled
            labelvalue1="mydata1"
            labelvalue2="mydata2"
            labelvalue3="radio2"
          />
        ),
        code: `<div class="flex items-center justify-center py-5">
        <div>
          <div class="form-check form-check-inline">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-blue-600 focus:outline-none" type="radio" name="radio1" disabled />
            <label class="form-check-label inline-block text-gray-800" , for="lable1"> Default radio </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-blue-600 focus:outline-none disabled:border-blue-300" type="radio" name="radio1" checked disabled />
            <label class="form-check-label inline-block text-gray-800" , for="lable2"> Default checked radio </label>
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
            labelvalue2="mydata4"
            labelvalue3="radio3"
          />
        ),
        code: `<div class="flex items-center justify-center py-5">
        <div class="flex gap-4">
          <div class="form-check">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-blue-600 focus:outline-none" type="radio" name="radio1" />
            <label class="form-check-label inline-block text-gray-800" for="lable1"> Default radio </label>
          </div>
          <div class="form-check">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-blue-600 focus:outline-none disabled:border-blue-300" type="radio" name="radio1" checked />
            <label class="form-check-label inline-block text-gray-800" , for="lable2"> Default checked radio </label>
          </div>
        </div>
      </div>
      `,
      },
      {
        title: "Default Checked ",
        description:
          "Make any radio button default checked by passing checked as Props",
        src: (
          <RadioButton
            checked
            labelvalue1="mydata5"
            labelvalue2="mydata6"
            labelvalue3="radio4"
          />
        ),
        code: `<div class="flex items-center justify-center py-5">
        <div>
          <div class="form-check form-check-inline">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-blue-600 focus:outline-none" type="radio" name="radio1" />
            <label class="form-check-label inline-block text-gray-800" , for="lable1"> Default radio </label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input float-left mt-1 mr-2 h-4 w-4 cursor-pointer appearance-none rounded-full border border-gray-300 bg-white bg-contain bg-center bg-no-repeat align-top transition duration-200 checked:border-4 checked:border-blue-600 focus:outline-none disabled:border-blue-300" type="radio" name="radio1" checked />
            <label class="form-check-label inline-block text-gray-800" , for="lable2"> Default checked radio </label>
          </div>
        </div>
      </div>
      `,
      },
    ],
    intro: {
      title: " Tailwind Radios component  ",
      description:
        "Responsive radios built with Tailwind CSS. Limits the user to one selection, from a list of preset options. Free for commercial use, no registration required.",
    },
  },
};
