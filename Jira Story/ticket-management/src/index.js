import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClosedTickets from "./components/caseManagement/closedTickets/ClosedTickets";
import ActiveTickets from "./components/caseManagement/activeTickets/ActiveTickets";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "activeTickets",
    element: <ActiveTickets />,
  },
  {
    path: "closedTickets",
    element: <ClosedTickets />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
reportWebVitals();
