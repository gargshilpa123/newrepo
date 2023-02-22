import React, { useState } from "react";
// import { Link } from "react-router-dom";
import DisplayPaymentRprt from "./DisplayPaymentRprt";

export default function ReqPaymentRprt() {
  const [plan, setPlan] = useState("Medicaid"); //initial value will be coming from the props
  const [payment, setPayment] = useState(false); //initial value will be coming from the props
  const [displayReq, setDisplayReq] = useState(true);
  const [displayPay, setDisplayPay] = useState(false);
  const [program, setProgram] = useState("");
  const [time, setTime] = useState("Payment Date Range");
  const [option, setOption] = useState("");
  const [beginDate, setBeginDate] = useState("");
  const [endDate, setEndDate] = useState("");
  return (
    <>
      {displayReq && (
        <>
          <div className="back">
            <div className="menu"></div>
            <div className="content">
              <div className="content-inside">
                <div className="upper-box">
                  <button>Close Tab</button>
                  <br />
                  <a href="">Help</a>
                  <br />
                  <button
                    onClick={() => [setDisplayPay(true), setDisplayReq(false)]}
                  >
                    Search
                  </button>
                </div>
                <div className="middle-box">
                  <fieldset className="plan">
                    <legend>Plan Type</legend>
                    <div className="float1">
                      <input
                        onClick={(e) => setPlan(e.target.value)}
                        type="radio"
                        id="Medicaid"
                        name="paymentSummary"
                        value="Medicaid"
                        style={{
                          fontSize: "14px",
                          fontWeight: "normal",
                          color: "#274463",
                        }}
                      />
                      <label htmlFor="Medicaid">Medicaid</label>
                    </div>
                    <div className="float2">
                      <input
                        onClick={(e) => setPlan(e.target.value)}
                        type="radio"
                        id="Commercial"
                        name="paymentSummary"
                        value="Commercial"
                        style={{
                          fontSize: "14px",
                          fontWeight: "normal",
                          color: "#274463",
                        }}
                      />
                      <label htmlFor="Commercial">Commercial</label>
                    </div>

                    <div className="float3">
                      <input
                        onClick={(e) => setPlan(e.target.value)}
                        type="radio"
                        id="State"
                        name="paymentSummary"
                        value="State"
                        style={{
                          fontSize: "14px",
                          fontWeight: "normal",
                          color: "#274463",
                        }}
                      />
                      <label htmlFor="State">State</label>
                    </div>
                    <div className="float4">
                      <input
                        onClick={(e) => setPlan(e.target.value)}
                        type="radio"
                        id="Suplement"
                        name="paymentSummary"
                        value="Supplement"
                        style={{
                          fontSize: "14px",
                          fontWeight: "normal",
                          color: "#274463",
                        }}
                      />
                      <label htmlFor="Supplement">Supplement</label>
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend>Rebate Program</legend>
                    {plan === "Medicaid" && (
                      <select
                        style={{ width: "50%" }}
                        onChange={(e) => setProgram(e.target.value)}
                      >
                        <option value="Select">Select</option>
                        <option value="Medicaid1">Medicaid1</option>
                        <option value="Medicaid2">Medicaid2</option>
                        <option value="Medicaid3">Medicaid3</option>
                        <option value="Medicaid4">Medicaid4</option>
                        <option value="Medicaid5">Medicaid5</option>
                      </select>
                    )}
                    {plan === "Commercial" && (
                      <select onChange={(e) => setProgram(e.target.value)}>
                        <option value="Select">Select</option>
                        <option value="Commercial1">commercial1</option>
                        <option value="Commercial2">commercial2</option>
                        <option value="Commercial3">commercial3</option>
                        <option value="Commercial4">commercial4</option>
                        <option value="Commercial5">commercial5</option>
                      </select>
                    )}
                    {plan === "State" && (
                      <select onChange={(e) => setProgram(e.target.value)}>
                        <option value="Select">Select</option>
                        <option value="State1">State1</option>
                        <option value="State2">State2</option>
                        <option value="State3">State3</option>
                        <option value="State4">State4</option>
                        <option value="State5">State5</option>
                      </select>
                    )}
                    {plan === "Suplement" && (
                      <select onChange={(e) => setProgram(e.target.value)}>
                        <option value="Select">Select</option>
                        <option value="Suplement1">Suplement1</option>
                        <option value="Suplement2">Suplement2</option>
                        <option value="Suplement3">Suplement3</option>
                        <option value="Suplement4">Suplement4</option>
                        <option value="Suplement5">Suplement5</option>
                      </select>
                    )}
                  </fieldset>
                  <fieldset disabled={payment ? true : false}>
                    <legend>Rebate Quater Option</legend>
                    <input
                      onClick={(e) => [setOption(e.target.value)]}
                      type="radio"
                      id="DRAMSInv"
                      name="quaterOption"
                      value="DRAMS"
                      style={{
                        fontSize: "14px",
                        fontWeight: "normal",
                        color: "#274463",
                      }}
                    />
                    <label htmlFor="DRAMSInv">DRAMS Invoice Start Quater</label>

                    <input
                      onClick={(e) => [setOption(e.target.value)]}
                      type="radio"
                      id="All"
                      name="quaterOption"
                      value="All"
                      style={{
                        fontSize: "14px",
                        fontWeight: "normal",
                        color: "#274463",
                      }}
                    />
                    <label htmlFor="All">All</label>
                    <br />
                  </fieldset>
                </div>
                <fieldset className="time-period">
                  <legend>Time Period</legend>
                  <input
                    onClick={(e) => [setPayment(true), setTime(e.target.value)]}
                    type="radio"
                    id="PaymentDateRange"
                    name="timePeriod"
                    value="PaymentDateRange"
                    style={{
                      fontSize: "14px",
                      fontWeight: "normal",
                      color: "#274463",
                    }}
                  />
                  <label
                    style={{ marginRight: "20px" }}
                    htmlFor="PaymentDateRange"
                  >
                    Payment Date Range
                  </label>
                  Begin :
                  <input
                    onSelect={(e) => setBeginDate(e.target.value)}
                    type="date"
                    style={{
                      height: "34px",
                      marginLeft: "20px",
                      marginRight: "20px",
                    }}
                  />
                  End :
                  <input
                    onSelect={(e) => setEndDate(e.target.value)}
                    type="date"
                    style={{ height: "34px", marginLeft: "20px" }}
                  />
                  <br />
                  <input
                    onClick={(e) => [
                      setPayment(false),
                      setTime(e.target.value),
                    ]}
                    type="radio"
                    id="QTR"
                    name="timePeriod"
                    value="QTR"
                    style={{
                      fontSize: "14px",
                      fontWeight: "normal",
                      color: "#274463",
                    }}
                  />
                  <label htmlFor="QTR">QTR</label>
                  <br />
                  <input
                    onClick={(e) => [
                      setPayment(false),
                      setTime(e.target.value),
                    ]}
                    type="radio"
                    id="year"
                    name="timePeriod"
                    value="year"
                    style={{
                      fontSize: "14px",
                      fontWeight: "normal",
                      color: "#274463",
                    }}
                  />
                  <label htmlFor="year">Year</label>
                  <br />
                  <select name="year" id="year">
                    <option value="Select">Select</option>
                    <option value="Calendar">Calendar</option>
                    <option value="Fiscal Year">Federal Fiscal</option>
                    <option value="State Year">State Fiscal</option>
                  </select>
                </fieldset>
                <div className="search">
                  <button
                    onClick={() => [setDisplayPay(true), setDisplayReq(false)]}
                  >
                    Search
                  </button>
                  {/* <button><Link onClick={() => [<DisplayPaymentRprt  test={"for testing"}/>,setDisplayReq(false)]} className="nav-link" to="/payment">Search</Link></button>  */}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {displayPay && (
        <DisplayPaymentRprt
          program={program}
          time={time}
          option={option}
          beginDate={beginDate}
          endDate={endDate}
        />
      )}
    </>
  );
}
