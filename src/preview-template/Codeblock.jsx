/* eslint-disable import/no-webpack-loader-syntax */
import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const Codeblock = () => {
  return (
    <div className="text-sm text-left">
      <CopyBlock
        text={require("!!raw-loader!../pricing/sample3/Pricing.jsx").default.toString()}
        language="jsx"
        showLineNumbers={false}
        theme={dracula}
      />
    </div>
  );
};

export default Codeblock;
