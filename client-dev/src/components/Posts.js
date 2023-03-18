import React, { useEffect, useState } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = () => {
    const url = "http://localhost:5000/api/posts";
    axios
      .get(url)
      .then((res) => {
        console.log(`response received as \n ${res.data}`);
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    console.log("in useEffect");
    getPosts();
  }, []);

  return (
    <div>
      <h1>Posts obtained</h1>
      {posts.map((post) => (
        <li>
          {post["title"]} : {post["author"]["name"]}
          <br></br>
          <br></br>
          {/* {post["body"]["blocks"]["deck"]} */}
          {post["deck"]}
          <br></br>
          <br></br>
          <br></br>
        </li>
      ))}
    </div>
  );
};

export default Posts;
