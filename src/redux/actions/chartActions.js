// import axios from "axios";
import constants from "../constants/constants";

// This action creator function will dispatch actions to fetch chart data from API,
export const chartDataAction =
  () => /* "async" if using axios */ (dispatch) => {
    // Middleware function
    // This action will set store chart data to an empty array and loading to true.
    dispatch({ type: constants.CHART_DATA_REQUEST });

    // Api URL
    let apiUrl = "https://api-houseplus-test.herokuapp.com/testDev/mockdata";

    // Fetch chart data
    // AXIOS EXAMPLE
    // try {
    //   dispatch({ type: constants.CHART_DATA_REQUEST });
    //   const { data } = await axios.get(apiUrl); // I could chain the catch method here also instead of using try/catch
    //   dispatch({
    //     type: constants.GET_CHART_DATA,
    //     payload: data,
    //   });
    // } catch (error) {
    //   dispatch({
    //     type: constants.CHART_DATA_FAIL,
    //     payload: error,
    //   });
    // }

    // FETCH API EXAMPLE
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Resolve
        dispatch({
          type: constants.GET_CHART_DATA,
          payload: data,
        });
      })
      .catch((error) => {
        // Reject
        dispatch({
          type: constants.CHART_DATA_FAIL,
          payload: error,
        });
      });
  };

// If this action type dispatched since we just want to clear the errors,
// we simply return the state array and set the errors to null
export const clearErrors = () => (dispatch) => {
  dispatch({ type: constants.CLEAR_ERRORS });
};
