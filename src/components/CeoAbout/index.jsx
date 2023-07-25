import React from "react";
import Flecha from "../../assets/flecha1.png";
import Flecha2 from "../../assets/flecha2.png";
import "./CeoAbout.css";

function CeoAbout() {
  return (
    <section className="container w-auto align-items-center d-flex ceoAbouts-container">
      <div className="container-fluid d-flex justify-content-lg-between">
        <div className="row">
          <div className="col container-peopleWhat">
            <div className="card mb-3 border-0">
              <h2 className="fs-1 fw-bold">
                What people say <span>about Us.</span>
              </h2>
              <div className="pt-3">
                <p className="fs-6 text-aboutPeople">
                  Our Clients send us bunch of smilies with our services and we
                  love them.
                </p>
                <div className="d-flex arrows-container_AboutPeople">
                  <img
                    className="img-fluid"
                    src={Flecha}
                    alt=""
                  />
                  <img
                    src={Flecha2}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className="card mb-3 border-0 container_card-Mike">
              <div className="img-Card_container">
                <img
                  src="/static/img/perfil_sec2.png"
                  alt=""
                />
              </div>
              <div className="card-body container_cardBody-Mike">
                <p className="card-text fs-6">
                  “On the Windows talking painted pasture yet its express
                  parties use. Sure last upon he same as knew next. Of believed
                  or diverted no.”
                </p>
                <h6 className="fs-5 fw-bold">Mike Taylor</h6>
                <p className="fs-6 mt-0">Lahore, Pakistan</p>
                <div className="mt-0 container-Chris">
                  <h6 className="fs-5 fw-bold">Chris Thomas</h6>
                  <p className="fs-6">CEO of Red Button</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { CeoAbout };
