// In here We R Going to design the post Sec
import React from "react";
import "./Post.css";

import Avatar from '@mui/material/Avatar';

function Post() {
  return (
    <div className="post">
      <h3>Username2</h3>

        <Avatar alt="Sharp" src=".." />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />

      <img
        className="post__image"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
        alt=""
      />

      <h4 className="post__text">
        <strong>STAB:</strong> Wow I'm Building a Insta
      </h4>
    </div>
  );
}

export default Post;
