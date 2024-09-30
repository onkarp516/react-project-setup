import { SET_APP_V, CLEAN_APP_V, GET_APP_V } from "@/redux";
const initialState = [];

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_APP_V:
      let res_d = state.filter(
        (item) => item.windowTabId != action.payload.windowTabId
      );

      return [...res_d, action.payload];
      break;

    case GET_APP_V:
      return state.filter((item) => item.windowTabId == action.payload);
      break;

    case CLEAN_APP_V:
      return [];
      break;

    default:
      return state;
  }
}

export default appReducer;
