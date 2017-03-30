import React, { Component } from 'react';

class Input extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
  }

  render(){
    return(
      <div className="input">
        <h2>Input</h2>
        <textarea name="input" id="" cols="30" rows="10"           
          defaultValue={this.state.value}
          onChange={ event => this.setState({ term: event.target.value }) }>
        </textarea>
        Value of input: {this.state.value}
      </div>
    );
  }
}

export default Input;
