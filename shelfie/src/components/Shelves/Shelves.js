import React, {Component} from 'react';
import './Shelves.css';

import {Link} from 'react-router-dom';

class Shelves extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelves:['A', 'B', 'C', 'D'],
    }
  }

  render() {
    return (
      <div id="shelf-container">
        {
          this.state.shelves.map((val) => (
            <div key={val} id={`shelf-${val}`}>
            <Link to={`/shelf/${val}`}>
              <button>Shelf {val}</button>
            </Link>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Shelves;
