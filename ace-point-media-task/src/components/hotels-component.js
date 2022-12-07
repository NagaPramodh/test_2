import React from "react";
import GaramMasala from "../images/GaramMasala.png";
import FirstAvatar from "../images/first-avatar.png";
import SecondAvatar from "../images/second-avatar.png";
import ThirdAvatar from "../images/third-avatar.png";
const HotelsComponent = () => {
  return (
    <div>
      <div className="projects-heading" style={{ paddingLeft: 108 }}>
        <div className="project-heading">Hotels</div>
      </div>
      <div className="project-heading-border" style={{ marginLeft: 108 }}></div>
      <div style={{ display: "flex", flexDirection: "row", gap: 23 }}>
        <div className="content-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
          pretium, mi sed id dui sed orci, tempor. Pellentesque egestas odio
          enim, accumsan, cursus. Fermentum in bibendum aliquet est viverra eu
          vitae in nibh. Leo, feugiat amet neque, quis. Amet, eget vulputate
          cursus in eu sit pulvinar et. <br></br>Nibh at sem viverra
          pellentesque hac odio duis a. Urna vitae, at ac et rhoncus. Mauris sit
          accumsan vitae, nibh netus. In elementum pharetra in lacinia nibh. Non
          est eget egestas eu et purus amet. Vitae aliquam sit tincidunt
          pellentesque netus suspendisse vulputate. Dui justo, ac maecenas
          pharetra.
        </div>
        <div style={{ paddingRight: 44 }}>
          <div className="content-pic">
            <img src={GaramMasala} alt="Garam Masala" />
          </div>
          <div className="people-interest">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                paddingRight: 16,
              }}
            >
              <div className="avatar">
                <img src={FirstAvatar} alt="first-avatar" />
              </div>
              <div className="avatar">
                <img src={SecondAvatar} alt="second-avatar" />
              </div>
              <div className="avatar">
                <img src={ThirdAvatar} alt="third-avatar" />
              </div>
            </div>
            <div>
              <div className="people-number">500+</div>
              <div className="people-content">People are interest</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HotelsComponent;
