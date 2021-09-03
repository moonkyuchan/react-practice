import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    console.log("constructor");
    console.log("생성자 프롭스", props);
  }
  componentDidMount() {
    this.timeID = setInterval(() => this.tick(), 5000);
    console.log("컴디마");
  }

  componentWillUnmount() {
    clearInterval(this.timeID);
    console.log("컴윌언마운트");
  }

  tick() {
    console.log("tick함수");
    this.setState({ date: new Date() });
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Hellow</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export default Clock;
