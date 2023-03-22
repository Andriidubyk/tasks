import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import About from "./pages/AboutCart";
import Authentication from "./pages/Authentication";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Authentication />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
