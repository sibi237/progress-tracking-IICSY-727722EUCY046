import React, { createContext, useState, useContext } from "react";
const UserContext = createContext();
const Component1 = () => {
  const [name, setName] = useState("Sivaraman");
  return (
    <UserContext.Provider value={name}>
      <Component2 />
    </UserContext.Provider>
  );
};
const Component2 = () => {
  const user = useContext(UserContext);
  return <h2>{user}</h2>;
};
function pract() {
  return (
    <div>
      <Component1 />
    </div>
  );
}

export default pract;
