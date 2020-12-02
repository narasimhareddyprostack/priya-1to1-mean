import Counter from "./../../HEx/Counter";
let initialState = {
  counter: 0,
};

counterReducer = (state = initialState, action) => {
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
