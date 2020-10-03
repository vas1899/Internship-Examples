import React from "react";
import { Container } from "react-bootstrap";

const MainContent = ({ children, ...rest }) => {
  return (
    <Container fluid style={{ paddingTop: 70 }} {...rest}>
      {children}
    </Container>
  );
};

export { MainContent };
