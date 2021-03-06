import React, { Component } from 'react';
import { Link } from 'react-browser-router'

class Menu extends Component {
  render() {
    return (
      <div className="nav">
        <Link to='/' className='nav__item'>Home</Link>
        <Link to='/notes' className='nav__item'>Notes To Self</Link>
        <Link to='/bookmarks' className='nav__item'>Bookmarked Sites</Link>
        <Link to='/messages' className='nav__item'>Messages</Link>
      </div>
    );
  }
}

export default Menu;
