import React, { Component } from 'react';
import './css/App.css';
import pigeon from './Pigeon.mp4';
import Header from './components/Header';
import Footer from './components/Footer';
import Projects from './components/Projects';


class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Projects />
        <Footer />
      </div>
    );
  }
}



export default App;
