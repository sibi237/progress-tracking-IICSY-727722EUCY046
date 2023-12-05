import React, { useState } from "react";

const Component1 = () => {
 const [user, setUser] = useState("sabari");

 return (
    <div>
      <h1>{`Hello ${user}!`}</h1>
      <Component2 user={user} />
    </div>
 );
};

const Component2 = ({ user }) => {
 return (
    <div>
      <h1>Component 2</h1>
      <Component3 user={user} />
    </div>
 );
};

const Component3 = ({ user }) => {
 return (
    <div>
      <h1>Component 3</h1>
      <Component4 user={user} />
    </div>
 );
};

const Component4 = ({ user }) => {
 return (
    <div>
      <h1>Component 4</h1>
      <Component5 user={user} />
    </div>
 );
};

const Component5 = ({ user }) => {
 return (
    <div>
      <h1>Component 5</h1>
      <h2>{`Hello ${user} again!`}</h2>
    </div>
 );
};
export default Component1;