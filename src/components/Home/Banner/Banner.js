import React from "react";
import dionysus from "../../../assets/dionysus.jpg";
import './Banner.scss'
const Banner = () => {
  return (
    <div id="banner" className="d-flex justify-content-between align-items-center banner pt-3" data-aos="fade-up">
      <div className="sparkles"></div> 
      {/* sparkles */}
      <div className="banner-desc p-5" data-aos="fade-left">
        <h2 className="ms-5">
          Inspired by <span className="span-color">Tradition</span>, <br /> Powered by{" "}
          <span className="span-color">AI</span>
        </h2>
        <p className="ms-5">
          Enhancing the Art of Fine Dining Through Intelligent Culinary Curation
        </p>
      </div>
      <div className="banner-right d-flex p-5 justify-content-center align-items-center" data-aos="fade-up">
        <div className="banner-img">
          <img
            className=""
            src={dionysus}
            alt="dionysusImg"
            style={{ width: "90%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
