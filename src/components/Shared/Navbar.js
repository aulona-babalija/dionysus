import React, { useEffect } from "react";
import "./Navbar.scss";

const Navbar = () => {
  useEffect(() => {
    const handleOutsideClick = (event) => {
      const navbar = document.getElementById("navbarSupportedContent");
      const toggler = document.querySelector(".navbar-toggler");

      if (navbar.classList.contains("show")) {
        if (!navbar.contains(event.target) || event.target === toggler) {
          new window.bootstrap.Collapse(navbar).hide();
        }
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  const closeNavbar = () => {
    const navbar = document.getElementById("navbarSupportedContent");
    if (navbar.classList.contains("show")) {
      new window.bootstrap.Collapse(navbar).hide();
    }
  };

  return (
    <nav className="navbar border-bottom navbar-expand-lg text-white" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Dionysus
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
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" href="#banner" onClick={closeNavbar}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={closeNavbar}>
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#how" onClick={closeNavbar}>
                How it works
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#reviews" onClick={closeNavbar}>
                Reviews
              </a>
            </li>
          </ul>
          <a className="btn btn-outline-warning" href="#request" onClick={closeNavbar}>
            Request Demo
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
