import React from "react";
import Group from "../../assets/Group.png";
import Vector_1 from "../../assets/Vector_1.png";
import Group_1 from "../../assets/Group_1.png";
import "./About.css";

function About() {
  return (
    <section
      id="About"
      className="container-fluid d-flex flex-column align-items-center w-100"
    >
      <div className="container text-center container_nee-to">
        <h2 className="fs-1 fw-bolder">
          Things you need <span>to do</span>
        </h2>
        <p className="m-auto pt-3">
          We ensure that you’ll embark on a perfectly planned, safe vacation at
          a price you can afford.
        </p>
      </div>
      <div className="container-fluid d-flex justify-content-lg-around flex-lg-row flex-column align-items-md-center to_need">
        <div>
          <img
            src={Group}
            alt=""
          />
          <h2 className="fs-2 mb-2">Sign Up</h2>
          <p>Completes all the work associated with planning and processing</p>
        </div>
        <div>
          <div>
            <img
              src={Vector_1}
              alt=""
            />
            <h2 className="fs-2 mb-2">Worth of Money</h2>
            <p>
              After successful access then book from exclusive deals &amp;
              pricing
            </p>
          </div>
        </div>
        <div>
          <div>
            <img
              src={Group_1}
              alt=""
            />
            <h2 className="fs-2 mb-2">Exciting Travel</h2>
            <p>Start and explore a wide range of exciting travel experience.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
