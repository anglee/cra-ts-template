/**
 * Copyright (c) Ang Lee 2020 (http://anglee.info/)
 **/

import { Button } from 'antd';
import React from 'react';
import './App.less';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
          <Button type="primary">Button</Button>
        </div>
      </header>
    </div>
  );
}

export default App;
