import React, {Component} from 'react';
import './Shelfbins.css';
import axios from 'axios';

import {Link} from 'react-router-dom';

class Shelfbins extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentShelf: '',
      bins: []
    }
  }

  componentDidMount() {
    const shelf = this.props.match.params.id;
    axios.get(`http://localhost:3006/api/shelf/${shelf}`)
      .then(res => {
        this.setState({currentShelf: shelf, bins: res.data});
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  getBinId = (arrInd) => {
    const shelf = this.state.currentShelf;
    const bin = arrInd + 1;
    return `${shelf}${bin}`;
  }

  render() {
    return (
      <div id="shelfbin-container">
        {
          this.state.bins.map((val, index) => (
            <div key={val === null?this.getBinId(index) : val.shelf + val.bin}>
              <Link to={val === null?"/bin/new/" + this.getBinId(index): "/bin/" + val.shelf + val.bin}>
                <button>{val === null?"+ Add Item to Inventory" : "Bin " + val.bin}</button>
              </Link>
            </div>
          ))
        }
      </div>
    )
  }
}

export default Shelfbins;
