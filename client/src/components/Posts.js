import React from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    console.log("Inside useEffect");
    const res = await axios.get("http://localhost:5000/api/posts");
    console.log(res.data);
    setPosts(res.data);
  }, []);

  return (
    <div>
      <div>Posts obtained</div>
      {posts.map((post) => post["author"]["name"])}
    </div>
  );
};

export default Posts;
