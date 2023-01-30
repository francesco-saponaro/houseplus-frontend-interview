import constants from "../constants/constants";

// Chart Data reducer.
// The reducer sends the payload coming from the action to the store.
export const chartDataReducer = (state = { chartData: [] }, action) => {
  // So we check which action has been dispatched to the reducer and update
  // the state depending on the action type
  switch (action.type) {
    // If this action type dispatched we set the chartData state to an empty array
    case constants.CHART_DATA_REQUEST:
      return {
        loading: true,
        chartData: [],
      };
    // If this action type dispatched we set the chartData state action payload
    case constants.GET_CHART_DATA:
      return {
        loading: false,
        chartData: action.payload,
      };
    // If this action type dispatched we get the error returning from the action payload
    case constants.CHART_DATA_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    // If this action type dispatched we clear the state error
    case constants.CLEAR_ERRORS:
      return {
        ...state,
        error: null,
      };
    default:
      return state;
  }
};
