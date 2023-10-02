import React from "react";
import icon from './Images/iCON 7 1 (1).png';
import './styles/Footer.css';

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Div1">
        <img className="icon" src={icon} alt="icon" />
        <p>HelpMeOut</p>
      </div>

      <div className="Div2">
        <h4>Menu</h4>
        <p>Home</p>
        <p>Converter</p>
        <p>How it Works</p>
      </div>

      <div className="Div3">
      <h4>About us</h4>
        <p>About</p>
        <p>Contact Us</p>
        <p>Privacy Policy</p>
      </div>

      <div className="Div4">
      <h4>Screen Record</h4>
        <p>Browser Window</p>
        <p>Desktop</p>
        <p>Application</p>
      </div>
    </div>
  );
};

export default Footer;
