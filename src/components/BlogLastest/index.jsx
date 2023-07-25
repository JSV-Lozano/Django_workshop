import React from "react";
import Img1 from "../../assets/img1_sec3.png";
import Img2 from "../../assets/img2_sec3.png";
import Img3 from "../../assets/img3_sec3.png"
import Img4 from "../../assets/img4_sec3.png"
import "./BlogLastest.css"

function BlogLastest() {
  return (
    <section
      className="container-fluid p-5 container_BlogLastest"
    >
      <div className="d-flex flex-column text-center mb-5 blogLastest-Title">
        <h2
          className="fs-1 fw-bold"
        >
          Get update with latest blog
          <span>latest blog</span>
        </h2>
      </div>

      <div className="container-fluid d-flex flex-lg-row flex-column align-items-center justify-content--around">
        <div
          className="card border-0 card-container"
        >
          <img
            src={Img1}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-baseline">
                <p className="fs-6 fw-bold">
                  The Amazing Difference a Year of Travelling.
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <p
                    className="mb-0 ms-1 fecha-card"
                  >
                    July 27, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card border-0 card-container"
        >
          <img
            src={Img2}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-baseline">
                <p className="fs-6 fw-bold">
                  Travel far enough, you meet yourself.
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <p
                    className="mb-0 ms-1 fecha-card"
                    
                  >
                    July 27, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card border-0 card-container"
        >
          <img
            src={Img3}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-baseline">
                <p className="fs-6 fw-bold">
                  How to Save Money While Visiting Africa.
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <p
                    className="mb-0 ms-1 fecha-card"
                  >
                    July 27, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="card border-0 card-container"
        >
          <img
            src={Img4}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <div className="d-flex flex-column">
              <div className="d-flex justify-content-between align-items-baseline">
                <p className="fs-6 fw-bold">
                  Reflections on 5 Months of Travel: Time to Hang.
                </p>
              </div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <p
                    className="mb-0 ms-1 fecha-card"
                  >
                    July 27, 2021
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { BlogLastest };
