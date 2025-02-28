import React from "react";
import "./Situation.scss";
import dining from "../../../assets/dining.jpg";

const Situation = () => {
return (
    <div data-aos="fade-up">
        <h3 className="mt-5 mb-5 text-center parallax">“Experience how Dionysus enhances fine-dining collaboration.”</h3>
        <div className="content d-flex justify-content-between align-items-top mt-5 pt-4">
            <div className="left-side" data-aos="fade-right">
                <img src={dining} className="shadow" alt="" />
            </div>
            <div className="right-side pe-5 mt-3 d-flex flex-column justify-content-top align-items-top" data-aos="fade-left">
                <h4 className="text-center mb-5">Perfect Harmony Between the Kitchen & the Cellar</h4>
                <h5 className="text-center">Dionysus seamlessly connects the expertise of chefs and sommeliers, ensuring a synchronized dining experience that delights every guest.</h5>
                <ul className="mt-5">
                    <li><strong>Effortless Communication</strong> → Dionysus ensures wine pairing suggestions align perfectly with chef-approved dishes.</li>
                    <li><strong>Time-Saving</strong> → Reduces back-and-forth decision-making, allowing chefs & sommeliers to focus on creativity.</li>
                    <li><strong>Optimized Selections</strong> → Only recommends wines available in the cellar, preventing last-minute substitutions.</li>
                </ul>
            </div>
        </div>
    </div>
);
};

export default Situation;
