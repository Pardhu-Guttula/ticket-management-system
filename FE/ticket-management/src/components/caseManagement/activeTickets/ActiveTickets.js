import React from "react";
import NavBar from "../allTickets/NavBar";
import ActiveCard from "./ActiveCard";
import VerticalNavBar from "../../allPages/VerticalNavBar";

function ActiveTickets() {
  return (
    <div className="App bg-[#e9ecef] flex min-h-screen">
      <VerticalNavBar />
      <div className="flex flex-col w-full">
        <NavBar />
        <div className="p-4">
          <ActiveCard />
        </div>
      </div>
    </div>
  );
}

export default ActiveTickets;
