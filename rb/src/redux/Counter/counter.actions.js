//action types
const INCR = "INCR";
const DECR = "DECR";

let incrCounter = () => {
  return {
    type: "INCR",
    payload: "Dummy",
  };
};
let decrCounter = () => {
  return {
    type: "DECR",
    payload: "Dummy",
  };
};

export { incrCounter, decrCounter, INCR, DECR };
