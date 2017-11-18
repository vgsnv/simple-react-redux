import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface Props {
  onClick: () => void;
  title: string;
  color: string;
}

interface State {
}

class ColorButton extends React.Component<Props, State> {

  render() {

    const {
      onClick,
      title,
      color
    } = this.props;

    return (<div
      style={{
        width: 150,
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
        onClick={onClick}
      >
      </button>
    </div>)
  }

}

const App = (props) => {
  return (<div>
    <ColorButton
      title='Красный'
      onClick={() => console.info('Click')}
      color='red'
    />
  </div>)
};

ReactDOM.render(<App />, document.getElementById('root'));