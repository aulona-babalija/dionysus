import React from "react";
import "./Footer.scss";
import { FaInstagram, FaFacebookF, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer mt-5 p-4 border-top ">
      <div className="d-flex content text-white justify-content-between align-items-center">
        <div className="text-center">© 2025 Copyright: DIONYSUS</div>

        <div className="logo">
          <div className="social-icons d-flex justify-content-center">
            <a
              href="https://www.instagram.com"
              className="mx-2"
              style={{ textDecoration: "none", color: "white" }}
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com"
              className="mx-2"
              style={{ textDecoration: "none", color: "white" }}
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://www.tiktok.com"
              className="mx-2"
              style={{ textDecoration: "none", color: "white" }}
            >
              <FaTiktok size={20} />
            </a>
            <a
              href="https://www.youtube.com"
              className="mx-2"
              style={{ textDecoration: "none", color: "white" }}
            >
              <FaYoutube size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
