import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ColorButton from 'components/ColorButton';

const App = (props) => {

  const redButton = {
    title: 'Красный',
    onClick: () => console.info('Click'),
    color: 'red'
  }

  return (<div>
    <ColorButton {...redButton}/>
  </div>)
};

ReactDOM.render(<App />, document.getElementById('root'));