import React, { useEffect } from "react";
import { useVacationsPlan } from "../../hooks/useVacationsPlan";
import Start from "../../assets/star1.png"
import FlyIcon from "../../assets/icon_travel.png"
import "./Destinations.css";

function Destination() {
  const { data, fetcData } = useVacationsPlan();

  useEffect(() => {
    fetcData();
  }, []);

  return (
    <>
      <section
        id="Tour"
        className="container-fluid p-5"
      >
        <div className="container-fluid flex-column text-center mb-5 vacationplan_container-text">
          <h2 className="fs-1 fw-bold">
            Best
            <span>vacation plan</span>
          </h2>
          <p className="fs-6">
            Plan your perfect vacation with our travel agency. Choose
            <br />
            among hundreds of all-inclusive offers!
          </p>
        </div>

        <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between container-cards">
          {data.map((item) => (
            <div
              className="card border-0 card-container"
              key={item.id}
            >
              <div className="img-Card_container">
                <img
                  src={item.image}
                  className="card-img-top"
                  alt="image destination"
                />
                <div className="container_card-Button">
                  <button className="btn">Comprar</button>
                </div>
              </div>
              <div className="card-body">
                <div className="d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-baseline">
                    <p className="fs-4 fw-bold">{item.city}</p>
                    <div className="d-flex prices">
                      <p className="fs-5 fw-bold">${item.price}</p>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center rating">
                      <img
                        className="img-fluid"
                        src={FlyIcon}
                        alt=""
                      />
                      <p className="mb-0 ms-1">{item.flytime} Days Trip</p>
                    </div>
                    <div className="d-flex align-items-center fly-days">
                      <img
                        className="img-fluid mx-1"
                        src={Start}
                        alt=""
                      />
                      <p className="mb-0">{item.qualification}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export { Destination };
