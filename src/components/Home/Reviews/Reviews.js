import React from "react";
import "./Reviews.scss";
import { ImQuotesRight } from "react-icons/im";

const Reviews = () => {
return (
    <div id="reviews" className="mt-5 mb-3" data-aos="fade-up">
        <h2 className="text-center mb-5 fw-bold" style={{color: "var(--main-color)"}}>What they say about us</h2>
        <div className="content d-flex justify-content-center align-items-center gap-5">
            <div className="card pt-5 pb-5 pe-2 ps-2" data-aos="fade-up">
                <div className="header border-bottom pb-3">
                    <div className="profile">
                        <div className="pic">
                            {" "}
                        </div>
                        <div className="studentInfo">
                            <h5 className="name"> Chef Laurent Dubois </h5>
                            <div className="course"> Executive Chef, Le Jardin Étoilé </div>
                        </div>
                    </div>
                    <div className="quotation">
                        {" "}
                        <ImQuotesRight />{" "}
                    </div>
                </div>
                <div className="comment">
                    "Dionysus has transformed our menu planning. The AI’s ability to
                    align dish pairings with guest preferences is simply unparalleled."
                </div>
                <div className="date"> January 15, 2025 </div>
            </div>

            <div className="card pt-5 pb-5 pe-2 ps-2" data-aos="fade-up">
                <div className="header border-bottom pb-3">
                    <div className="profile">
                        <div className="pic">
                            {" "}
                        </div>
                        <div className="studentInfo">
                            <h5 className="name"> Chef Isabella Romano </h5>
                            <div className="course"> Head Chef, Osteria del Vino </div>
                        </div>
                    </div>
                    <div className="quotation">
                        {" "}
                        <ImQuotesRight />{" "}
                    </div>
                </div>
                <div className="comment">
                    "I was skeptical at first, but Dionysus’ wine pairing logic is
                    remarkable. It ensures every selection enhances our dishes
                    beautifully."
                </div>
                <div className="date"> February 2, 2025 </div>
            </div>

            <div className="card pt-5 pb-5 pe-2 ps-2" data-aos="fade-up">
                <div className="header border-bottom pb-3">
                    <div className="profile">
                        <div className="pic">
                            {" "}
                        </div>
                        <div className="studentInfo">
                            <h5 className="name"> Sommelier Marco Bianchi </h5>
                            <div className="course"> Chief Sommelier, Vigna d’Oro </div>
                        </div>
                    </div>
                    <div className="quotation">
                        {" "}
                        <ImQuotesRight />{" "}
                    </div>
                </div>
                <div className="comment">
                    "Dionysus doesn’t just suggest wine—it respects our cellar’s
                    inventory, ensuring precise, thoughtful pairings every night."
                </div>
                <div className="date"> February 18, 2025 </div>
            </div>
        </div>
    </div>
);
};

export default Reviews;
