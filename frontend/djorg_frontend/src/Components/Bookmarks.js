import axios from 'axios';
import React, { Component } from 'react';
import Form from './Form'

const notesClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/bookmarks/',
  timeout: 5000,
});

class Bookmarks extends Component {
  state = {
    bookmarks: [],
    title: "bookmarks title",
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
      <div className="wrapper">
        <div className="header">Bookmarks</div>
        <ul>
        { this.state.bookmarks.map(bookmark =>
          <li key= { bookmark.bookmark_id} >
            <div className="title">{ bookmark.bookmark_name }</div>
            <a href={ bookmark.bookmark_url }>{ bookmark.bookmark_url }</a>
            <div className="note">{ bookmark.bookmark_note }</div>
          </li>
          )
        }
        </ul> 
        { this.state.error ? <h2> { this.state.error } </h2> : '' }
        <Form title= {this.state.title} />
      </div>
    );
  }
}

export default Bookmarks;
