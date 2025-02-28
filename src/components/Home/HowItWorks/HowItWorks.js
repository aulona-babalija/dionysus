import React from "react";
import "./HowItWorks.scss";

const HowItWorks = () => {
return (
    <div data-aos="fade-up" id="how" className="howitworks mt-5 mb-5 pt-3">
        <h2 className="fw-bold text-center">How It Works</h2>
        <div data-aos="fade-up" className="content d-flex justify-content-around align-items-top mt-5"> 
            <div data-aos="fade-up" className="left-list">
                    <h4 className="fw-bold mb-4">For the Kitchen (Chef’s Process)</h4>
                <ol>
                    <li data-aos="fade-up">
                        <strong>Guests Make a Reservation</strong>
                        <p>Online reservations include a short preference form.</p>
                    </li>
                    <li data-aos="fade-up">
                        <strong>Dionysus Analyzes & Suggests Dishes</strong>
                        <p>AI scans preferences & recommends 2+ main courses.</p>
                    </li>
                    <li data-aos="fade-up">
                        <strong>Chef Reviews & Accepts/Rejects Suggestions</strong>
                        <p>
                            If accepted, wine pairing is automatically generated for the
                            sommelier.
                        </p>
                    </li>
                    <li data-aos="fade-up">
                        <strong>Smart Shopping List is Created</strong>
                        <p>Ensures fresh ingredients are sourced before service.</p>
                    </li>
                </ol>
            </div>
            <div data-aos="fade-up" className="right-list">
            <h4 className="fw-bold mb-4">For the Cellar (Sommelier’s Process)</h4>
                <ol>
                    <li data-aos="fade-up">
                        <strong>Restaurant Updates Its Wine Inventory</strong>
                        <p>Dionysus keeps track of available wines in real time.</p>
                    </li>
                    <li data-aos="fade-up">
                        <strong>AI-Driven Wine Pairing</strong>
                        <p>
                            Only suggests wines currently in stock for optimal
                            recommendations.
                        </p>
                    </li>
                    <li data-aos="fade-up">
                        <strong>Sommelier Makes Final Selection</strong>
                        <p>Ensures perfect wine pairings while minimizing waste.</p>
                    </li>
                </ol>
            </div>
        </div>
    </div>
);
};

export default HowItWorks;
