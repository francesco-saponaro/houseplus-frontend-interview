// Redux imports
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers to be passed into combineReducer method
import { chartDataReducer } from "./redux/reducers/chartReducers";

// This variable contains all reducers combined
// The reducers update the store with whatever action was dispatched
const reducers = combineReducers({
  chartData: chartDataReducer,
});

let initialState = {};

// We need to pass thunk into the store to be able to perform async requests when
// dispatching actions to the reducer, like for example grabbing data from the backend or API
const middleware = [thunk];

// Create store with reducers, initial state and middleware
const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
