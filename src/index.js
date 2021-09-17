import React from "react";
import ReactDOM from "react-dom";
// import Routes from "./Routes";
// import Clock from "./Official/Clock";
// import SetStateTest from "./Official/SetStateTest";
// import ThisTest from "./Official/ThisTest";
// import Hooks from "./Official/Hooks";
// import BasicApp from "./Basic/BasicApp";
// import VelopertApp from "./velopert/VelopertApp";
// import StyledTest from "./velopert/Styled-Components/StyledTest";
import VelopertTodoList from "./velopert/TodoList/VelopertTodoList";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./Store/Reducers";

const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <VelopertTodoList />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
