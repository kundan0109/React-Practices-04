import { useState } from "react";

const Task01 = () => {
  const [count, setCount] = useState(0);

  function increase() {
    setCount(count + 1);
  }

  function decrease() {
    setCount(count - 1);
  }

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <h1>Counter is {count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

export default Task01;
