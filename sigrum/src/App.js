import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavigationMenu from "./components/navigationMenu"; // Ensure exact name match
import { Events } from "./components/events"; // Import Events as a named export
import HomePage from "./components/homePage.jsx"; // Import HomePage

function App() {
  return (
    <Router>
      {/* Place NavigationMenu above Routes so it stays visible */}
      <NavigationMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;
