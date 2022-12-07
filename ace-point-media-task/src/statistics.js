import React from "react";
import StatisticPic from "../src/images/statistic-group.png";
const Statistics = () => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className="statistics">
          <div
            className="statistics-header"
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 16,
              justifyContent: "space-around",
            }}
          >
            <div className="statistics-header-content">Total ₹1.5cr</div>
            <div className="statistics-border"></div>
            <div className="statistics-header-content">Now ₹80 lac</div>
          </div>
          <div style={{ maxWidth: 510 }}>
            <img src={StatisticPic} alt="statistic" />
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: 42,
          paddingBottom: 78,
        }}
      >
        <button>
          <div className="button-context">Place Bid</div>
        </button>
      </div>
    </div>
  );
};
export default Statistics;
