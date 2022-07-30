import React, { useState, useEffect } from "react";

export default function AfterReander() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You Cliked ${count} Times`);
  }, [count]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>IncerseCount</button>
    </>
  );
}
