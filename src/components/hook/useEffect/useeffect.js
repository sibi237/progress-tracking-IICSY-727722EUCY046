import React, { useEffect, useState } from "react";

function Effect() {
  const [count, setCount] = useState(0);
  const [two, setTwo] = useState(0);
  useEffect(() => {
    setTwo(() => count * 2);
  }, [count]);
  const handle = () => {
    setCount(count + 1);
  };
  return (
    <>
      <p>{count}</p>
      <p>{two}</p>
      <button onClick={handle}>click me</button>
    </>
  );
}

export default Effect;
