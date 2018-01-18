import React, { Component } from 'react';
import '../App.css';
import pigeon from '../Pigeon.mp4';

class ProjectItem extends Component {
  render(){
    console.log(this.props);
    return (
      <div className="projectcaseitem">
        <h2>Project items!</h2>
        <img src={this.props.location.state.image} />
        {this.props.location.state.content}
      </div>
    )
  }
}

export default ProjectItem;
