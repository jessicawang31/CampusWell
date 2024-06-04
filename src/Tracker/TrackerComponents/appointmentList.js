import React, { useState } from 'react';


// Notes Card of the appointment
export const NotesCard = ({ notes, onNotesClick }) => (
    <section className="notes-container" onClick={onNotesClick}>
        <div className="notes-header">
            <h2>Notes</h2>
            <p className="edit-disclaimer">Click to edit!</p>
        </div>
        <div>
            <p>{notes || "No notes available"}</p>
        </div>
    </section>
);

// Information of the appointment, location, service, and picture.
export const DetailedInformation = ({ visit }) => (
    <div className="info-container">
        <img className="place-img" src={visit.img} alt={`${visit.service} building`} style={{ width: "100%" }} />
        <div className="place-info">
            <h4><b>{visit.service}</b></h4>
            <p>{visit.location}</p>
        </div>
    </div>
);

// Shows previous appointments
export const AppointmentList = ({ visits, onAppointmentChange }) => {
    const [selectedAppointment, setSelectedAppointment] = useState(visits[0]);
    const handleAppointmentChange = (event) => {
        const selectedDate = event.target.value;
        const selectedVisit = visits.find(visit => visit.date === selectedDate);
        setSelectedAppointment(selectedVisit);
        onAppointmentChange(selectedVisit);
    };

    return (
        <div>
            <section className="history-container">
                <h2>Your History</h2>
                <div className="past-appointments">
                    <select id="appointments" onChange={handleAppointmentChange}>
                        {visits.map((visit, index) => (
                            <option key={index} value={visit.date}>
                                {visit.date} - {visit.service}
                            </option>
                        ))}
                    </select>
                </div>
            </section>
        </div>
    );
};

// Edit pop-up window
export const EditNotesPopup = ({ notes, onSave, onClose }) => {
    const [newNotes, setNewNotes] = useState(notes);
    const handleSave = () => {
        onSave(newNotes);
    };

    return (
        <div className="popup-container">
            <div className="popup">
                <h2>Edit Notes</h2>
                <textarea className="New-Note-TextArea" value={newNotes} onChange={(e) => setNewNotes(e.target.value)} />
                <div className="Notes-Btn-Container">
                    <button className="Note-SaveBtn" onClick={handleSave}>Save</button>
                    <button className="Note-CloseBtn" onClick={onClose}>Close</button>
                </div>
            </div>
        </div>
    );
};
