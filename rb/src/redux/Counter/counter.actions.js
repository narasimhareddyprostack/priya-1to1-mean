//action types
export const INCR = "INCR";
export const DECR = "DECR";

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

export { incrCounter, decrCounter };
