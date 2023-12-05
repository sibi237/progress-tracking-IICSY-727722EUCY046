import React from 'react';

const MyListComponent = () => {
  const myArray = ['Sabari', 'Shashvant', 'Tharun'];
  const listItems=myArray.map((item,index)=>(
  <li key={index}>{item}</li>
  ));

  return (
    <div>
      <h2>List Example</h2>
      <ul>{listItems}</ul>
    </div>
  );
};

export default MyListComponent;
