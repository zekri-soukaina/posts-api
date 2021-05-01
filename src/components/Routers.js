import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../HomePage/HomePage";

export default function Routers() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}
