import * as React from 'react';
import * as ReactDOM from 'react-dom';

import CSSInJS from './cssinjs';
import NormalCSS from './normalcss';
import NormalBEM from './normalbem';
import NormalLESS from './normalless';
import Radium from './radium';
import RadiumHover from './radiumhover';

ReactDOM.render(
  <CSSInJS />,
  document.getElementById('cssinjs')
);

ReactDOM.render(
  <NormalCSS />,
  document.getElementById('normalcss')
);

ReactDOM.render(
  <NormalLESS />,
  document.getElementById('normalless')
);

ReactDOM.render(
  <NormalBEM />,
  document.getElementById('normalbem')
);

ReactDOM.render(
  <Radium />,
  document.getElementById('radium')
);

ReactDOM.render(
  <RadiumHover />,
  document.getElementById('radiumhover')
);