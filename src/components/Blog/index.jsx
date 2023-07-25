import React from "react";
import IconEmail from "../../assets/email-icon.png";
import "./Blog.css";

function Blog() {
  return (
    <section
      id="Blog"
      className="contact-Container w-100 container-fluid d-flex flex-column align-items-center text-center justify-content-center rounded"
    >
      <div className="d-flex flex-column mb-5 mt-5 container-subscribe">
        <h2 className="fw-bold fs-1">
          Subscribe and get exclusive <br />
          deals &amp; offer
        </h2>
        <div className="input-group bg-white rounded">
          <div className="input-group bg-white rounded">
            <div className="input-group-prepend logo-email">
              <a
                href="#"
                className="input-group-text bg-white border-0"
              >
                <img
                  src={IconEmail}
                  className="img-fluid"
                />
              </a>
            </div>
            <input
              type="text"
              className="form-control border-0"
              placeholder="Enter your mail"
            />
            <div className="input-group-append p-1">
              <button className="btn button_input-subscribe">Suscribe</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Blog };
