import React from "react";
import "./Exhibit.css";

function Exhibit() {
  const latency = 20;
  const ipAddress = "75.2. 66.166";
  return (
    <div className="card">
      <p className="center">Public IP Address : {ipAddress}</p>
      <p className="center">latency : {latency}ms</p>
    </div>
  );
}

export default Exhibit;
