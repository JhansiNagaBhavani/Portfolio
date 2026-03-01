import React from 'react';
import './Contact.css';

function Contact() {

  return (
    <div id="contact">
      <h1>Contact Me</h1>
      <h3>Get In Touch</h3>
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <h4>Email</h4>
            <p>kodurijhansi441@gmail.com</p>
          </div>
          <div className="info-item">
            <h4>Phone</h4>
            <p>+91 8977896623</p>
          </div>
          <div className="info-item">
            <h4>Location</h4>
            <p>West Godavari
District in Andhra Pradesh
Tanuku, India</p>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Contact;
