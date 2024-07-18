import React, { useState } from "react";
import AgentChatSidebar from "./AgentChatSidebar";
import AgentChat from "./AgentChat";

function AgentChatContainer() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    setIsSidebarVisible(false);
  };

  const handleBackToSidebar = () => {
    setIsSidebarVisible(true);
  };

  return (
    <div className="flex h-screen p-2">
      <div
        className={`md:block ${
          isSidebarVisible ? "block" : "hidden"
        } w-full md:w-1/5 `}
      >
        <AgentChatSidebar onSelectUser={handleUserSelect} />
      </div>
      <div
        className={`md:block ${!isSidebarVisible ? "block" : "hidden"} w-full`}
      >
        <AgentChat selectedUser={selectedUser} onBack={handleBackToSidebar} />
      </div>
    </div>
  );
}

export default AgentChatContainer;
