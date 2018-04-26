import axios from 'axios';
import React, { Component } from 'react';
import Form from './Form'

const notesClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/notes/',
  timeout: 5000,
});

class Notes extends Component {
  state = {
    notes: [],
    title: 'notes title',
    error: '',
  };

  componentDidMount() {
    notesClient.get('/')
      .then((response) => {
        const notes = response.data;
        this.setState({ notes });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  render() {
    return (
      <div className="wrapper">
      <div className="header">Notes</div>
        <ul>
          { this.state.notes.map(note => 
            <li key={ note.id }>
              <div className="title">{ note.title }</div>
              <div className="note">{ note.content }</div>
            </li>
          )}
        </ul>
        { this.state.error ? <h2> { this.state.error } </h2> : '' }
        <Form title={this.state.title} />
      </div>
    );
  }
}

export default Notes;
