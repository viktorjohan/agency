import React, { Component } from 'react';
import '../css/App.css';
import pigeon from '../Pigeon.mp4';

class Footer extends Component {
  render(){
    return (
      <div className="footer">
        <div className="footer__wrapper">
          <div className="footer__wrapper--left">
            <h2>YO-YO</h2>
          </div>
          <div className="footer__wrapper--center">
            <h2>Contact</h2>
            <p>Erik Eriksson</p>
            <p>erik@yo-yo.com</p>
            <p>+ 46 732 54 55 52</p>
          </div>
          <div className="footer__wrapper--center2">
            <h2>Office</h2>
            <p>Postgatan 18</p>
            <p>Gothenburg</p>
            <p>Sweden</p>
          </div>
          <div className="footer__wrapper--right">
            <h2>Social</h2>
            <p><a href="#">Facebook</a></p>
            <p><a href="#">Twitter</a></p>
            <p><a href="#">Instagram</a></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;
