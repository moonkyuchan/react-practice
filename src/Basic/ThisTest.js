import React from "react";

class ThisTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person1: { name: "moon", age: 32 },
      person2: { name: "park", age: 28 },
    };
  }
  render() {
    return (
      <>
        <h1>{this.state.person1.name}</h1>
        <h1>{this.state.person2.age}</h1>
      </>
    );
  }
}

export default ThisTest;
