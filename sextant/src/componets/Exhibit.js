import React from "react";
import "./Exhibit.css";
import IPv4 from "./IPv4";
import IPv6 from "./IPv6";
import Latency from "./Latency";

function Exhibit() {
  // const latency = 20;

  return (
    <div className="card">
      <IPv4 />
      <IPv6 />
      <Latency />
    </div>
  );
}

export default Exhibit;
