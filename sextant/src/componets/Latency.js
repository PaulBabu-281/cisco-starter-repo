import React, { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket("ws://127.0.0.1:55455");

function Latency() {
  const [start, setStart] = useState(Date.now());
  const [lag, setLag] = useState();

  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };

    client.onmessage = (message) => {
      setStart(window.performance.now());
      setLag(message.timeStamp);
    };
  }, []);

  return <p className="center">Latency : {start - lag}ms</p>;
}

export default Latency;
