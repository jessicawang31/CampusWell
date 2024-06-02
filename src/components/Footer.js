import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
    return (
        <footer className="footer mt-auto py-3">
            <div className="container-fluid text-light">
                <div className="row">
                    <div className="col text-start">
                        <p>&copy; 2024 CampusWell.</p>
                    </div>
                    <div className="col text-center">
                        <address>
                            Contact us at <a href="mailto:campuswell@uw.edu" className="text-light">campuswell@uw.edu</a>, or at <a href="tel:XXXXXXXXXX" className="text-light">(XXXXXXXXXX)</a>.
                        </address>
                    </div>
                    <div className="col text-end">
                        <a href="/privacy-policy" className="text-light me-3">Privacy Policy</a>
                        <a href="/terms-of-service" className="text-light me-3">Terms of Service</a>
                        <a href="/about-us" className="text-light">About Us</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
