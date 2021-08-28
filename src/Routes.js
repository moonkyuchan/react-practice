import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { Main } from "./Pages/Main/Main";
// import { Details } from "./Pages/Details/Details";
// import { Counter } from "./velopert/Counter";
// import { Info } from "./velopert/Info";
// import { Top } from "./velopert/Top";
// import Immutable from "./velopert/Immutable";
// import Jsx from "./Official/Jsx";
import Clock from "./Official/Clock";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          {/* <Route exact path="/main" component={Main} /> */}
          {/* <Route exact path="/details" component={Details} /> */}
          {/* <Route exact path="/" component={Counter} /> */}
          {/* <Route exact path="/info" component={Info} /> */}
          {/* <Route exact path="/top" component={Top} /> */}
          <Route exact path="/" component={Clock} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
