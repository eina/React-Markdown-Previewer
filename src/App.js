//External Libraries
import marked from 'marked';
//React + Components
import React, { Component } from 'react';
import './App.css';
import Output from './components/output.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state={
      value:'Hello\n========\nIDK markdown! Wow!!'
    };
  }

  render() {
    return (
      <div className="App">
        <h1>React Markdown Previewer</h1>
        <div className="container">
         
          <textarea name="" id="" cols="30" rows="10"
            value={this.state.value}
            onChange={ (e) => { this.setState({ value: e.target.value }) } }
          ></textarea>
        
          <Output value={marked(this.state.value)}/>

        </div>        
      </div> 
    );
  }
}

export default App;
