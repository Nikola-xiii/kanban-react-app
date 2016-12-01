import React from 'react';
import ReactDOM from 'react-dom';
import Nodes from './components/Node';

if(process.env.NODE_ENV !== 'production') {
  React.Perf = require('react-addons-perf');
}

ReactDOM.render(
  <Nodes/>,
  document.getElementById('app')
);
