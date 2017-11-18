import * as React from 'react';

interface Props {
  clickAddBtn: () => void;
  title: string;
  color: string;
}

interface State {
}

export default class ColorButton extends React.Component<Props, State> {

  render() {

    const {
      clickAddBtn,
      title,
      color
    } = this.props;

    return (<div
      style={{
        width: 150,
        display: 'inline-block'
      }}
    >
      <p
        style={{
          textAlign: 'center',
        }}
      >{title}</p>
      <button
        style={{
          backgroundColor: color,
          borderRadius: 50,
          height: 100,
          width: 100,
          margin: '0, auto, 0, auto',
        }}
        onClick={clickAddBtn}
      >
      </button>
    </div>)
  }

}
