import React, { Component } from 'react';
import '../App.css';
import pigeon from '../Pigeon.mp4';

class Header extends Component {
  render(){
    return (
      <div className="header">
        <video className="background-video" loop autoPlay>
          <source src={pigeon} type="video/mp4"/>
        </video>
        <div className="overlay">
          <h1>pigeon</h1>
          <p className="nedryckare">Erik Svedenlund skalar kottar i bokskogen</p>
        </div>
      </div>
    )
  }
}

export default Header;
