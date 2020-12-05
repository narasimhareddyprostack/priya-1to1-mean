import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { incrAction, decrAction } from "./../../redux/counter/counter.actions";

let Counter = () => {
  let x = useSelector((state) => {
    return state.priya;
  });
  let dispatch = useDispatch();

  let incrHandler = () => {
    dispatch(incrAction());
  };

  let decrHandler = () => {
    dispatch(decrAction());
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <p className="h4"> Redux Counter Example</p>
              </div>
              <div className="card-body">
                <h1> Counter Value: {x.counter}</h1>
                <button className="btn btn-success mr-4" onClick={decrHandler}>
                  {" "}
                  -{" "}
                </button>
                <button className="btn btn-info" onClick={incrHandler}>
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Counter;
