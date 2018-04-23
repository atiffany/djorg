import React, { Component } from 'react';
import { render } from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-browser-router'
import './App.css';
import Bookmarks from './Components/Bookmarks'
import Home from './Components/Home'
import Menu from './Components/Menu'
import Messages from './Components/Messages'
import Notes from './Components/Notes'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Route exact path='/' component={ Home } />
          <Route path='/notes' component={ Notes } />
          <Route path='/bookmarks' component={ Bookmarks } />
          <Route path='/messages' component={ Messages } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
