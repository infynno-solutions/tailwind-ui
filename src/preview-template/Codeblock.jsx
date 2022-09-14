import React, { useRef } from "react";
import { CodeBlock, a11yDark } from "react-code-blocks";
// eslint-disable-next-line import/no-webpack-loader-syntax
const code = require("!!raw-loader!../App.js").default.toString();

const Codeblock = () => {
  const ref = useRef();
  console.log(ref.current?.contentWindow);
  return (
    <>
      <div className="text-sm text-left" ref={ref}>
        <CodeBlock
          text={code}
          language="jsx"
          showLineNumbers={false}
          theme={a11yDark}
        />
      </div>
    </>
  );
};

export default Codeblock;
