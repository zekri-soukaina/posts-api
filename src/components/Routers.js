import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage/HomePage";
import LoginPage from "../pages/LoginPage/LoginPage";
import PostPage from "../pages/PostPage/PostPage";
import SignupPage from "../pages/SignupPage/SignupPage";
import UserPage from "../pages/UserPage";

export default function Routers() {
  return (
    <div>
      <Switch>
        <Route path="/user/:userId/posts" component={UserPage} />
        <Route path="/post/:id/comments" component={PostPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage} />
        <Route component={HomePage} />
      </Switch>
    </div>
  );
}
