import * as React from 'react';
import * as ReactDOM from 'react-dom';

const App = (props) => {
  return (<h1>Hello, {props.name}</h1>)
};

ReactDOM.render(<App name={'World'} />, document.getElementById('root'));