import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import cors from "cors";

const API_URL = "http://localhost:5000/api";

const corsOptions = {
  origin: "http://localhost:3000", // change this to match the origin of your frontend app
};

const client = axios.create({
  baseURL: API_URL,
});

client.interceptors.request.use((config) => {
  config.headers["Content-Type"] = "application/json";
  return config;
});

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get("http://localhost:5000/api/posts");
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <h1>Blog Posts</h1>
      {posts.length === 0 ? (
        <p>Loading...</p>
      ) : (
        posts.map((post) => (
          <div key={post._id}>
            {<h2> {post.author.name} </h2>}
            {<h2> {post.body.blocks[0].text} </h2>}
            {/* <h2>{post.body}</h2> */}
            {/* <p>{post.body}</p> */}
          </div>
        ))
      )}
    </div>
  );
}

export default cors(corsOptions)(App);
