import React from "react";

function ActiveCard() {
  return (
    <div className="mt-14 grid gap-4 sm:gap-6 md:gap-8 lg:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      <div className="container mx-auto px-4 pt-5 pb-2 bg-card relative max-w-sm overflow-hidden rounded-md shadow-lg group transition-transform duration-300 hover:scale-105">
        <h3 className="font-bold">Ticket ID: </h3>
        <h2>UserName</h2>
        <h2>Short Description</h2>
        <h2>Priority</h2>
        <div className="flex justify-center">
          <button className="text-white bg-normal-button hover:bg-hover-button font-bold py-2 px-4 rounded">
            Chat
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-5 pb-2 bg-card relative max-w-sm overflow-hidden rounded-md shadow-lg group transition-transform duration-300 hover:scale-105">
        <h3 className="font-bold">Ticket ID: </h3>
        <h2>UserName</h2>
        <h2>Short Description</h2>
        <h2>Priority</h2>
        <div className="flex justify-center">
          <button className="bg-normal-button hover:bg-hover-button text-white font-bold py-2 px-4 rounded">
            Chat
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 pt-5 pb-2 bg-card relative max-w-sm overflow-hidden rounded-md shadow-lg group transition-transform duration-300 hover:scale-105">
        <h3 className="font-bold">Ticket ID: </h3>
        <h2>UserName</h2>
        <h2>Short Description</h2>
        <h2>Priority</h2>
        <div className="flex justify-center">
          <button className="bg-normal-button hover:bg-hover-button text-white font-bold py-2 px-4 rounded">
            Chat
          </button>
        </div>
      </div>
    </div>
  );
}

export default ActiveCard;
