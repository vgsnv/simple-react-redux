import * as React from 'react';
import * as ReactDOM from 'react-dom';

const Button = (props) => {
  return (<button
    onClick={props.onClick}
  >
    {props.title}
  </button>)
}

const App = (props) => {
  return (<div>
    <Button
      title='Добавить'
      onClick={() => console.info('Click')}
    />
  </div>)
};

ReactDOM.render(<App/>, document.getElementById('root'));