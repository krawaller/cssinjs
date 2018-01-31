import * as React from 'react';

import {explanationBlock} from './style';

class App extends React.Component {
  render() {
    return (
      <div style={explanationBlock.box}>
        <h2 style={explanationBlock.headline}>Did you know?</h2>
        <p>Ozelots hate maccaws!</p>
      </div>
    );
  }
}

export default App;