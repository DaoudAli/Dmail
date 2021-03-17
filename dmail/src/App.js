import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="App">
      <Header />
      <Sidebar />
      <h1>Building Dmail</h1>
    </div>
  );
}

export default App;
