//External Libraries
// import Marked from 'marked';
//React
import React, { Component } from 'react';
import './App.css';
// Import Components
import Input from './components/input';
import Output from './components/output';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      value:'Hello\n========\nIDK markdown! Wow!!', 
      outputValue: ''
    };
  }

  render() {
    return (
      <div className="App">
        <h1>React Markdown Previewer</h1>
        <div className="container">
          <Input />
          <Output value={this.state.outputValue}/>
        </div>        
      </div>
    );
  }
}

export default App;
