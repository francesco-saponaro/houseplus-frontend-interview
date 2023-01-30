// React imports
import React from "react";
import ReactDOM from "react-dom";

// Styles imports
import "./Modal.scss";

// Modal component
const Modal = ({ modalDisplay, setModalDisplay, modalData }) => {
  // Only display if display state is true
  if (!modalDisplay) return null;

  // Portal modal
  return ReactDOM.createPortal(
    // Modal container
    <div className="modal">
      {/* // Modal content */}
      <div className="modal__content">
        {/* Text */}
        <div className="modal__content--text">
          Il valore selezionato e'{" "}
          <span className="modal__content--text--data">
            {modalData?.seriesName} /{" "}
            {modalData?.labels[modalData.dataPointIndex]} /{" "}
            {modalData?.series[modalData.seriesIndex][modalData.dataPointIndex]}
          </span>
        </div>
        {/* Close button */}
        <button
          onClick={() => setModalDisplay(false)}
          className="modal__content--close apexcharts__modal-btn"
        >
          Chiudi Modal
        </button>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default Modal;
