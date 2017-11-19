import * as React from 'react';

import ColorButton from 'components/ColorButton';

interface ColorCode {
  clickAddBtn: () => void;
  id: string;
  title: string;
  color: string;
}

interface Props {
  colorButtons: Array<ColorCode>
}

interface State {
}

export default class ControlPanel extends React.Component<Props, State> {

  private renderColorButtons() {
    const {
      colorButtons
    } = this.props;

    return colorButtons.map((button) => {
      return (
        <ColorButton key={button.id} {...button} />
      )
    })
  }

  render() {

    return (<div
      style={{
        marginTop: 60
      }}
    >
      {this.renderColorButtons()}
    </div>)
  }

}
