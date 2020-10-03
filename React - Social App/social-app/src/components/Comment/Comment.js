import React from "react";
import { CommnetBar } from "./CommentBar";
import {
  ArrowUp,
  ArrowDown,
  Container,
  StyledButton,
} from "./styles/Comment.styled";

const Comment = ({ post }) => {
  return (
    <div>
      <div avatarId={post.user.avatarId} width="50px" height="50px" />

      <div>
        <div>{post.user.name}</div>
        <div>{post.content}</div>
      </div>

      <Container>
        <CommnetBar post={post} />
      </Container>
    </div>
  );
};

export { Comment };
