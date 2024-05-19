import React from 'react';
import NavBar from '../components/NavBar.js'; 
import Footer from '../components/Footer.js'; 
import { useState } from 'react';
import { AppointmentList, DetailedInformation, NotesCard } from './TrackerComponents/appointmentList.js';
import './Tracker.css';
import '../index.css';

export default function TrackerHistory(props) {
    const [selectedVisit, setSelectedVisit] = useState({
        notes: props.visits[0].notes,
        img: props.visits[0].img,
        description: props.visits[0].description,
        service: props.visits[0].service,
        location: props.visits[0].location
    });

    const handleAppointmentChange = (visit) => {
        setSelectedVisit({
            notes: visit.notes,
            img: visit.img,
            description: visit.description,
            service: visit.service,
            location: visit.location
        });
    };

    return (
        <div className="tracker-page">
            <header>
                <h1>Tracker History</h1>
            </header>
            <NavBar />
            <main>
                <div className="widget-container">
                    <AppointmentList visits={props.visits} onAppointmentChange={handleAppointmentChange} /> 
                    <NotesCard notes={selectedVisit.notes} />
                    <DetailedInformation visit={selectedVisit}/>
                </div>
            </main>
            <Footer />
        </div>
    );
}