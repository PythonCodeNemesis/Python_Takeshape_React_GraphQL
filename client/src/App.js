import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { getPosts } from "./Api";
function App() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };
    fetchPosts();
  }, []);
  return (
    <Router>
      <div className="App">
        <h1>Blog Posts</h1>
        <Route exact path="/">
          {posts.map((post) => (
            <div key={post._id}>
              <h2>{post.author.name}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </Route>
      </div>
    </Router>
  );
}
export default App;
