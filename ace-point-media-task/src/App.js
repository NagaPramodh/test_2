import "./App.css";
import React from "react";
import HeaderComponent from "./HeaderComponent";
import CompleteBody from "./CompleteBody";
const App = () => {
  return (
    <div className="complete-page">
      <HeaderComponent />
      <CompleteBody />
    </div>
  );
};

export default App;
