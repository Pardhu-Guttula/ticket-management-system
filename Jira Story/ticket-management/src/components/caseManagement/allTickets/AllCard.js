import React, { useState } from "react";
import { FaTh, FaList } from "react-icons/fa";

function AllCard() {
  const [view, setView] = useState("grid"); // State to manage the view

  const cards = [
    {
      id: 1,
      userName: "User 1",
      description: "Short Description 1",
      priority: "High",
    },
    {
      id: 2,
      userName: "User 2",
      description: "Short Description 2",
      priority: "Medium",
    },
    {
      id: 3,
      userName: "User 3",
      description: "Short Description 3",
      priority: "Low",
    },
    {
      id: 4,
      userName: "User 4",
      description: "Short Description 3",
      priority: "Low",
    },
  ];

  return (
    <div className="mt-1">
      {/* Nav bar */}
      <nav className="flex justify-between items-center bg-grey text-white px-4 py-2">
        <div className="text-lg font-bold"></div>
        {/* View toggle buttons */}
        <div className="flex space-x-2">
          <button
            className={`p-1 ${
              view === "grid" ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={() => setView("grid")}
          >
            <FaTh size={16} />
          </button>
          <button
            className={`p-1 ${
              view === "list" ? "text-blue-500" : "text-gray-500"
            }`}
            onClick={() => setView("list")}
          >
            <FaList size={16} />
          </button>
        </div>
      </nav>

      {/* Content area */}
      <div className="relative">
        {/* Conditional rendering based on view */}
        <div className="mt-4">
          {view === "grid" ? (
            <div className="grid gap-4 sm:gap-6 md:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="container mx-auto px-4 pt-5 pb-2 bg-card relative max-w-sm overflow-hidden rounded-md shadow-lg group transition-transform duration-300 hover:scale-105"
                >
                  <h3 className="font-bold">Ticket ID: {card.id}</h3>
                  <h2>{card.userName}</h2>
                  <h2>{card.description}</h2>
                  <h2>{card.priority}</h2>
                  <div className="flex justify-center">
                    <button className="text-white bg-normal-button hover:bg-hover-button font-bold py-2 px-4 rounded">
                      Accept
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-full">
              <div className="w-11/12">
                {cards.map((card) => (
                  <div
                    key={card.id}
                    className="container mx-auto px-4 py-5 bg-card relative max-w-11/12 overflow-hidden rounded-md shadow-lg transition-transform duration-300 hover:scale-105 flex justify-between items-center mb-4"
                    style={{ height: "calc(100% + 1rem)" }}
                  >
                    <div>
                      <h3 className="font-bold">Ticket ID: {card.id}</h3>
                      <h2>{card.description}</h2>
                    </div>
                    <button className="text-white bg-normal-button hover:bg-hover-button font-bold py-2 px-4 rounded">
                      Accept
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllCard;
