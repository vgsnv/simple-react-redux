import * as React from 'react';

interface Props {
  clickDelBtn: () => void;
  colors: Array<string>;
}

interface State {
}

export default class ColorsCode extends React.Component<Props, State> {

  private renderColorCircle() {

    const {
      clickDelBtn,
      colors
    } = this.props;

    return colors.map((color) => {
      return (
        <div
          onClick={clickDelBtn}
          style={{
            backgroundColor: color,
            borderRadius: 50,
            height: 50,
            width: 50,
            margin: '0, auto, 0, auto',
          }}>
        </div>
      )
    });
  }

  render() {

    return (<div
      style={{
        marginTop: 60
      }}
    >
      {this.renderColorCircle()}
    </div>)
  }

}
