import React from "react";
import "./Request.scss";

const Request = () => {
return (
    <div id="request" className="request-div">
            <div className="parallax2"></div>
        <div className="content p-5 d-flex justify-content-center align-items-center">
        <form className="d-flex border rounded flex-column justify-content-center w-50 p-5" data-aos="fade-up">
        <h2 className="text-center">Request Demo</h2>
            <div className="form-group w-100 mb-3">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Enter your name"
                />
            </div>
            <div className="form-group w-100 mb-3">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                />
            </div>
            <div className="form-group w-100 mb-3">
                <label htmlFor="restaurant">Restaurant Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="restaurant"
                    placeholder="Enter your restaurant name"
                />
            </div>
            <div className="form-group w-100 mb-3">
                <label htmlFor="additionalInfo">Additional Information</label>
                <textarea
                    className="form-control"
                    id="additionalInfo"
                    rows="3"
                    placeholder="Enter any additional information"
                ></textarea>
            </div>
            <button type="submit" className="btn btn-outline-warning mt-3 w-50">
                Submit
            </button>
        </form>
        </div>
    </div>
);
};

export default Request;
