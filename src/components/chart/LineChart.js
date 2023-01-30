// React imports
import React, { useState } from "react";
import ReactDomServer from "react-dom/server";
import Chart from "react-apexcharts";

// Component imports
import Modal from "../modal/Modal";
import Tooltip from "../utils/Tooltip";

// Chart component
const LineChart = ({ chartData }) => {
  // Data variables to fill chart
  const months = chartData?.data?.map((item) =>
    item.mese.replace(item.mese[0], item.mese[0].toUpperCase())
  );
  const values = chartData?.data?.map((item) => item.valore);
  const valuesName = `${chartData?.nomeLine}s`;

  // Modal states
  const [modalDisplay, setModalDisplay] = useState(false);
  const [modalData, setModalData] = useState({});

  // Chart configs state
  const [chartState, setChartState] = useState({
    options: {
      chart: {
        zoom: {
          enabled: false,
        },
        events: {
          // Click event to open Modal when clicking on button
          click: (e) => {
            e.target.classList.value.includes("modal-open") &&
              setModalDisplay(true);
          },
          // Set ModalData state when hovering over marker
          dataPointMouseEnter: function (event, chartContext, config) {
            setModalData({
              series: config.w.globals.series,
              seriesIndex: config.seriesIndex,
              dataPointIndex: config.dataPointIndex,
              labels: config.w.globals.categoryLabels,
              seriesName: config.w.globals.seriesNames,
            });
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "straight",
      },
      title: {
        text: "Product Trends by Month",
        align: "left",
      },
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: months,
      },
      tooltip: {
        intersect: true, // Intersect and shared are needed for dataPoint event to work
        shared: false,
        // Custom tooltip.
        // Component rendered as static HTML, since custom function
        // only returns HTML and not JSX
        custom: ({ series, seriesIndex, dataPointIndex, w }) => {
          return ReactDomServer.renderToString(
            <Tooltip
              series={series}
              seriesIndex={seriesIndex}
              dataPointIndex={dataPointIndex}
              w={w}
            />
          );
        },
      },
      markers: {
        size: 5, // Size above 0 is needed for dataPoint event to work
        strokeWidth: 1,
        hover: {
          size: 7,
        },
      },
    },
    series: [
      {
        name: valuesName,
        data: values ? values : [], // Conditional to avoid console error on load
      },
    ],
  });

  return (
    <div>
      {/* Chart */}
      <Chart
        options={chartState.options}
        series={chartState.series}
        type={"line"}
        width={"100%"}
        height={450}
      />

      {/* Modal */}
      <Modal
        modalDisplay={modalDisplay}
        setModalDisplay={setModalDisplay}
        modalData={modalData}
      />
    </div>
  );
};

export default LineChart;
