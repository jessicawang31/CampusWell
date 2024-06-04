import React, { useState } from 'react';
import NavBar from '../components/NavBar.js'; 
import Footer from '../components/Footer.js'; 
import { AppointmentList, DetailedInformation, NotesCard, EditNotesPopup } from './TrackerComponents/appointmentList.js';
import './Tracker.css';
import '../index.css';
import { getDatabase, ref, update } from 'firebase/database';

export default function TrackerHistory(props) {
    // useStates declarations
    const [selectedVisit, setSelectedVisit] = useState(props.visits[0]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [visits, setVisits] = useState(props.visits);
    
    const handleAppointmentChange = (visit) => {
        setSelectedVisit(visit);
    };

    const handleNotesClick = () => {
        setIsPopupOpen(true);
    };

    const handlePopupClose = () => {
        setIsPopupOpen(false);
    };


    // Changes old notes property to new notes property
    const handleNotesSave = async (newNotes) => {
        try {
            const db = getDatabase();
            const visitRef = ref(db, `allVisits/${selectedVisit.firebaseKey}`);
            await update(visitRef, {
                notes: newNotes
            });
            const updatedVisit = {
                ...selectedVisit,
                notes: newNotes,
            };
            const updatedVisits = visits.map((visit) =>
                visit.firebaseKey === updatedVisit.firebaseKey ? updatedVisit : visit
            );
            setSelectedVisit(updatedVisit);
            setVisits(updatedVisits);
            setIsPopupOpen(false);
        } catch (error) {
            console.error('Error updating notes:', error);
        }
    };


    // Render
    return (
        <div className="tracker-page">
            <header>
                <h1 className="tracker-heading">Tracker History</h1>
            </header>
            <NavBar />
            <main>
                <div className="widget-container">
                    <AppointmentList visits={visits} onAppointmentChange={handleAppointmentChange} /> 
                    <NotesCard notes={selectedVisit.notes} onNotesClick={handleNotesClick} />
                    <DetailedInformation visit={selectedVisit} />
                </div>
                {isPopupOpen && <EditNotesPopup notes={selectedVisit.notes} onSave={handleNotesSave} onClose={handlePopupClose} />}
            </main>
            <Footer />
        </div>
    );
}
