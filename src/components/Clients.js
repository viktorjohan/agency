import React, { Component } from 'react';
import '../css/App.css';

class Clients extends Component {
  constructor () {
    super();
    this.state = {
      clients: []
    }
  }

  componentDidMount() {
    let clientsURL = "http://localhost:8888/wp-json/wp/v2/clients?per_page=12";
    fetch (clientsURL)
    .then (response => response.json())
    .then (response => {
      this.setState ({
        clients: response
      })
    })
  }
  render(){
    let clients = this.state.clients.map((client, index) => {
      return (
        <div className="clientslogo__wrapper--logo">
          <img src={client.better_featured_image.source_url} />
        </div>
      )
    })
    return (
      <div className="clients__container">
        <div className="clientslogo__wrapper">
          {clients}
        </div>
      </div>
    )
  }
}

export default Clients;
