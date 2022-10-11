import React from "react";
import "./Exhibit.css";
import IPv4 from "./IPv4";
import IPv6 from "./IPv6";

function Exhibit() {
  const latency = 20;

  return (
    <div className="card">
      <IPv4 />
      <IPv6 />
      <p className="center">latency : {latency}ms</p>
    </div>
  );
}

export default Exhibit;
