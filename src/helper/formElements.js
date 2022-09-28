/* eslint-disable import/no-webpack-loader-syntax */

import Button from "../Form/Button";
import Input from "../Form/Input";
import RadioButton from "../Form/RadioButton";

export const formElementsData = {
  buttons: {
    data: [
      {
        title: "Basic Examples",
        description:
          " Use these default button styles with multiple colors to indicate an  action or link within your website.",
        src: <Button />,
        code: require("!!raw-loader!../Form/Button.jsx").default.toString(),
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
        code: require("!!raw-loader!../Form/Button.jsx").default.toString(),
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
        code: require("!!raw-loader!../Form/Button.jsx").default.toString(),
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
        code: require("!!raw-loader!../Form/Button.jsx").default.toString(),
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
        code: require("!!raw-loader!../Form/Button.jsx").default.toString(),
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
        code: require("!!raw-loader!../Form/Button.jsx").default.toString(),
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
        code: require("!!raw-loader!../Form/Button.jsx").default.toString(),
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
        code: require("!!raw-loader!../Form/Button.jsx").default.toString(),
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
        code: require("!!raw-loader!../Form/Input.jsx").default.toString(),
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
        code: require("!!raw-loader!../Form/Input.jsx").default.toString(),
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
        code: require("!!raw-loader!../Form/Input.jsx").default.toString(),
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
        code: require("!!raw-loader!../Form/Input.jsx").default.toString(),
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
        code: require("!!raw-loader!../Form/Input.jsx").default.toString(),
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
        code: require("!!raw-loader!../Form/Input.jsx").default.toString(),
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
        code: require("!!raw-loader!../Form/Input.jsx").default.toString(),
      },
      {
        title: "Numbers",
        description: "The input type='password' defines entering the number",
        src: (
          <div className="flex gap-3 justify-center h-max">
            <Input type="number" />
          </div>
        ),
        code: require("!!raw-loader!../Form/Input.jsx").default.toString(),
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
            labelvalue1="mydata7"
            labelvalue2="mydata8"
            labelvalue3="radio1"
          />
        ),
        code: require("!!raw-loader!../Form/RadioButton.jsx").default.toString(),
      },
      {
        title: "Disabled",
        description:
          "Radio buttons are most commonly used when you have a group of mutually exclusive choices and only one choice from that group is allowed.",
        src: (
          <RadioButton
            disabled
            labelvalue1="mydata1"
            labelvalue2="mydata2"
            labelvalue3="radio2"
          />
        ),
        code: require("!!raw-loader!../Form/RadioButton.jsx").default.toString(),
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
        code: require("!!raw-loader!../Form/RadioButton.jsx").default.toString(),
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
        code: require("!!raw-loader!../Form/RadioButton.jsx").default.toString(),
      },
    ],
    intro: {
      title: " Tailwind Radios component  ",
      description:
        "Responsive radios built with Tailwind CSS. Limits the user to one selection, from a list of preset options. Free for commercial use, no registration required.",
    },
  },
};
