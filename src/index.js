import React, { useState, Fragment } from 'react';
import ReactDOM from 'react-dom';

import './styles.css';
import ExpressionInput from './ExpressionInput';

function App() {
  return (
    <Fragment>
      <div className="App">
        <ExpressionInput width={500} />
        <ExpressionInput width={500} />
      </div>
      <div className="App">
        <ExpressionInput width={500} />
        <ExpressionInput width={500} />
      </div>
      <div className="App">
        <ExpressionInput width={500} />
        <ExpressionInput width={500} />
      </div>
    </Fragment>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
