import React, { useState, useEffect, useRef } from 'react';
import { ref, set, onValue } from 'firebase/database';
import AvatarEditor from 'react-avatar-editor';
import NavBar from '../components/NavBar.js';
import Footer from '../components/Footer.js';
import './ProfileAccount.css';
import '../index.css';
import profileImg from '../img/blankprofile.png';
import { database } from '../index';

const stateCityMap = {
  'WA': ['Seattle', 'Spokane', 'Tacoma'],
  'CA': ['Los Angeles', 'San Francisco', 'San Diego'],
  'NY': ['New York', 'Buffalo', 'Rochester']
};

export default function AccountSettings() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    address: '',
    contact_number: '',
    city: '',
    state: '',
    password: '',
  });
  const [profileImage, setProfileImage] = useState(profileImg);
  const [profileImageFile, setProfileImageFile] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState('');
  const [cities, setCities] = useState([]);
  const editorRef = useRef(null);

  useEffect(() => {
    const profileDataRef = ref(database, 'profileData');
    onValue(profileDataRef, (snapshot) => {
      const storedData = snapshot.val();
      if (storedData) {
        setFormData(storedData);
        if (storedData.state) {
          setCities(stateCityMap[storedData.state]);
        }
      }
    });

    const profileImageRef = ref(database, 'profileImage');
    onValue(profileImageRef, (snapshot) => {
      const storedImage = snapshot.val();
      if (storedImage) {
        setProfileImage(storedImage);
      }
    });
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImageFile(file);
    }
  };

  useEffect(() => {
    if (formData.state) {
      setCities(stateCityMap[formData.state]);
    } else {
      setCities([]);
    }
  }, [formData.state]);

  const validateForm = () => {
    const errors = {};
    if (!formData.first_name) errors.first_name = 'First name is required';
    if (!formData.last_name) errors.last_name = 'Last name is required';
    if (!formData.email) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.password) errors.password = 'Password is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        if (editorRef.current) {
          const canvas = editorRef.current.getImage();
          const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
          const img = new Image();
          img.src = dataUrl;
          img.onload = async () => {
            const tempCanvas = document.createElement('canvas');
            const ctx = tempCanvas.getContext('2d');
            tempCanvas.width = 150;
            tempCanvas.height = 150;
            ctx.drawImage(img, 0, 0, tempCanvas.width, tempCanvas.height);
            const compressedDataUrl = tempCanvas.toDataURL('image/jpeg', 0.8);

            setProfileImage(compressedDataUrl);
            await set(ref(database, 'profileImage'), compressedDataUrl);
            setSubmissionMessage('Profile updated successfully!');
            await set(ref(database, 'profileData'), formData);
          };
        } else {
          setSubmissionMessage('Profile updated successfully!');
          await set(ref(database, 'profileData'), formData);
        }
      } catch (error) {
        console.error('Error updating profile:', error);
        setSubmissionMessage('Failed to update profile. Please try again.');
      }
    }
  };

  return (
    <div>
      <header>
        <h1>Account Settings</h1>
      </header>
      <NavBar />
      <main>
        <section id="profile-settings">
          <h2>Edit Profile</h2>
          <AvatarEditor
            ref={editorRef}
            image={profileImageFile || profileImage}
            width={150}
            height={150}
            border={50}
            borderRadius={75}
            scale={1.2}
          />
          <input type="file" accept="image/*" onChange={handleImageUpload} />
          <form id="profile-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                name="first_name"
                value={formData.first_name}
                onChange={handleInputChange}
              />
              {formErrors.first_name && <span className="error">{formErrors.first_name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                id="last-name"
                name="last_name"
                value={formData.last_name}
                onChange={handleInputChange}
              />
              {formErrors.last_name && <span className="error">{formErrors.last_name}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              {formErrors.email && <span className="error">{formErrors.email}</span>}
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="contact-number">Contact Number</label>
              <input
                type="tel"
                id="contact-number"
                name="contact_number"
                value={formData.contact_number}
                onChange={handleInputChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <select id="state" name="state" value={formData.state} onChange={handleInputChange}>
                <option value="">Select State</option>
                {Object.keys(stateCityMap).map((state) => (
                  <option key={state} value={state}>{state}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <select id="city" name="city" value={formData.city} onChange={handleInputChange}>
                <option value="">Select City</option>
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
              {formErrors.password && <span className="error">{formErrors.password}</span>}
            </div>
            <div className="form-group">
              <button type="submit" className="save-btn">Save</button>
              <button type="button" className="cancel-btn" onClick={() => {
                setFormData({
                  first_name: '',
                  last_name: '',
                  email: '',
                  address: '',
                  contact_number: '',
                  city: '',
                  state: '',
                  password: ''
                });
                set(ref(database, 'profileData'), null);
                set(ref(database, 'profileImage'), null);
                setProfileImage(profileImg);
              }}>Cancel</button>
            </div>
          </form>
          {submissionMessage && <div className="submission-message">{submissionMessage}</div>}
        </section>
      </main>
      <Footer />
    </div>
  );
}
