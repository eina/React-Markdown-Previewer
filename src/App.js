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
      value:'## What is this?\n\nThis is a **Github Flavored Markdown** previewer built with React made by [Eina Onting](https://eina.ca). \n\n## How do I use this?\n\nGitHub has a [comprehensive guide](https://guides.github.com/features/mastering-markdown/#intro, \'GitHub Guides: Mastering Markdown\') for all the things you might want to know, but here are some quick examples:\n\n#### Text Formatting\n*italic*, **bold**, `monospace`, ~~strikethrough~~ \n\n> This is a blockquote!\n\n#### Lists\n\n**Unordered List**\n* Rhodia\n* Leuchtterm1917\n* Moleskine\n\n**Ordered List**\n1. First\n2. Second\n3. Third\n'
    };
  }

  render() {
    return (
      <div className="container-fluid app">
        <h1 className="app_title">React Markdown Previewer</h1>
        <div className="inner-container row">
         
          <textarea className="col input" name="input"
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
