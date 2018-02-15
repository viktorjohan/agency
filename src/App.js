import React, { Component } from 'react';
import './css/App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Clients from './components/Clients';
import Guestbook from './components/Guestbook';
import Projects from './components/Projects';
import Bar from './components/Bar';


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
        <Bar />
        <Guestbook />
        <Footer />
      </div>
    );
  }
}



export default App;
