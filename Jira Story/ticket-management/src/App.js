import React from "react";
// import NavBar from "./components/caseManagement/allTickets/NavBar";
// import VerticalNavBar from "./components/allPages/VerticalNavBar";
// import AllCard from "./components/caseManagement/allTickets/AllCard";
// import ChatPage from "./components/layouts/AgentChat";
import AgentChatContainer from "./components/AgentChat/AgentChatContainer";

function App() {
  return (
    // <div className="App bg-[#e9ecef] flex min-h">
    //   <VerticalNavBar />
    //   <div className="flex flex-col w-full">
    //     <NavBar />
    //     <div className="p-4">
    //       <AllCard />
    //     </div>
    //   </div>
    // </div>
    <div>
      <AgentChatContainer />
    </div>
  );
}

export default App;
