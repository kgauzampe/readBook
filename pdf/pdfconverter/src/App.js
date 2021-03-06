import React, {Component} from 'react';
import axios from 'axios'
import { saveAS } from 'file-saver'
import './App.css';

class  App extends Component {
  state = {
    name= '',
    recieptid: 0,
    price1: 0,
    price2: 0
  }

  handleChange = ({ target: {value, name}}) => this.setState({[name]: value})

  createAndDownloadPdf = () => {
    axios.post('/create-pdf',this.state  )
  }

  render() {
    return (
      <div className="App">
        <input type="text" placeholder="name" name="name" onChange={this.handleChange} />
        <input type="number" placeholder="Reciept ID" name="recieptid" onChange={this.handleChange} />
        <input type="number" placeholder="Price 1" name="price1" onChange={this.handleChange} />
        <input type="number" placeholder="Price 2" name="price2" onChange={this.handleChange} />
        <button onClick={this.createAndDownloadPdf}>Download PDF</button>
      </div>
    );
  }
 
}

export default App;
 