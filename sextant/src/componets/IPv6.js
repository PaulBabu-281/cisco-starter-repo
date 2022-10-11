import React, { useEffect, useState } from "react";

function IPv6() {
  useEffect(() => {
    fetch("https://api64.ipify.org/?format=json")
      .then((response) => response.json())
      .then((data) => {
        setipv6(data.ip);
      });
  }, []);
  const [ipv6, setipv6] = useState(" ");

  return <p className="center">IPv6 : {ipv6}</p>;
}

export default IPv6;
