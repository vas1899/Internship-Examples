import React from "react";
import { Post } from "src/components/Posts";
import { posts } from "src/mocks/posts";

function List() {
  const listPosts = posts.map((post) => <Post post={post} />);
  return (
    <div>
      <li> {listPosts}</li>
    </div>
  );
}

function PostsList() {
  return <ul>{<List />}</ul>;
}

export { PostsList };
