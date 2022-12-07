import React, { useState } from "react";
import "./App.css";
import Project from "../src/images/Project.png";
import Profile from "../src/images/Profile.png";
import Finance from "../src/images/Finance.png";
import Support from "../src/images/Support.png";
import DropDown from "../src/images/DropDown.png";
import SupportComponent from "./components/support-component";
import ProfileComponent from "./components/profile-component";
import ProjectComponent from "./components/projects-component";
import FinanceComponent from "./components/finance-component";
import GaramMasalaComponent from "./components/garam-masala-component";
import HotelsComponent from "./components/hotels-component";
import TechnologyComponent from "./components/technology-component";
import FMCGComponent from "./components/fmcg-component";
const ContextBody = (props) => {
  const [state, setState] = useState("project");
  return (
    <div className="body">
      <div className="left-nav">
        <div
          className="icon-container"
          onClick={() => {
            setState("profile");
          }}
        >
          <div className="nav-left-icon">
            <img src={Profile} alt="profile" height={25} width={25} />
          </div>
          <div className="nav-item-title">Profile</div>
          <div className="nav-dropdown">
            {/* <img src={DropDown} alt="Drop Down" /> */}
          </div>
        </div>
        <div
          className="icon-container"
          onClick={() => {
            setState("project");
          }}
        >
          <div className="nav-left-icon">
            <img src={Project} alt="project" height={25} width={25} />
          </div>
          <div className="nav-item-title">Projects</div>
          <div className="nav-dropdown">
            <img src={DropDown} alt="Drop Down" />
          </div>
        </div>
        <div
          className="icon-container"
          onClick={() => {
            setState("finance");
          }}
        >
          <div className="nav-left-icon">
            <img src={Finance} alt="Finance" height={25} width={25} />
          </div>
          <div className="nav-item-title">Finance</div>
          <div className="nav-dropdown">
            <img src={DropDown} alt="Drop Down" />
          </div>
        </div>
        <div
          className="icon-container"
          onClick={() => {
            setState("support");
          }}
        >
          <div className="nav-left-icon">
            <img src={Support} alt="Support" height={25} width={25} />
          </div>
          <div className="nav-item-title">Support</div>
          <div className="nav-dropdown">
            <img src={DropDown} alt="Drop Down" />
          </div>
        </div>
      </div>
      <div className="body-border"></div>
      {state === "garam-masala" && <GaramMasalaComponent />}
      {state === "hotel" && <HotelsComponent />}
      {state === "technology" && <TechnologyComponent />}
      {state === "fmcg" && <FMCGComponent />}
      {state === "profile" && (
        <ProfileComponent
          FirstList={() => setState("garam-masala")}
          SecondList={() => setState("hotel")}
          ThirdList={() => setState("technology")}
          FourthList={() => setState("fmcg")}
        />
      )}
      {state === "project" && (
        <ProjectComponent
          FirstList={() => setState("garam-masala")}
          SecondList={() => setState("hotel")}
          ThirdList={() => setState("technology")}
          FourthList={() => setState("fmcg")}
        />
      )}
      {state === "finance" && (
        <FinanceComponent
          FirstList={() => setState("garam-masala")}
          SecondList={() => setState("hotel")}
          ThirdList={() => setState("technology")}
          FourthList={() => setState("fmcg")}
        />
      )}
      {state === "support" && (
        <SupportComponent
          FirstList={() => setState("garam-masala")}
          SecondList={() => setState("hotel")}
          ThirdList={() => setState("technology")}
          FourthList={() => setState("fmcg")}
        />
      )}
    </div>
  );
};
export default ContextBody;
