import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Footer from './components/Footer';
import ProjectItem from './components/ProjectItem';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/" component={App}/>
      <Route path="/footer" component={Footer}/>
      <Route path="/projectitem/:id" component={ProjectItem}/>
    </div>
  </Router>, document.getElementById('root'));
registerServiceWorker();
