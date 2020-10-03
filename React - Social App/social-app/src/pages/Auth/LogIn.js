import React from "react";
import { Form, Formik } from "formik";
import { TextInputField } from "src/components/generic/TextInput";
import { LoginValidaitonSchema } from "src/validations/schemas/login";
import { Alert, Button, Card, Spinner } from "react-bootstrap";
import { useAuth } from "src/context/AuthContext";
import { Link } from "react-router-dom";
import { Container, StyledCard } from "./styles/LogIn.styled";

const LogIn = () => {
  const { user, login, loading, error } = useAuth();
  console.log("user", user);
  return (
    <StyledCard>
      <Card.Body>
        <Formik
          initialValues={{ username: "", password: "" }}
          onSubmit={async (values, actions) => {
            await login(values);
          }}
          validationSchema={LoginValidaitonSchema}
        >
          {({ isSubmitting, isValid }) => {
            return (
              <Form>
                {isSubmitting && <Spinner animation="border" role="status" />}
                {error && <Alert variant="danger">{error}</Alert>}
                <TextInputField name="username" label="Username" />
                <TextInputField
                  name="password"
                  type="password"
                  label="Password"
                  autoComplete="current-password"
                />
                <Button disabled={!isValid || isSubmitting} type="submit">
                  Login
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Card.Body>
      <Container>
        Don't have an account? <Link to="/signup">Sign Up</Link>
      </Container>
    </StyledCard>
  );
};

export { LogIn };
