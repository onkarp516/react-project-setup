import { createStore } from "redux";
import Reducers from "./Reducers";

function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("state", serializedState);
  } catch (e) {
    console.log(e);
  }
}
function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState != null) return JSON.parse(serializedState);
  } catch (e) {
    console.log(e);
  }
}

const persistState = loadFromLocalStorage();
// const store = createStore(
//   Reducers,
//   persistState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
// store.subscribe(() => {
//   // console.log("subscribe");
//   saveToLocalStorage(store.getState());
// });

const store = createStore(
  Reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
