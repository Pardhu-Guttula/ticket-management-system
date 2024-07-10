// App.js
import React from "react";
import NavBar from "./components/caseManagement/allTickets/NavBar";
import VerticalNavBar from "./components/allPages/VerticalNavBar";
import AllCard from "./components/caseManagement/allTickets/AllCard";

function App() {
  return (
    <div className="App bg-[#e9ecef] flex min-h-screen">
      <VerticalNavBar />
      <div className="flex flex-col w-full">
        <NavBar />
        <div className="p-4">
          <AllCard />
        </div>
      </div>
    </div>
  );
}

export default App;
