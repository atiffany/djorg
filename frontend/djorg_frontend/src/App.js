import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-browser-router'
import './App.css';
import './Components/CSS/Menu.css'
import './Components/CSS/componentDisplay.css'
import './Components/CSS/Form.css'
import Bookmarks from './Components/Bookmarks'
import Home from './Components/Home'
import Menu from './Components/Menu'
import Messages from './Components/Messages'
import Notes from './Components/Notes'
import Date from './Components/Date'

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
          <Route path='/' component={ Date } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
