import React from "react";

let Counter = () => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-light bg-light">Redux</nav>
      <div className="container mt-5">
        <div className="row">
          <div className="card">
            <div className="card-header">
              <p className="h3"> Redux Example -1 </p>
            </div>
            <div className="card-body">
              <h1> Counter {0}</h1>
              <button className="btn btn-success btn-sm mr-3"> - </button>
              <button className="btn btn-success btn-sm"> + </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
