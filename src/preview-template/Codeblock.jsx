import React from "react";
import { CopyBlock, dracula } from "react-code-blocks";

const Codeblock = ({ code }) => {
  return (
    <div className="text-sm text-left">
      <CopyBlock
        text={code}
        language="jsx"
        showLineNumbers={false}
        theme={dracula}
      />
    </div>
  );
};

export default Codeblock;
