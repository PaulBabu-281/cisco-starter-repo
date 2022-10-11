import React, { useEffect, useState } from "react";
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket("ws://127.0.0.1:55455");

function Latency() {
  const [lag, setLag] = useState();

  useEffect(() => {
    client.onopen = () => {
      console.log("WebSocket Client Connected");
    };

    client.onmessage = (message) => {
      setLag(window.performance.now() - message.timeStamp);
    };
  }, []);

  return <p className="center">Latency : {lag}ms</p>;
}

export default Latency;
