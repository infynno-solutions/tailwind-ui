import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="p-10">
      <h2>HOME</h2>
      <div className="flex flex-col text-left">
        See Credit card samples by clicking below links
        <Link className="text-blue-800" to="/credit-card/sample1">
          - Sample 1
        </Link>
        <Link className="text-blue-800" to="/credit-card/sample2">
          - Sample 2
        </Link>
        <Link className="text-blue-800" to="/credit-card/sample3">
          - Sample 3
        </Link>
      </div>
    </div>
  );
};

export default Home;
