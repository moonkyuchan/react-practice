import React from "react";
import Clock from "./Clock";

function Tick() {
  return <Clock date={new Date()} />;
}

export default Tick;
