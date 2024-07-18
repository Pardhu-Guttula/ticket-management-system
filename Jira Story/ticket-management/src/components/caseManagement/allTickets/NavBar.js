import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-[#e9ecef] p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="relative w-full md:w-auto mb-4 md:mb-0">
          <input
            type="text"
            className="w-full md:w-auto bg-white text-textColor text-left rounded-md px-4 py-2 focus:outline-none focus:ring-2"
            placeholder="Search..."
          />
          <button className="absolute right-2 top-2">
            <svg
              className="h-5 w-5 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M13.293 14.707a8 8 0 111.414-1.414l5 5a1 1 0 01-1.414 1.414l-5-5zM8 14a6 6 0 100-12 6 6 0 000 12z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div className="w-full md:w-auto flex flex-wrap justify-center md:justify-end space-y-2 md:space-y-0 space-x-2 md:space-x-5">
          <Link
            to="/"
            className="text-white bg-normal-button hover:bg-hover-button px-3 py-2 rounded-md text-sm font-medium block md:inline mt-2 md:mt-0"
          >
            All Tickets
          </Link>
          <Link
            to="/activeTickets"
            className="text-white bg-normal-button hover:bg-hover-button px-3 py-2 rounded-md text-sm font-medium block md:inline mt-2 md:mt-0"
          >
            Active Tickets
          </Link>
          <Link
            to="/closedTickets"
            className="text-white bg-normal-button hover:bg-hover-button px-3 py-2 rounded-md text-sm font-medium block md:inline mt-2 md:mt-0"
          >
            Closed Tickets
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
