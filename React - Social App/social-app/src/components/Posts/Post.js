import React from "react";
import { PostTitle } from "./PostTitle";
import { PostContent } from "./PostContent";
import styled from "styled-components";
import { PostButtons } from "./PostButtons";
import { Comment } from "src/components/Comment/Comment";

const Container = styled.div`
  display: block;
  border: 0.025rem solid grey;
  border-radius: 15px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  width: 60rem;
  padding: 1rem;
`;

const Post = ({ post }) => {
  return (
    <Container>
      <PostTitle post={post} />
      <PostContent post={post} />
      <PostButtons post={post} />
      <Comment post={post} />
    </Container>
  );
};

export { Post };
