import axios from 'axios';
import React, { Component } from 'react';
import Form from './Form'

const notesClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/chatter/',
  timeout: 5000,
});

class Messages extends Component {
  state = {
    messages: [],
    title: 'messages title',
    error: '',
  };

  componentDidMount() {
    notesClient.get('/')
      .then((response) => {
        const messages = response.data;
        this.setState({ messages });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  render() {
    return (
      <div className="wrapper">
        <div className="header">Messages</div>
        <ul>
          { this.state.messages.map(message =>
            <li key={ message.id }>
              <div className="title">From: { message.fromUser }</div>
              <div className="note">Message: { message.content }</div>
            </li>
          )}
        </ul>
        { this.state.error ? <h2> { this.state.error } </h2> : '' }
        <Form title = { this.state.title } />
      </div>
    );
  }
}

export default Messages;
