import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ColorButton from 'components/ColorButton';

const App = (props) => {

  const redButton = {
    title: 'Красный',
    onClick: () => console.info('Click'),
    color: 'red'
  }

  const greenButton = {
    title: 'Зеленый',
    onClick: () => console.info('Click'),
    color: 'green'
  }

  const  yellowButton = {
    title: 'Желтый',
    onClick: () => console.info('Click'),
    color: 'yellow'
  }
  return (<div>
    <ColorButton {...redButton}/>
    <ColorButton {...greenButton}/>
    <ColorButton {...yellowButton}/>
  </div>)
};

ReactDOM.render(<App />, document.getElementById('root'));