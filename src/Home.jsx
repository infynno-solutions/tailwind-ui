import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
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
          <h2 className="pt-10">
            See Pricing Component by clicking below links
          </h2>
          <div>
            <Link className="text-blue-800" to="/pricing/sample1">
              - Pricing Component Sample 1
            </Link>
          </div>
          <div>
            <Link className="text-blue-800" to="/pricing/sample2">
              - Pricing component sample 2
            </Link>
            <div>
              <Link className="text-blue-800" to="/pricing/sample3">
                - Pricing component Sample 3
              </Link>
            </div>
            <div>
              <Link className="text-blue-800" to="/pricing/sample4">
                - Pricing component Sample 4
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
