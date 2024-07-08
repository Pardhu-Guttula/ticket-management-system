import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-pageBG p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="relative">
          <input
            type="text"
            className="bg-card text-textColor text-left rounded-md px-10 py-2 focus:outline-none focus:ring-2 focus:bg-hover-button"
            placeholder="Search..."
          />
          <button className="absolute right-0 top-0 mt-2 mr-2">
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

        <div className="flex space-x-5">
          <button
            href="#"
            className="text-white bg-normal-button hover:bg-hover-button px-3 py-2 rounded-md text-sm font-medium"
          >
            All Tickets
          </button>
          <button
            href="#"
            className="text-white bg-normal-button hover:bg-hover-button px-3 py-2 rounded-md text-sm font-medium"
          >
            Active Tickets
          </button>
          <button
            href="#"
            className="text-white bg-normal-button hover:bg-hover-button px-3 py-2 rounded-md text-sm font-medium"
          >
            Closed Tickets
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
