import axios from 'axios';
import React, { Component } from 'react';

const notesClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/bookmarks/',
  timeout: 5000,
});

class Bookmarks extends Component {
  state = {
    bookmarks: [],
    error: '',
  };

  componentDidMount() {
    notesClient.get('/')
      .then((response) => {
        const bookmarks = response.data;
        this.setState({ bookmarks });
      })
      .catch((error) => {
        this.setState({ error: error.message });
      });
  }

  render() {
    return (
      <div className="App">
        Bookmarks
        <ul>
        { this.state.bookmarks.map(bookmark =>
          <li key= { bookmark.bookmark_id} >
            <h4>{ bookmark.bookmark_name }</h4>
            <p>{ bookmark.bookmark_url }</p>
          </li>
          )
        }
        </ul> 
      </div>
    );
  }
}

export default Bookmarks;
