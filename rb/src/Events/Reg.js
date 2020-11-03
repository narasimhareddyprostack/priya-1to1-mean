import React from "react";

function Reg() {
  function display() {
    alert("Working fine");
  }
  return (
    <div>
      <h1> Welcome to PSA</h1> <hr />
      <button onClick={display}> Submit</button>
    </div>
  );
}
export default Reg;
//Event Hanlder - should be function, not function call in functional Comp

