// import './App.css';
import { Route, Routes } from "react-router-dom";
import AgentChatContainer from "./pages/AgentChat/AgentChatContainer";
import AgentDashboard from "./pages/AgentDashboard/AgentDashboard";
import Sidebar from "./components/Sidebar";
import AllCases from "./pages/caseManagement/allCases/AllCases";
import ActiveCases from "./pages/caseManagement/activeCases/ActiveCases";
import ClosedCases from "./pages/caseManagement/closedCases/ClosedCases";

const App = () => {
  return (
    <div className="md:flex">
      <Sidebar />
      <div className="bg-white flex-1 h-screen overflow-y-auto">
        <Routes>
          <Route path="/" element={<AgentDashboard />} />
          <Route path="/AllCases" element={<AllCases />} />
          <Route path="/ActiveCases" element={<ActiveCases />} />
          <Route path="/ClosedCases" element={<ClosedCases />} />
          <Route path="/messages" element={<AgentChatContainer />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
