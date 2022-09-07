import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div className="p-10 h-screen">
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
      <div className="violet-bg h-screen text-white px-20 py-5">
        <div className="bg-white text-black h-full w-[30%]">
          <span className="text-left text-3xl font-bold">
            CREDIT CARD SAMPLES
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
