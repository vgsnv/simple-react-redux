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
        width: 120,
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
          height: 80,
          width: 80,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        onClick={clickAddBtn}
      >
      </button>
    </div>)
  }

}
