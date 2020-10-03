import React from "react";
import { useRouteMatch } from "react-router-dom";
import {
  Image,
  UserName,
  Container,
  Bio,
  ProfileImage,
} from "./UserProfile.styled";
import { Row, Col } from "react-bootstrap";
import { posts } from "src/mocks/posts";

const UserProfile = () => {
  //takes the value from the route in the url
  const { params } = useRouteMatch();
  return (
    <Container>
      <Row>
        <Col xs lg="12">
          <Image src={posts[0].user.backgroundImage} alt="Background Picture" />
          <UserName>{params.username}</UserName>
        </Col>
      </Row>
      <Row>
        <Col xs="12" lg="3">
          <ProfileImage src={posts[0].user.avatarId} alt="Profile Image" />
        </Col>
        <Col xs="12" lg="6">
          <Bio>{posts[0].user.bio}</Bio>
        </Col>
      </Row>
    </Container>
  );
};

export { UserProfile };
