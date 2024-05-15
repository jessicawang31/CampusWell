import React from 'react';
import NavBar from '../components/NavBar.js'; 

export default function TrackerHistory() {
    return (
        <div>
            <NavBar/>
            <header>
                <h1>Tracker History</h1>
            </header>
            <main>
                <div className="widget-container">
                    <section className="history-container">
                    <h2>History</h2>
                    <div className="past-appointments">
                        {/* <select id="appointments" multiple onChange={applyFilter}> */}
                        <select id="appointments">
                            <option value="appointment">Dentist (3/1/24)</option>
                            <option value="appointment">Checkup (2/5/24)</option>
                        </select>
                        </div>
                    </section>
                    <section className="notes-container">
                        <h2>Visit Notes</h2>
                        <div>
                            <p>No notes entered</p>
                        </div>
                    </section>
                    <section className="info-container">
                        <h2>Place</h2>
                        <div>
                            <p>Image and service information</p>
                        </div>
                    </section>
                </div>
            </main>
            <div className="footercontainer">
                <div className="footercontent">
                    <footer className="footer">
                    <address>
                        Contact us at <a href="mailto:pleon@uw.edu">ntabera@uw.edu</a>, or at <a href="tel:XXXXXXXXXX">(XXXXXXXXXX)</a>.
                    </address>
                    <p>&copy; 2024 CampusWell.</p>
                </footer>
            </div>
        </div>
    </div>
    );
}
