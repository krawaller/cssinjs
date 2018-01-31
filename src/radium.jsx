import * as React from 'react';
import {explanationBlock} from './styles';
import Radium from 'radium';

@Radium
class App extends React.Component {
  render() {
    return (
      <div style={explanationBlock.box}>
        <Headline>Did you know?</Headline>
        <p>Ozelots hate maccaws!</p>
      </div>
    );
  }
}

const Headline = Radium(props => <h2 style={explanationBlock.headline}>{props.children}</h2>);

export default App;