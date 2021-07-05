import React from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      {/* App Body */}
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;
