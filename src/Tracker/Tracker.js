import React from 'react';
import NavBar from '../components/NavBar.js'; 
import Footer from '../components/Footer.js'; 

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
            <Footer />
        </div>
    // </div>
    );
}
