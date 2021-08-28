import React from "react";

class SetStateTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, anotherCount: 0 };
  }
  clickCount = () => {
    // this.setState(
    //   { count: this.state.count + 1 },
    //   console.log("first state changed!")
    // );
    // this.setState(
    //   { count: this.state.count + 1 },
    //   console.log("second state changed")
    // );
    this.setState(
      (state) => ({ count: state.count + 1 }),
      console.log("first State Changed!!")
    );
  };

  clickAnotherCount = () => {
    this.setState((prev) => ({ anotherCount: prev.anotherCount + 1 }));
  };

  render() {
    console.log("rendering ....");
    return (
      <>
        <div>{this.state.count}</div>
        <div>{this.state.anotherCount}</div>
        <button onClick={this.clickCount}>count + 1</button>
        <button onClick={this.clickAnotherCount}>Anothercount + 1</button>
      </>
    );
  }
}

export default SetStateTest;
