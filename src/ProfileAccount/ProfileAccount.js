import React from 'react';
import NavBar from '../components/NavBar.js'; 
import Footer from '../components/Footer.js'; 
import './ProfileAccount.css';
import '../index.css';

export default function AccountSettings() {
  return (
    <div>
      <header>
        <h1>Account Settings</h1>
      </header>
      <NavBar />
      <main>
        <section id="profile-settings">
          <h2>Edit Profile</h2>
          <img className="blankImage" src="../img/blank profile.png" alt="a blank profile" />
          <form id="profile-form">
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input type="text" id="first-name" name="first_name" />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input type="text" id="last-name" name="last_name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" />
            </div>
            <div className="form-group">
              <label htmlFor="contact-number">Contact Number</label>
              <input type="tel" id="contact-number" name="contact_number" />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <select id="city" name="city">
                <option value="city1">City 1</option>
                <option value="city2">City 2</option>
                <option value="city3">City 3</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <select id="state" name="state">
                <option value="state1">State 1</option>
                <option value="state2">State 2</option>
                <option value="state3">State 3</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className="form-group">
              <button type="submit" className="save-btn">Save</button>
              <button type="button" className="cancel-btn">Cancel</button>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
