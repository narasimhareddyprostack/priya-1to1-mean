const INCR = "INCR";
const DECR = "DECR";
let incrAction = () => {
  return {
    type: INCR,
  };
};
function decrAction() {
  return {
    type: DECR,
  };
}
export { INCR, DECR, decrAction, incrAction };
