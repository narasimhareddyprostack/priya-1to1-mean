import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);
  
  function buttonHandler() {
    setCount(count + 1);
  }
  return (
    <div>
      <h1> Counter Value :{count}</h1>
      <button onClick={buttonHandler}>Submit</button>
    </div>
  );
}

export default Counter;
