import React from "react";


const CommentList = ({ comments }) => {

  return (
    <ul>
      {Object.values(comments).map((comment) => {
        return <li key={comment.id}> {comment.content} </li>;
      })}
    </ul>
  );
};

export default CommentList;
