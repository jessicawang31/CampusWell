import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
    return (
        <footer>
            <div className="introfootercontainer footer sticky-bottom">
                <div className="introfootercontent">
                    <footer className="introfooter container-fluid">
                        <div className="row ">
                            <div className="col text-start">
                                <p>&copy; 2024 CampusWell.</p>
                            </div>
                            <div className="col text-center">
                                <address>
                                    Contact us at <a href="mailto:campuswell@uw.edu">campuswell@uw.edu</a>, or at <a href="tel:XXXXXXXXXX">(XXXXXXXXXX)</a>.
                                </address>
                            </div>
                            <div className="col text-end">
                                <a href="/privacy-policy" className="me-3">Privacy Policy</a>
                                <a href="/terms-of-service" className="me-3">Terms of Service</a>
                                <a href="/about-us">About Us</a>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </footer>
    );
}
