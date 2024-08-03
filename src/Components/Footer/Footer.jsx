// src/Footer.js
import React from 'react';
import './Footer.css';
import { PiPhoneCall } from 'react-icons/pi';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitterX } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h1 className="footer-logo">Orange Media</h1>
        <p className="footer-contact">
          <PiPhoneCall className='p_icon'/> +1 929-367-8993
        </p>
        <p className="footer-location">
          New York, NY. Los Angeles, CA. Worldwide.
        </p>
      </div>
      <div className="footer-right">
        <div className="footer-social">
          <p>Follow us on :</p>
          <div className="footer-social-icons">
            <BsInstagram className='icon'/>
            <BsLinkedin  className='icon'/>
            <BsFacebook  className='icon'/>
            <BsTwitterX  className='icon'/>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
