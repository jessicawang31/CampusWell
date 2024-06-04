import React from "react";
import Footer from "../components/Footer.js";
import './Login.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <div className="introflex ">
            <header className="introheader">
                <h1 className="introh1">CampusWell</h1>
            </header>
            <main className="d-flex justify-content-center align-items-center flex-grow-1">
                <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                    <div className="card text-black bg-white" style={{ borderRadius: '1rem' }}>
                        <div className="card-body text-center">
                            <div className="">
                                <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                                <p className="text-black-50 mb-5">Please enter your login and password!</p>

                                <div className="form-outline form-black mb-4">
                                    <input type="email" id="typeEmailX" className="form-control form-control-lg" placeholder="email@domain.com" />
                                    <label className="form-label" htmlFor="typeEmailX">Email</label>
                                </div>

                                <div className="form-outline form-black mb-4">
                                    <input type="password" id="typePasswordX" className="form-control form-control-lg" placeholder="******" />
                                    <label className="form-label" htmlFor="typePasswordX">Password</label>
                                </div>

                                <Link to="/main"><button className="btn btn-outline-dark btn-lg px-5" type="button">Login</button></Link>

                                <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                    <a href="#!" className="text-black"><i className="fab fa-facebook-f fa-lg"></i></a>
                                    <a href="#!" className="text-black"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                    <a href="#!" className="text-black"><i className="fab fa-google fa-lg"></i></a>
                                </div>

                            </div>

                            <div>
                                <p className="mb-0">Don't have an account? <a href="ProfileAccount.js"><Link to="/account">Sign Up!</Link></a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        
        </div>
    );
}
