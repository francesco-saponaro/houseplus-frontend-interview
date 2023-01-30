// React imports
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Component imports
import { LineChart, Loader } from "./components";

// Actions imports
import { chartDataAction, clearErrors } from "./redux/actions/chartActions";

// Styles imports
import "./App.scss";

function App() {
  // We extract data from the state chartData with the useSelector hook
  const { chartData, loading, error } = useSelector((state) => state.chartData);

  // This useDispatch hook returns a reference to the redux dispatch method
  const dispatch = useDispatch();

  // Fetch data from API
  useEffect(() => {
    dispatch(chartDataAction());
  }, [dispatch]);

  useEffect(() => {
    // If error log it and and clear error from state
    if (error) {
      console.log(error);
      dispatch(clearErrors());
    }
  }, [dispatch, error]);

  // Loader
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="App">
      <LineChart chartData={chartData} />
    </div>
  );
}

export default App;
