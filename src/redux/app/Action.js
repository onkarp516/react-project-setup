import { SET_APP_V, GET_APP_V, CLEAN_APP_V } from "@/redux";

function ReduxSetAppV({ windowTabId, data }) {
  return {
    type: SET_APP_V,
    payload: {
      windowTabId,
      data,
    },
  };
}
function ReduxGetAppV(windowTabId) {
  return {
    type: GET_APP_V,
    payload: windowTabId,
  };
}

function ReduxCleanAppV() {
  return {
    type: CLEAN_APP_V,
    payload: "",
  };
}

export { ReduxSetAppV, ReduxGetAppV, ReduxCleanAppV };
