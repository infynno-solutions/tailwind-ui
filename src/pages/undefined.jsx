import React from "react";
import { Link } from "react-router-dom";

const Undefined = () => {
  return (
    <div className="p-20">
      <div className="text-3xl font-bold text-center "> Coming soon</div>
      <div className="text-3xl font-bold text-center">
        Click
        <Link to="/">
          <span className="text-blue-600 underline cursor-pointer"> here </span>
        </Link>
        to go back
      </div>
    </div>
  );
};

export default Undefined;
