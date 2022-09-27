import React from "react";
import logo from "./construction.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/home-page/Home";
import UnderConstruction from "./components/under-construction/UnderConstruction";

var debug: boolean = false;

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={debug ? <Home /> : <UnderConstruction logo={logo} />}
          />
          <Route path="/dev" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
