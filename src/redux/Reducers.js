import { combineReducers } from "redux";

import appReducer from "./app/Reducer";

const Reducers = combineReducers({
  appReducer,
});

export default Reducers;
