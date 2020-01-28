import React from "react";
import Post from "./Post/Post";

import avatar from "../../assets/avatar.jpg";
import img from "../../assets/cat.jpeg";

const COMMENTS = ["test", "testtest", "adsadwqdsadqw"];

const Posts = () => {
  return (
    <>
      <Post
        name={"Basya"}
        avatar={avatar}
        img={img}
        isLiked
        likesNumber="123442"
        comments={COMMENTS}
      />
      <Post
        name={"Basya"}
        avatar={avatar}
        img={img}
        isLiked
        likesNumber="23423534"
        comments={COMMENTS}
      />
    </>
  );
};

export default Posts;
