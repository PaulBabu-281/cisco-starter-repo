import React, { useEffect, useState } from "react";

function IPv4() {
  useEffect(() => {
    fetch("https://api.ipify.org/?format=json")
      .then((response) => response.json())
      .then((data) => {
        setipv4(data.ip);
      });
  }, []);
  const [ipv4, setipv4] = useState(" ");

  return <p className="center">IPv4 : {ipv4}</p>;
}

export default IPv4;
