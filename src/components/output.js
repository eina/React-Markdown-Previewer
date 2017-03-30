//External Libraries
import marked from 'marked';
//React
import React from 'react';

function markdownToHTML (md){
  return {__html:marked(md)};
}

const Output = (props) => {
  return (
    <div className="col output">
      {/*<h2 className="output_title">Output</h2>*/}
      <div dangerouslySetInnerHTML={ markdownToHTML(props.value) } />
    </div>
  );

};

export default Output;
