import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Todolist } from "./fastcampus/Todolist";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/todolist" component={Todolist} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
