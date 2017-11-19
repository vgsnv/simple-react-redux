import * as React from 'react';
import * as ReactDOM from 'react-dom';

import ColorButton from 'components/ColorButton';
import ColorsCode from 'components/ColorsCode';

const Colors = [
  '#e59866',
  '#f8c471',
  '#f7dc6f',
  '#7dcea0',
  '#76d7c4',
  '#7fb3d5',
];

const App = (props) => {

  const redButton = {
    title: 'Красный',
    clickAddBtn: () => console.info('Click'),
    color: 'red'
  }

  const greenButton = {
    title: 'Зеленый',
    clickAddBtn: () => console.info('Click'),
    color: 'green'
  }

  const yellowButton = {
    title: 'Желтый',
    clickAddBtn: () => console.info('Click'),
    color: 'yellow'
  }

  return (<div>
    <ColorButton {...redButton} />
    <ColorButton {...greenButton} />
    <ColorButton {...yellowButton} />
    <ColorsCode clickDelBtn={()=> console.log('click')} colors={Colors}/>
  </div>)
};

ReactDOM.render(<App />, document.getElementById('root'));