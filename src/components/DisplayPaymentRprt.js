import { Grid } from "ag-grid-community";
import React from "react";
import DisplayeGrid from "./DisplayeGrid";
import Row from "./Row";

export default function DisplayPaymentRprt(props) {
  let dateRange = `${props.beginDate} - ${props.endDate}`;
  return (
    <div className="back">
      <div className="menu"></div>
      <div className="content">
        <div className="content-inside">
          <div className="upper-box">
            <button>Close Tab</button>
            <br />
            <a href="">Help</a>
            <br />
          </div>
          <div className="dmiddle-main">
            <div className="dmiddle">
              <div>
                <label style={{ marginRight: "10px" }} htmlFor="rebate-program">
                  Rebate Program:
                </label>
                <input type="text" value={props.program} disabled />
              </div>
              <div>
                <label style={{ marginRight: "10px" }} htmlFor="time-period">
                  Time Period:
                </label>
                <input type="text" value={props.time} disabled />
              </div>
            </div>

            <div className="dmiddle2">
              <div>
                <label style={{ marginRight: "25px" }} htmlFor="rebate-option">
                  Rebate Option:
                </label>
                <input type="text" value={props.option} disabled />
              </div>
              <div>
                <label style={{ marginRight: "10px" }} htmlFor="date-range">
                  Date Range:
                </label>
                <input type="text" value={dateRange} disabled />
              </div>
            </div>
          </div>
          <Row />
        </div>
      </div>
    </div>
  );
}
