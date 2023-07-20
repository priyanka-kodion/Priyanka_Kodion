import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import SideNavbar from "./Components/SideNavbar";
import { SidebarProvider } from "./Components/SidebarContext";
import Home from "./Components/Home";
import About from "./Components/About";
import Signup from "./Components/Signup";
import { PopupProvider } from "./Components/PopupContext";
import "./App.css";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <SidebarProvider>
          <PopupProvider>
            <div className="app-container">
              <SideNavbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/signup" element={<Signup />} />
              </Routes>
            </div>
          </PopupProvider>
        </SidebarProvider>
      </Router>
    </React.StrictMode>
  );
}

export default App;
