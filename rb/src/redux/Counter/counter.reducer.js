import { INCR, DECR } from "./counter.actions";
export const counterKey = "counterCard";
let defaultState = {
  counter: 5,
};
let counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCR:
      return {
        counter: state.counter + 1,
      };
    case DECR:
      return {
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
export default counterReducer;
