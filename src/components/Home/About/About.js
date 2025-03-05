import React from "react";
import "./About.scss";
import wine from "../../../assets/wine.png";

const About = () => {
  return (
    <div id="about" className="about-component p-4 ps-5 pe-5 pb-5" data-aos="fade-up">
      {/* <h1 className="text-center mt-5 fw-bold">Why us?</h1> */}
      <p className="fst-italic text-center mt-5 fw-bold">
        Dionysus is not just technology—it’s an evolution of culinary
        craftsmanship, designed for those who demand nothing but the best.
      </p>
      <div className="content d-flex align-items-center justify-content-around mt-5 mb-5">
        <div className="left-text flex-2" data-aos="fade-right">
          <h2 className="fw-bold">Why us?</h2>
          <p>
            Dionysus is an AI-powered culinary assistant designed for
            Michelin-starred restaurants. It helps head chefs and sommeliers
            craft personalized dining experiences by analyzing guest preferences
            and suggesting tailored main courses and wine pairings. Unlike a
            chatbot, Dionysus does not interact with guests. Instead, it
            functions as a precision tool, ensuring each dish and wine selection
            aligns with the highest culinary.
          </p>
        </div>
        <div className="middle-img d-flex align-items-center justify-content-center flex-1" data-aos="zoom-in">
          <img style={{ width: "50%" }} src={wine} alt="" />
        </div>
        <div className="right-text flex-2 text-end" data-aos="fade-left">
          <h2 className="fw-bold">Who is Dionysus?</h2>
          <p>
            Dionysus, named after the Greek god of wine, pleasure, and
            celebration, embodies the fusion of tradition and innovation. Just
            as sommeliers curate the perfect pairing, Dionysus enhances the art
            of fine dining through AI-driven precision. It is a
            behind-the-scenes assistant, designed exclusively for
            Michelin-starred chefs and sommeliers to elevate the guest
            experience—seamlessly, intelligently, and effortlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
