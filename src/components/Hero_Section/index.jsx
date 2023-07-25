import React from "react";
import Person from "../../assets/person.png";
import "./Hero_Section.css";

function Hero_Sections() {
  return (
    <section
      id="Home"
      className="overflow-auto container container-fluid d-flex flex-column flex-md-row align-items-sm-center w-100"
    >
      <div className="container_Home d-flex flex-column justify-content-center mx-auto">
        <div className="container-fluid m-0 p-0 title-container_Home">
          <h1 className="title_Home d-flex fw-bold flex-wrap">
            Get started your exciting
            <span className="journey">journey</span>
            with us.
          </h1>
        </div>
        <p className="text-experienced p-container_Home">
          A Team of experienced tourism professionals will provide you with the
          best advice and tips for your desire place.
        </p>
        <button className="Button_now btn">Discover Now</button>
      </div>
      <div>
        <img
          className="img-fluid mt-xl-4 mt-sm-5"
          src={Person}
          alt="person"
        />
      </div>
    </section>
  );
}

export { Hero_Sections };
