import React, { useState } from "react";
import {
  ArrowUp,
  ArrowDown,
  Container,
  StyledButton,
  AddBar,
  SubContainer,
} from "./styles/Comment.styled";

function CommentForm({ addComment }) {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    //prevent browser from refresh
    e.preventDefault();
    //if there is no value in the text box, to not add it
    if (!value) return;
    addComment(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <AddBar
        type="text"
        className="comment-task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

function Comment({ comment, index, deleteComment, post }) {
  return (
    <SubContainer>
      {comment.text}
      <StyledButton onClick={() => deleteComment(index)}>Delete</StyledButton>
      <StyledButton>
        <ArrowUp />0
      </StyledButton>

      <StyledButton>
        <ArrowDown />0
      </StyledButton>
    </SubContainer>
  );
}

function CommnetBar({ post }) {
  const [comments, setComments] = useState([]);
  /////////  ADD ////////
  const addCommentTask = (text) => {
    const newComments = [...comments, { text }];
    setComments(newComments);
  };
  //////////  DELETE  ///////
  const deleteComment = (index) => {
    const newComments = [...comments];
    newComments.splice(index, 1);
    setComments(newComments);
  };
  return (
    <div>
      <Container>
        {comments.map((comment, index) => (
          <Comment
            key={index}
            index={index}
            comment={comment}
            deleteComment={deleteComment}
            post={post}
          />
        ))}
      </Container>

      <CommentForm addComment={addCommentTask} />
    </div>
  );
}
export { CommnetBar };
