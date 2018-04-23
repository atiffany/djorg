import axios from 'axios';
import React, { Component } from 'react';

const notesClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/notes/',
  timeout: 5000,
});

class Bookmarks extends Component {
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
      <div className="App">
        Bookmarks
      </div>
    );
  }
}

export default Bookmarks;
