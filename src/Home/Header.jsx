import React from "react";
import Logo from "../assets/Logo.png";
import { Link } from "react-router-dom";
const Header = ({ module }) => {
  return (
    <div className="flex container mx-auto justify-center md:justify-between items-center font-semibold h-[90px] px-10 md:px-16 xl:px-0 py-8 bg-white border-b border-gray-200 ">
      <a href="/">
        <div className="w-48 relative object-cover ">
          <img src={Logo} alt="Main logo" />
        </div>
      </a>
      <div className="flex items-center">
        <span className="mr-10 cursor-pointer hover:text-blue-700 sm:flex hidden">
          <a
            href="https://github.com/infynno-solutions/tailwind-ui"
            target="_blank"
            rel="noreferrer"
          >
            Documentation
          </a>
        </span>
        <span
          className="cursor-pointer hover:text-blue-600 sm:flex hidden"
          onClick={() =>
            document.getElementById("components").scrollIntoView({
              behavior: "smooth",
            })
          }
        >
          <Link to={module ? `/?tailwind=${module}` : "?tailwind=home"}>
            Components
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
