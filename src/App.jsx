import React, { Component } from 'react';
import {FormGroup, FormControl, InputGroup, Glyphicon} from 'react-bootstrap';
import Gallery from './Gallery';

import axios from 'axios';


export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      query:'',
      items: []
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  handleClick(event) {

    let BASE_URL=`https://www.googleapis.com/books/v1/volumes?q=${this.state.query}`;

    axios.get(BASE_URL)
    .then(function (response) {
        this.setState({items:response.data.items});
      }.bind(this))
    .catch(function (error) {
    console.log(error);
    });

    this.setState({query:''})

  }

  handleChange(event){
    this.setState({query:event.target.value})
  }

  handleKeyPress(event){
    if (event.key === 'Enter'){
      this.handleClick();
    }
  }

  render() {
    return(
      <div className='App'>
        <h2>BOOK EXPLORER</h2>
          <FormGroup>
            <InputGroup
              className='inputField'>
              <FormControl
                placeholder='Search for a book...'
                value={this.state.query}
                type="text"
                onChange={this.handleChange}
                onKeyPress={this.handleKeyPress}/>
              <InputGroup.Addon
                onClick={this.handleClick}
                onChange={this.handleChange}>
                <Glyphicon glyph="search" />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          <Gallery items={this.state.items}/>
      </div>
    );
  }
}
