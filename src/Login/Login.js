import React from "react";
import NavBar from './NavBar'; 

export function Login() {
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
                            <div className="entryboxes">
                                <label for="email_input" className="titles">
                                    <b>Email:</b><br />
                                </label><input id="email_input" type="email" name="email" placeholder="email@domain.com" /><br />
                                <label for="password_input" className="titles">
                                    <b>Password:</b><br />
                                </label><input id="password_input" type="password" name="password" placeholder="******" />
                            </div>
                            <button className="submitbutton" aria-label="Submit" type="submit"><a href="index.html">Log In</a></button>
                        </form>
                    </section>
                </div>
            </main>
            
            <div className="introfootercontainer">
                <div className="introfootercontent">
                    <footer className="introfooter">
                        <address>
                        Contact us at <a href="mailto:nico0421@uw.edu">nico0421@uw.edu</a>, or at <a href="tel:XXXXXXXXXX">(XXXXXXXXXX)</a>.
                        </address>
                        <p>&copy; 2024 CampusWell.</p>
                    </footer>
                </div>
            </div>
        </div>
    );
}