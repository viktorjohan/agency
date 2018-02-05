import React, { Component } from 'react';
import './css/App.css';
import pigeon from './Pigeon.mp4';
import Header from './components/Header';
import Footer from './components/Footer';
import Clients from './components/Clients';
import Guestbook from './components/Guestbook';
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
        <Clients />
        <Guestbook />
        <Footer />
      </div>
    );
  }
}



export default App;
