import React, { useState, useEffect } from "react";
import axios from "axios";
import CommentCreate from "./CommentCreate";
import CommentList from "./CommentList";
const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    const res = await axios.get("http://localhost:4002/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);

  return (
    <div>
      {posts &&
        Object.values(posts).map((post) => {
          return (
            <div className="card p-2 my-2">
              <h1 key={post.id}>{post.title}</h1>

              <CommentList comments={post.comments} />
              <CommentCreate postId={post.id} />
            </div>
          );
        })}
    </div>
  );
};

export default PostList;
