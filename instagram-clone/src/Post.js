// In here We R Going to design the post Sec
import React from "react";
import "./Post.css";

import Avatar from '@mui/material/Avatar';

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <div className="post__header">
        <Avatar 
          className="post__avatar" 
          alt="Sharp" 
          src=".." 
        />
        <h3>{username}</h3>
      </div>
 
      <img
        className="post__image"
        src={imageUrl}
        alt="/"
      />

      <h4 className="post__text">
        <strong>{username} </strong>{caption}</h4>
    </div>
  );
}

export default Post;
