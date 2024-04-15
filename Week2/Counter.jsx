import { useState } from 'react'
import './App.css'

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(prevCount => prevCount + 1);
    console.log("Increase button clicked");
  };

  const onDecrease = () => {
    setCount(prevCount => prevCount - 1);
    console.log("Decrease button clicked");
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </>
  );
};

export default Counter;
