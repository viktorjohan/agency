import React, { Component } from 'react';
import '../css/App.css';
import pigeon from '../Pigeon.mp4';
import Footer from './Footer'

class ProjectItem extends Component {
  render(){
    console.log(this.props);
    return (
      <div className="projectcaseitem">
        <div className="projectcaseitem__header">
          <img src={this.props.location.state.image} />
        </div>
        <div className="projectcaseitem__wrapper">
          <h3>
            {this.props.location.state.title}
          </h3>
          <p>
            {this.props.location.state.desc}
          </p>
          <div className="projectcaseitem__wrapper--extraimg">
            <img src={this.props.location.state.extra_image} />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default ProjectItem;
