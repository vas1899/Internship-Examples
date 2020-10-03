import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useAuth } from "src/context/AuthContext";
import logo from "./logo.png";

const AppBar = () => {
  const { user, logOut } = useAuth();

  if (user) {
    return (
      <Navbar fixed="top" bg="dark" variant="dark" collapseOnSelect expand="sm">
        <Nav variant="pills" className="container-fluid">
          <Navbar.Brand eventKey="socialy" as={NavLink} to="/" exact>
            <img src={logo} height="30px" alt="logo" />
            Socially
          </Navbar.Brand>
          <Nav.Link eventKey="newsfeed" as={NavLink} to="/" exact>
            News Feed
          </Nav.Link>
          <Nav.Link eventKey="user" as={NavLink} to="/user/user" exact>
            User
          </Nav.Link>
          <Nav.Link
            className="ml-auto"
            eventKey="logout"
            as={NavLink}
            to="/signout"
            onClick={logOut}
            exact
          >
            Logout
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  } else {
    return (
      <Navbar fixed="top" bg="dark" variant="dark" collapseOnSelect expand="sm">
        <Nav variant="pills" className="container-fluid">
          <Nav.Link
            className="ml-auto"
            eventKey="login"
            as={NavLink}
            to="/login"
            exact
          >
            Login
          </Nav.Link>
          <Nav.Link eventKey="signup" as={NavLink} to="/signup" exact>
            Sign Up
          </Nav.Link>
        </Nav>
      </Navbar>
    );
  }
};

export { AppBar };
