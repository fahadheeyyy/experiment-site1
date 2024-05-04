import React from "react";

const PostUI = ({ heading, title, body }) => {
  return (
    <div className="post">
      <p>{heading}</p>
      <h1> {title} </h1>
      <p> {body} </p>
    </div>
  );
};

export default PostUI;
