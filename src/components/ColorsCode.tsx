import * as React from 'react';

interface Props {
  clickDelBtn: () => void;
  color: string;
}

interface State {
}

export default class ColorsCode extends React.Component<Props, State> {

  render() {

    const {
      clickDelBtn,
      color
    } = this.props;

    return (<div
      style={{
        marginTop: 60
      }}
      onClick={clickDelBtn}
    >
      <div style={{
        backgroundColor: color,
        borderRadius: 50,
        height: 50,
        width: 50,
        margin: '0, auto, 0, auto',
      }}>
      </div>
    </div>)
  }

}
