import {BrowserRouter, Routes, Route} from "react-router-dom";
import UserAgentChat from "./pages/UserAgentChat";
import UserBotChat from "./pages/UserBotChat";

function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<UserBotChat />} />
      <Route path="/useragentchat" element={<UserAgentChat />} />
      </Routes>
      </BrowserRouter>
  );
}


export default App;