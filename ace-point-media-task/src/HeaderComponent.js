import "./App.css";
import React from "react";
import pageLogo from "../src/images/pageLogo.png";
import Notify from "../src/images/Notify.png";
import { useState } from "react";
const HeaderComponent = () => {
  const [selectedOption, setSelectedOption] = useState("English (UK)");
  function onChangeHandler(e) {
    setSelectedOption(e.target.value);
  }
  return (
    <div>
      <div className="main-header">
        <div className="left-header">
          <div className="page-logo">
            <img src={pageLogo} alt="page-logo" />
          </div>
          <div className="header-title">Ramaera industries </div>
        </div>
        <div className="right-header">
          <img src={Notify} alt="Notify" height={25} width={25}></img>
          <div className="header-dropdown">
            <select
              id="language"
              onChange={onChangeHandler}
              value={selectedOption}
              style={{
                backgroundColor: "#243b55",
                borderWidth: 0,
                color: "#FFFFFF",
              }}
            >
              <option value="English">English (UK)</option>
              <option value="Hindi">Telugu</option>
              <option value="Telugu">Hindi</option>
            </select>
          </div>
        </div>
      </div>
      <div className="header-border"></div>
    </div>
  );
};
export default HeaderComponent;
