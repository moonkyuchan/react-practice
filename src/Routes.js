import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

<<<<<<< HEAD
// import { Main } from "./Pages/Main/Main";
// import { Details } from "./Pages/Details/Details";
import { Counter } from "./velopert/Counter";
import { Info } from "./velopert/Info";
import { Top } from "./velopert/Top";
=======
import { Todolist } from "./fastcampus/Todolist";
>>>>>>> b439e62dce706d16ebb708788cec09395940da1d

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
<<<<<<< HEAD
          {/* <Route exact path="/main" component={Main} /> */}
          {/* <Route exact path="/details" component={Details} /> */}
          <Route exact path="/" component={Counter} />
          <Route exact path="/info" component={Info} />
          <Route exact path="/top" component={Top} />
=======
          <Route exact path="/todolist" component={Todolist} />
>>>>>>> b439e62dce706d16ebb708788cec09395940da1d
        </Switch>
      </Router>
    );
  }
}

export default Routes;
