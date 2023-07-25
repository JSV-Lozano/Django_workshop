import React from "react";
import Logo from "../../assets/Vector.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import InstagramIcon from "../../assets/instagram-icon.png";
import TwitterkIcon from "../../assets/twitter-icon.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="pt-5">
      <div className="row mt-5">
        <div className="col-6 flex-column d-flex">
          <div className="d-flex align-items-center">
            <h4 className="mb-4 fw-bold title-Logo">Trabook</h4>
            <img
              className="img-fluid logo-Trabook"
              src={Logo}
              alt="img"
            />
          </div>
          <p>
            Book your trip in minute, get full <br />
            Control for much longer.
          </p>
          <div className="d-flex align-items-center container-Socials">
            <img
              className="logo-FacebooTwiter"
              src={FacebookIcon}
              alt=""
            />
            <img
              className="logo-Instagram"
              src={InstagramIcon}
              alt=""
            />
            <img
              className="logo-FacebooTwiter"
              src={TwitterkIcon}
              alt=""
            />
          </div>
        </div>
        <div className="col-6 d-flex">
          <div className="col">
            <h5 className="fs-6 mb-4 fw-bold">Company</h5>
            <h5 className="fs-6 mb-3">about</h5>
            <h5 className="fs-6 mb-3">Careers</h5>
            <h5 className="fs-6 mb-3">Logistic</h5>
            <h5 className="fs-6 mb-3">Privacy &amp; Policy</h5>
          </div>
          <div className="col">
            <h5 className="fs-6 mb-4 fw-bold">Contact</h5>
            <h5 className="fs-6 mb-3">Help/FAQ</h5>
            <h5 className="fs-6 mb-3">Press</h5>
            <h5 className="fs-6 mb-3">Affilates</h5>
          </div>
          <div className="col">
            <h5 className="fs-6 mb-4 fw-bold">More</h5>
            <h5 className="fs-6 mb-3">Press Centre</h5>
            <h5 className="fs-6 mb-3">Our Blog</h5>
            <h5 className="fs-6 mb-3">Low fare tips</h5>
          </div>
        </div>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <p>Copyright, Trabook 2022. All rights reserved.</p>
        <p>Terms &amp; Conditions</p>
      </div>
    </footer>
  );
}

export { Footer };
