import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main } from "./Pages/Main/Main";
import { Details } from "./Pages/Details/Details";

class Routes extends React.Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route exact path="/" Component={Main} />
          <Route exact path="/Details" Component={Details} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;