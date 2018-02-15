import React, { Component } from 'react';
import '../css/App.css';
import yoyo from '../yoyo.mp4';

class Header extends Component {
  render(){
    return (
      <div className="header">
        <video className="background-video" loop autoPlay>
          <source src={yoyo} type="video/mp4"/>
        </video>
        <div className="overlay">
          <h1>YO-YO</h1>
          <p className="nedryckare">storytelling & digital experiences</p>
          {/* <img src={yoyopng} style={{width: "50px"}} /> */}
        </div>
      </div>
    )
  }
}

export default Header;
