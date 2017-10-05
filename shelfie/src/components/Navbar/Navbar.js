import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <header>
        <div id="navbar-main">
          <img src="logo.png"></img>
          <h1>SHELFIE</h1>
        </div>
        <div id="navbar-shelf">
        </div>
        <div id="navbar-bin">
        </div>
      </header>
    )
  }
}

export default Navbar;
