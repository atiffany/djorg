import axios from 'axios';
import React, { Component } from 'react';

const notesClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/chatter/',
  timeout: 5000,
});

class Messages extends Component {
  state = {
    messages: [],
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
      <div>
        Messages
        <ul>
          { this.state.messages.map(message =>
            <li key={ message.id }>
              <h4>From: { message.fromUser }</h4>
              <p>Message: { message.content }</p>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Messages;
