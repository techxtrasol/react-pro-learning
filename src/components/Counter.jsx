import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0)
  const [incrementBy, setIncrementBy] = useState(1)
  function handleIcrement() {
    setCount(count + incrementBy)
  }
  function handleDecrement() {
    setCount(count - incrementBy)
  }
  function handleIncrementBy() {
    setIncrementBy(incrementBy + 1)
  }
  function handleDecrementBy() {
    setIncrementBy(incrementBy - 1)
  }
  return (
    <>
      <div>
        <h2>Count Value is: {count} </h2>
        <button onClick={handleIcrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>

        <h3>We are incrementing the value by {incrementBy}</h3>
        <button onClick={handleIncrementBy}>Increase the Value</button>
        <button onClick={handleDecrementBy}>Decrease the Value</button>
      </div>
    </>
  );
}

export default Counter;
