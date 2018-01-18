import React, { Component } from 'react';
import '../App.css';
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

  componentDidMount(){
    let projectsURL = "http://localhost:8888/wp-json/wp/v2/movies"
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
      return (
        <div key={index} className="project-item">
          <h4>{project.title.rendered}</h4>
          {/* <p>{project.content.rendered}</p> */}
          <Link to={{pathname: `/projectitem/${project.title.rendered}`, state: {image: project.better_featured_image.media_details.sizes.medium.source_url, content: project.content.rendered}}}>
            <img src={project.better_featured_image.media_details.sizes.medium.source_url} />
          </Link>
          <p>{project.acf.year}</p>
        </div>
      )
    })
    return (
      // <div className="App">
        <div className="project-container">
          {projects}
        </div>
      // </div>
    );
  }
}

export default Projects;
