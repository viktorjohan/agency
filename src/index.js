import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import Footer from './components/Footer';
import ProjectItem from './components/ProjectItem';
import ScrollToTop from './components/ScrollToTop';
import registerServiceWorker from './registerServiceWorker';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import * as firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBzRARdKhk_HQ5FbHwpa6-aHNFDkZyggHQ",
    authDomain: "agency-guestbook.firebaseapp.com",
    databaseURL: "https://agency-guestbook.firebaseio.com",
    projectId: "agency-guestbook",
    storageBucket: "",
    messagingSenderId: "826219732262"
  };
  firebase.initializeApp(config);

ReactDOM.render(
  <Router>
    <ScrollToTop>
      <Route exact path="/" component={App}/>
      <Route path="/footer" component={Footer}/>
      <Route path="/projectitem/:id" component={ProjectItem}/>
    </ScrollToTop>
  </Router>, document.getElementById('root'));
registerServiceWorker();
