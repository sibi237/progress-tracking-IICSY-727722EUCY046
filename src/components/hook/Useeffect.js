import React, { useState, useEffect } from 'react';

function ExampleComponent() {
 const [count, setCount] = useState(0);

 const updateTitle = () => {
    document.title = `Count: ${count}`;
 };

 useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return (
      <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>I've rendered {count} times!</h1>;
    </div>
 );
}

export default ExampleComponent;