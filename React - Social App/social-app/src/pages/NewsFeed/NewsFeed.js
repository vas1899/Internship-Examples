import React from "react";
import { Post } from "src/components/Posts";
import { posts } from "src/mocks/posts";
import { PostsList } from "src/components/Posts";
import axios from "axios";

axios
  .get("/users/me")
  .then((res) => {
    console.log(res);
  })
  .catch((res) => {
    console.error(res);
  });

const NewsFeed = () => {
  return <PostsList />;
};

export { NewsFeed };
