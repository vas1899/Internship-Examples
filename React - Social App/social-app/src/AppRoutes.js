import React from "react";
import { Switch, Route, Link, Redirect } from "react-router-dom";
import { NewsFeed } from "./pages/NewsFeed";
import { UserProfile } from "./pages/UserProfile";
import { SignUp } from "./pages/Auth/SignUp";
import { LogIn } from "./pages/Auth/LogIn";
import { useAuth } from "src/context/AuthContext";

export const AppRoutes = () => {
  const { user } = useAuth();

  if (user) {
    return (
      <div>
        <Link />
        <Switch>
          <Route path="/" exact component={NewsFeed} />
          <Route path="/user/:username" exact component={UserProfile} />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  } else {
    return (
      <div>
        <Link />
        <Switch>
          <Route path="/login" exact component={LogIn} />
          <Route path="/signup" exact component={SignUp} />
          <Redirect to="/login" />
        </Switch>
      </div>
    );
  }
};
