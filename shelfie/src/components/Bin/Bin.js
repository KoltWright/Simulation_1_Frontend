import React, {Component} from 'react';
import './Bin.css';
import axios from 'axios';

class Bin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemName: '',
      itemPrice: '',
      edited: false
    }
  }
  componentDidMount() {
    const binId = this.props.match.params.id;

    axios.get(`http://localhost:3006/api/bin/${binId}`)
      .then(res => {
        const {item_name, item_price} = res.data[0];
        console.log(item_name);
        console.log(item_price);
        this.setState({itemName: item_name, itemPrice: item_price});
      })
      .catch(err => {
        console.log(err);
      })
  }
  render() {
    return (
      <div>
        <input type="text" value={this.state.itemName} />
        <input type="text" value={this.state.itemPrice} />
      </div>
    )
  }
}

export default Bin;
