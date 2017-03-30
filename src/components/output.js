import Marked from 'marked';
import React from 'react';

function markdownToHTML (md){
  return {__html:Marked(md)};
}

const Output = (props) => {
  return (
    <div className="output">
      <h2 className="output_title">Output</h2>
      <div className="output_result" dangerouslySetInnerHTML={markdownToHTML(props.value)} />
    </div>
  );
}

export default Output;