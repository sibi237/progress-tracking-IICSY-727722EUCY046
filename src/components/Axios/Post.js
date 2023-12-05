import React, { useEffect, useState } from "react";
import axios from "axios";
function Post() {
  const [bucket, setBucket] = useState([]);
  const postData = {
    userId: 101,
    id: 101,
    title: "This is 101 title",
    body: "This is 101 Body",
  };

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((temp) => {
      console.log(temp.data);
      setBucket(temp.data);
    });
  },[]);
  const changeDetails = () => {
    axios.post("https://jsonplaceholder.typicode.com/posts", postData).then((temp)=>{
        setBucket([...bucket,temp.data]);
    });
  };
  return (
    <div>
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
      <button onClick={changeDetails}>click to update</button>
    </div>
  );
}

export default Post;
