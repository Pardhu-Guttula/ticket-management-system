import React from "react";
import NavBar from "../allTickets/NavBar";
import ClosedCard from "./ClosedCard";
import VerticalNavBar from "../../allPages/VerticalNavBar";

function ClosedTickets() {
  return (
    <div className="App bg-[#e9ecef] flex min-h-screen">
      <VerticalNavBar />
      <div className="flex flex-col w-full">
        <NavBar />
        <div className="p-4">
          <ClosedCard />
        </div>
      </div>
    </div>
  );
}

export default ClosedTickets;
