import React, { Component } from 'react';
import '../css/App.css';
import pigeon from '../Pigeon.mp4';
import { Spinner } from 'react-spinkit';
import { BeatLoader } from 'react-spinners';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: [],
      isLoading: true
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
      .then(() => {
        this.setState({
          isLoading: false
        });
      })
      .catch(error => {
        console.log('error')
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
            <div className="overlay-hover">
              <p>{project.title.rendered}</p>
              <p style={{fontSize: '18px', fontFamily: 'Raleway'}}>{project.acf.date}</p>
            </div>
              <img src={project.better_featured_image.source_url} />
            </Link>
            {/* <div className="overlay-hover">
              {cleanText}
            </div> */}
          </div>
        </div>
      )
    })
    return (
      <div className="wrapper">
        {/* <div id="myNav" className="overlaynav">
          <a href="javascript:void(0)" className="closebtn" onClick={this.closeNav}>&times;</a>
          <div className="overlay-content">
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Clients</a>
            <a href="#">Contact</a>
          </div>
        </div> */}
        <span style={{fontSize: '30px', cursor: 'pointer', color: 'white'}} onClick={this.openNav}>&#9776;</span>
        <p>Selected work</p>
        <div style={{marginBottom: "40px", marginTop: '30px'}}>
          {this.state.isLoading &&
            <BeatLoader
              color={'#20242b'}
            />
          }
        </div>
        <div className="project-container">
          {projects}
        </div>
      </div>
    );
  }
}

export default Projects;
