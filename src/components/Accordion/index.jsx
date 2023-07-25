import React from "react";
import "./Accordin.css";

function Accordion() {
  return (
    <div
      className="accordion accordion-flush d-flex justify-content-center container-fluid d-flex flex-column flex-md-row align-items-center justify-content-center"
      id="accordionFlushExample"
    >
      <div className="accordion-item w-auto">
        <h2
          className="accordion-header"
          id="flush-headingOne"
        >
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
            aria-expanded="false"
            aria-controls="flush-collapseOne"
          >
            Location
          </button>
        </h2>
        <div
          id="flush-collapseOne"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingOne"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">Where are you going</div>
        </div>
      </div>
      <div className="accordion-item w-auto">
        <h2
          className="accordion-header"
          id="flush-headingTwo"
        >
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
            aria-expanded="false"
            aria-controls="flush-collapseTwo"
          >
            Date
          </button>
        </h2>
        <div
          id="flush-collapseTwo"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingTwo"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">When you will go</div>
        </div>
      </div>
      <div className="accordion-item w-auto">
        <h2
          className="accordion-header"
          id="flush-headingThree"
        >
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
            aria-expanded="false"
            aria-controls="flush-collapseThree"
          >
            Guest
          </button>
        </h2>
        <div
          id="flush-collapseThree"
          className="accordion-collapse collapse"
          aria-labelledby="flush-headingThree"
          data-bs-parent="#accordionFlushExample"
        >
          <div className="accordion-body">Number of guest</div>
        </div>
      </div>
      <button className="explore_now btn text-white">Explore Now</button>
    </div>
  );
}

export { Accordion };
