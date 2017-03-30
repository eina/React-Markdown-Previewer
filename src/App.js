//External Libraries
import marked from 'marked';
//React
import React, { Component } from 'react';
import './App.css';

function markdownToHTML (md){
  return {__html:marked(md)};
}

const Output = (props) => {
  return <div dangerouslySetInnerHTML={ markdownToHTML(props.value) } />
  // return <div>{props.value}</div>;
};


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
         
          <div className="output">
            <h2 className="output_title">Output</h2>
            <Output value={marked(this.state.value)}/>
            {/*<div> {this.state.value} </div>*/}
         </div>

        </div>        
      </div> 
    );
  }
}

export default App;
