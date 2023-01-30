import { useState } from "react";
import { Home } from "./pages/Home";
import { Dashboard } from "./pages/Dashboard";

export function App() {
  const [currentPage, setCurrentPage] = useState("");

  return (
    <div>
      {currentPage === "" && <Home setCurrentPage={setCurrentPage} />}
      {currentPage === "dash" && (
        <Dashboard setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
}
