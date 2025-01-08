import React from "react";
import PropsOutput from "./PropsOutput";

function PropsInput() {
  const sports = ["teams", "players", "coaches", "fans"];

  return(
    <>
      <h2>Props Input</h2>
      <PropsOutput sports={sports}></PropsOutput>;

    </>
  )
}

export default PropsInput;
