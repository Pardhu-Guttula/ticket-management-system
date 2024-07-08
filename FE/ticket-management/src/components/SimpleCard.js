import React from "react";

function SimpleCard() {
  return (
    <div className="mt-14 grid gap-x-8 gap-y-11 grid-cols-3">
      <div className="container mx-auto px-4 pt-5 pb-2 bg-card relative max-w-sm overflow-hidden rounded-md shadow-lg group transition-transform duration-300 hover:scale-105">
        <h3 className="font-bold">Ticket ID: </h3>
        <h2>UserName</h2>
        <h2>Short Description</h2>
        <h2>Priority</h2>
        <div className="flex justify-center">
          <button className="text-white bg-normal-button hover:bg-hover-button font-bold py-2 px-4 rounded">
            Accept
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
            Accept
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
            Accept
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
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default SimpleCard;
