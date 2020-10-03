import React from "react";
import { Image, Text, Container } from "./PostContent.styled";

const PostContent = ({ post }) => {
  return (
    <Container>
      <Image src={post.mediaId} alt="Image" />
      <Text>{post.content}</Text>
    </Container>
  );
};

export { PostContent };
