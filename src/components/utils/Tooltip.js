// Styles imports
import "./Tooltip.scss";

// Tooltip component
const Tooltip = ({ series, seriesIndex, dataPointIndex, w }) => {
  return (
    <>
      {/* Title */}
      <div className="apexcharts-tooltip-title">
        {w.globals.categoryLabels[dataPointIndex]}
      </div>
      {/* Series */}
      <div className="apexcharts-tooltip-series-group apexcharts-active">
        <div className="apexcharts__series-container">
          <span className="apexcharts-tooltip-marker"></span>
          <div className="apexcharts-tooltip-text">
            <div className="apexcharts-tooltip-y-group">
              <span className="apexcharts-tooltip-text-y-label">
                {w.globals.seriesNames}:{" "}
              </span>
              <span className="apexcharts-tooltip-text-y-value">
                {series[seriesIndex][dataPointIndex]}
              </span>
            </div>
          </div>
        </div>
        {/* Button */}
        <button
          className="apexcharts__modal-btn modal-open"
          id="apexcharts-btn"
        >
          <img className="icon-img modal-open" alt="icona-apri" />
          Apri
        </button>
      </div>
    </>
  );
};

export default Tooltip;
