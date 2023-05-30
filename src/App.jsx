import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Nav from "./Nav";
import Articles from "./Articles";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Routes>
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </div>
  );
}

export default App;
