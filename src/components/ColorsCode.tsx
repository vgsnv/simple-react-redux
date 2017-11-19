import * as React from 'react';

interface ColorCode {
  id: string,
  color: string
}

interface Props {
  clickDelBtn: () => void;
  colors: Array<ColorCode>;
}

interface State {
}

export default class ColorsCode extends React.Component<Props, State> {

  private renderColorCircle() {

    const {
      clickDelBtn,
      colors
    } = this.props;

    return colors.map((item) => {
      return (
        <div
          key={item.id}
          onClick={clickDelBtn}
          style={{
            backgroundColor: item.color,
            borderRadius: 100,
            height: 60,
            width: 60,
            display: 'inline-block',
            marginLeft: 10,
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
