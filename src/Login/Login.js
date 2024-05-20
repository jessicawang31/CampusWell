import React from "react";
import Footer from "../components/Footer.js";
import './Login.css';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


export default function Login() {
    return (
        <div className="introflex">
            <header className="introheader">
                <h1 className="introh1">CampusWell</h1>
            </header>
            <main>
                <div className="intromain">
                    <section className="login">
                        <h2 className="introh2">Log in to CampusWell</h2>
                        <h2 className="text-small introh2">Don't have an account? <a href="https://example.com/">Sign Up!</a></h2>
                        <form>
                            <div className="entryboxes py-4">
                                <label for="email_input" className="titles">
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>Email:</b><br />
                                </label><input id="email_input" type="email" name="email" placeholder="email@domain.com" /><br />
                                <label for="password_input" className="titles">
                                    <b>Password:</b><br />
                                </label><input id="password_input" type="password" name="password" placeholder="******" />
                            </div>
                            <button className="submitbutton" aria-label="Submit" type="submit"><a href="Main.js"><Link to="/main">Log In</Link></a></button>
                        </form>
                    </section>
                </div>
            </main>
            <footer className="footer mt-auto ">
                <Footer />
            </footer>
            
        </div>
    );
}