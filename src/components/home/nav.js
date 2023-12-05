import React, { useState } from "react";
import Details from "./signUp";
import "./App.css";

const App = () => {
  const [showComponenet, setShow] = useState(true);
  const handle = () => {
    setShow(false);
  };
  return (
    <body>
      {showComponenet ? (
        <button className="add" onClick={handle}>
          signUp
        </button>
      ) : (
        <Details />
      )}
    </body>
  );
};

export default App;
