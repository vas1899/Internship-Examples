import React from "react";
import { Link } from "react-router-dom";
import { UserProfile } from "src/pages/UserProfile";
import {
  Container,
  SubContainer,
  ProfilePicture,
  ProfileName,
  Title,
  StyledLink,
} from "./PostTitle.styled";

const PostTitle = ({ post }) => {
  const username = post.user.name;
  const thumbnail = post.user.avatarId;
  const title = post.title;
  return (
    <Container>
      <ProfilePicture src={thumbnail} alt="ProfilePicture" />
      <SubContainer>
        <StyledLink to={{ pathname: `/user/${username}` }}>
          <ProfileName>{username}</ProfileName>
        </StyledLink>
        <Title>{title}</Title>
      </SubContainer>
    </Container>
  );
};

export { PostTitle };
