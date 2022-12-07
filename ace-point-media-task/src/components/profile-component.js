import React from "react";
import Profile from "../images/Profile.png";
import EllipseOne from "../images/EllipseOne.png";
import EllipseTwo from "../images/EllipseTwo.png";
import EllipseThree from "../images/EllipseThree.png";
import EllipseFour from "../images/EllipseFour.png";
const ProfileComponent = (props) => {
  const FirstList = props.FirstList;
  const SecondList = props.SecondList;
  const ThirdList = props.ThirdList;
  const FourthList = props.FourthList;
  return (
    <div>
      <div className="projects-heading">
        <div className="project-heading">Profile</div>
        <img src={Profile} alt="Project" height={25} width={25} />
      </div>
      <div className="project-heading-border"></div>
      <div className="table">
        <div className="table-header">
          <div className="project-heading-context">Name</div>
          <div className="project-heading-context">About</div>
          <div className="project-heading-context">Status</div>
        </div>
        <div className="list-items">
          <div className="list-item" onClick={FirstList}>
            <div className="list-name">
              <img src={EllipseOne} alt="first-ellipse" />
              <div className="list-name-content">Garam Masala</div>
            </div>
            <div className="list-about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisi,
              mi, ornare aliquet.
            </div>
            <div className="list-status">
              <div className="list-status-content">Active</div>
              <div className="list-status-content">Bid</div>
            </div>
          </div>
          <div className="list-item" onClick={SecondList}>
            <div className="list-name">
              <img src={EllipseTwo} alt="second-ellipse" />
              <div className="list-name-content">Hotels</div>
            </div>
            <div className="list-about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisi,
              mi, ornare aliquet.
            </div>
            <div className="list-status">
              <div className="list-status-content">Active</div>
              <div className="list-status-content">Bid</div>
            </div>
          </div>
          <div className="list-item" onClick={ThirdList}>
            <div className="list-name">
              <img src={EllipseThree} alt="third-ellipse" />
              <div className="list-name-content">Technology</div>
            </div>
            <div className="list-about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisi,
              mi, ornare aliquet.
            </div>
            <div className="list-status">
              <div className="list-status-content">Upcoming</div>
            </div>
          </div>
          <div className="list-item" onClick={FourthList}>
            <div className="list-name">
              <img src={EllipseFour} alt="fourth-ellipse" />
              <div className="list-name-content">Fmcg</div>
            </div>
            <div className="list-about">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non nisi,
              mi, ornare aliquet.
            </div>
            <div className="list-status">
              <div className="list-status-content">Finishes</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileComponent;
