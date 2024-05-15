import React from 'react';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import './Main.css';
import '../index.css';

export default function Main() {
  return (
    <div className="main-container">
        <NavBar />
        <h1>Campus Well</h1>
        <div className="content-container">
            <div className="text-side">
            <h2>Our Goal</h2>
                <p>The significance of accessible health resources is crucial, particularly for college students navigating independence for the first time. Many students are uncertain of where to find necessary health resources to protect their health and well-being. Being sick not only affects their health, but also could affect academic performance and overall well-being. Addressing this concern is essential for fostering a healthy college experience.</p>
                <p>An information technology problem in the space of the University of Washington is the lack of accessible, navigable health platforms that provide detailed information about available resources on or near campus. These issues could include problems such as real-time appointment availability for urgent care, clarity about insurance coverage vs. out-of-pocket payment options, or more filtered options based on the students health concerns. Students who dont have prior experiences navigating health resources may find it challenging to seek for such support, consequently, this could negatively impact their health further if assistance isnt received in a timely manner.</p>
                <p>This web app aims to empower students to thrive in all aspects of their university experience by integrating well-being into the fabric of campus life.</p>        </div>
            <div className="image-side">
                <img className="home-img" src="../img/health.png" alt="Health image" />
            </div>
        </div>
        <Footer />
    </div>
  );
}