import React, { Component } from 'react';
import '../css/App.css';
import pigeon from '../Pigeon.mp4';
// import fish from './Fish-Tank.mp4';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  }

  closeNav = () => {
      document.getElementById("myNav").style.width = "0%";
  }

  componentDidMount(){
    let projectsURL = "http://localhost:8888/wp-json/wp/v2/projects"
    fetch(projectsURL)
    .then(response => response.json())
    .then(response => {
      this.setState({
        projects: response
      })
    })
  }
  render() {
    let projects = this.state.projects.map((project, index) => {
      let cleanText = project.content.rendered.replace(/<\/?[^>]+(>|$)/g, "");
      return (
        <div key={index} className="project-item">
          {/* <h4>{project.title.rendered}</h4> */}
          <div className="case-box">
            <Link to={{pathname: `/projectitem/${project.title.rendered}`, state: {image: project.better_featured_image.source_url, extra_image: project.acf.extra_image.url, title: project.title.rendered, desc: project.acf.description}}}>
              <img src={project.better_featured_image.source_url} />
            </Link>
            <div className="overlay-hover">
              {cleanText}
            </div>
          </div>
        </div>
      )
    })
    return (
      <div className="wrapper">
        <div id="myNav" className="overlaynav">
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
          <div className="overlay-content">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </div>
        <span style={{fontSize: '30px', cursor: 'pointer', color: 'white'}} onClick={this.openNav}>&#9776;</span>
        <p>Selected work</p>
        <div className="project-container">
          {projects}
        </div>
      </div>
    );
  }
}

export default Projects;
