import React from "react";
import { Form, Formik } from "formik";
import { TextInputField } from "src/components/generic/TextInput";
import { SignupValidaitonSchema } from "src/validations/schemas/signup";
import { Alert, Button, Card, Spinner } from "react-bootstrap";
import { useAuth } from "src/context/AuthContext";
import { Link } from "react-router-dom";
import { Container, StyledCard } from "./styles/LogIn.styled";

const SignUp = () => {
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
          validationSchema={SignupValidaitonSchema}
        >
          {({ isSubmitting, isValid }) => {
            return (
              <Form>
                {isSubmitting && <Spinner animation="border" role="status" />}
                {error && <Alert variant="danger">{error}</Alert>}
                <TextInputField name="name" label="Full Name" />
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
        Already have an account? <Link to="/login">Login</Link>
      </Container>
    </StyledCard>
  );
};

export { SignUp };
