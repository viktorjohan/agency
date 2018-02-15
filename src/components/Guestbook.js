import React, { Component } from 'react';
import '../css/App.css';
import firebase from 'firebase';
import { Row, Input, Button, Icon } from 'react-materialize';

class Guestbook extends Component {
  constructor (props){
    super(props);
    this.state = {
      messages: [{
        name: '',
        message: ''
      }],
      newNoteName: '',
      newNoteMessage: ''
    }
  }

  handleNoteName = (e) => {
    this.setState({
      newNoteName: e.target.value
    })
  }

  handleNoteMessage = (e) => {
    this.setState({
      newNoteMessage: e.target.value
    })
  }

  writeMessage = () => {
    firebase.database().ref('messages/').push({
			name: this.state.newNoteName,
			message: this.state.newNoteMessage
		});
    this.setState({
      newNoteMessage: '',
      newNoteName: ''
    });
  }

  deleteMessage = (id) => {
    firebase.database().ref(`messages/${id}`).remove();
  }

  componentDidMount = () => {
  		const db = firebase.database();
  		db.ref('messages/').on('value', snapshot => {
  			let data = snapshot.val();
  			let list = [];
  			for( let item in data ) {
          data[item].id = item;
  				list.unshift(data[item]);
  			}
  			this.setState({ messages: list });
  		})
  }

  render(){
    const messages = this.state.messages.map((m, index) => {
      return (
        <div className="message__wrapper">
          <p className="message__wrapper--name">{m.name}</p>
          <p className="message__wrapper--content">{m.message}</p>
          <Button className="deleteButton" onClick={() => this.deleteMessage(m.id)}>Delete</Button>
        </div>
      )
    });
    return (
      <div className="guestbook__wrapper">
        <h3>Guestbook</h3>
        <div className="formWrapper">
          <Input className="nameInput" placeholder="Name" value={this.state.newNoteName} onChange={this.handleNoteName} />
          <br />
          <Input className="messageInput" placeholder="Message" value={this.state.newNoteMessage} onChange={this.handleNoteMessage} />
          <br />
          <Button className="noteButton" onClick={this.writeMessage}>Send!</Button>
        </div>
        <div className="formWrapper__messages">
          {messages}
        </div>
      </div>
    )
  }
}

export default Guestbook;
