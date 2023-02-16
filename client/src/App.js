import React from "react";
import PostCreate from "./component/PostCreate";
import PostList from "./component/PostList";

const App = () => {
  return (
    <div className="container p-5">
      <h2>Create Post</h2>
      <PostCreate />
      <hr />
      <PostList />
    </div>
  );
};

export default App;
