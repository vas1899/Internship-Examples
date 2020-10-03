import React from "react";
import {
  Container,
  ArrowDown,
  ArrowUp,
  StyledButton,
} from "./PostButtons.styled";

const PostButtons = ({ post }) => {
  return (
    <Container>
      <StyledButton variant="primary">
        <ArrowUp onClick={((post.liked = true), (post.disliked = false))} />{" "}
        {post.liked ? post.likesCount + 1 : post.likesCount}
      </StyledButton>
      <StyledButton variant="primary">
        <ArrowDown onClick={((post.disliked = true), (post.liked = false))} />{" "}
        {post.dislikesCount ? post.dislikesCount + 1 : post.dislikesCount}
      </StyledButton>
    </Container>
  );
};
export { PostButtons };
