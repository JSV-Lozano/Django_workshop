import React from "react";
import Logo from "../../assets/Vector.png";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="container-fluid mb-3">
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container-fluid">
            <a
              className="logo navbar-brand fs-4 fw-bold text"
              href="#"
            >
              Trabook
              <img
                src={Logo}
                alt="Logo Trabook"
                className="mx-1"
              />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto text-sm-center">
                <li className="nav-item">
                  <a
                    href="#Home"
                    className="nav-link active"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#About"
                    className="nav-link active"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#Destination"
                    className="nav-link active"
                  >
                    Destination
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#Tour"
                    className="nav-link active"
                  >
                    Tour
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    href="#Blog"
                    className="nav-link active"
                  >
                    Blog
                  </a>
                </li>
              </ul>
              <div className="container-sm-fluid d-sm-flex justify-content-sm-center">
                <button className="login btn mx-5">Login</button>
                <button className="sign-up btn text-white">Sign up</button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export { Header };
