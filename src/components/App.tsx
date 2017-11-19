import * as React from 'react';

import ControlPanel from 'components/ControlPanel';
import ColorsCode from 'components/ColorsCode';

const ColorButtons = [
  { id: '1', title: 'Красный', color: 'red', clickAddBtn: () => console.info('Click') },
  { id: '2', title: 'Зеленый', color: 'green', clickAddBtn: () => console.info('Click') },
  { id: '3', title: 'Желтый', color: 'yellow', clickAddBtn: () => console.info('Click') },
];

const Colors = [
  { id: '1', color: '#e59866' },
  { id: '2', color: '#f8c471' },
  { id: '3', color: '#f7dc6f' },
  { id: '4', color: '#7dcea0' },
  { id: '5', color: '#76d7c4' },
  { id: '6', color: '#7fb3d5' },
];

export default  () => {
  return (<div>
    <ControlPanel colorButtons={ColorButtons} />
    <ColorsCode clickDelBtn={() => console.log('click')} colors={Colors} />
  </div>)
};