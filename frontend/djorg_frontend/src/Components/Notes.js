import axios from 'axios';
import React, { Component } from 'react';

const notesClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/notes/',
  timeout: 5000,
});

class Notes extends Component {
  state = {
    notes: [],
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
      <div className="App">
        <ul>
          { this.state.notes.map(note => 
            <li key={ note.id }>
              <h4>{ note.title }</h4>
              <p>{ note.content }</p>
            </li>
          )}
        </ul>
        { this.state.error ? <h2> { this.state.error } </h2> : '' }
      </div>
    );
  }
}

export default Notes;
