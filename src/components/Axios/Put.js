import React, { useEffect, useState } from "react";
import axios from "axios";
function Put() {
  const [bucket, setBucket] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((temp) => {
      setBucket(temp.data);
    });
  }, []);
  const updateValue = {
    title: "Hello",
  };
  const handleUpdate = () => {
    const id = bucket[0].id;
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${id}`, updateValue)
      .then((temp) => {
        setBucket(temp.data);
      });
  };
  return (
    <div>
      <button onClick={handleUpdate}>update</button>
      <ol>
        {bucket.map((item, index) => (
          <li key={index}>
            <p>User Id: {item.userId}</p>
            <br />
            <p>Id : {item.id}</p>
            <br />
            <p>Title : {item.title}</p>
            <br />
            <p>Body : {item.body}</p>
            <br />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default Put;
