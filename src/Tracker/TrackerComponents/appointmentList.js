import React, { useState } from 'react';

export const NotesCard = ({notes}) => (
    <section className="notes-container">
        <h2>Notes</h2>
        <div>
            <p>{notes}</p>
        </div>
    </section>
);

export const DetailedInformation = ({visit}) => (
    <div className="info-container">
        <img className="place-img" src={visit.img} alt="Picture of place" style={{ width: "100%" }} />
        <div className="place-info">
            <h4><b>{visit.service}</b></h4>
            <p>{visit.location}</p>
        </div>
    </div>
);

export const AppointmentList = ({visits, onAppointmentChange}) => {
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
